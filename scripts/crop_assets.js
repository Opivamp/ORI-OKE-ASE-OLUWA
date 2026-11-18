const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function decodePngRGB(filePath) {
  const buf = fs.readFileSync(filePath);
  let pos = 8;
  let ihdr = null;
  const idatChunks = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.subarray(pos + 4, pos + 8).toString('ascii');
    if (type === 'IHDR') {
      ihdr = {
        width: buf.readUInt32BE(pos + 8),
        height: buf.readUInt32BE(pos + 12),
        bitDepth: buf[pos + 16],
        colorType: buf[pos + 17]
      };
    } else if (type === 'IDAT') {
      idatChunks.push(buf.subarray(pos + 8, pos + 8 + len));
    }
    pos += 8 + len + 4;
  }
  const decompressed = zlib.inflateSync(Buffer.concat(idatChunks));
  const { width, height } = ihdr;
  const bpp = 3; // RGB
  const raw = Buffer.alloc(width * height * 3);
  const stride = 1 + width * bpp;

  for (let y = 0; y < height; y++) {
    const filter = decompressed[y * stride];
    const rowOffset = y * stride + 1;
    for (let x = 0; x < width * bpp; x++) {
      const cur = decompressed[rowOffset + x];
      let a = x >= bpp ? raw[y * width * bpp + x - bpp] : 0;
      let b = y > 0 ? raw[(y - 1) * width * bpp + x] : 0;
      let c = (x >= bpp && y > 0) ? raw[(y - 1) * width * bpp + x - bpp] : 0;
      let val = 0;

      if (filter === 0) {
        val = cur;
      } else if (filter === 1) { // Sub
        val = (cur + a) & 0xff;
      } else if (filter === 2) { // Up
        val = (cur + b) & 0xff;
      } else if (filter === 3) { // Average
        val = (cur + Math.floor((a + b) / 2)) & 0xff;
      } else if (filter === 4) { // Paeth
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        let pr = c;
        if (pa <= pb && pa <= pc) pr = a;
        else if (pb <= pc) pr = b;
        val = (cur + pr) & 0xff;
      }
      raw[y * width * bpp + x] = val;
    }
  }
  return { width, height, raw };
}

function crc32(buf) {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcInput = Buffer.concat([typeBuf, data]);
  const crcVal = crc32(crcInput);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crcVal, 0);
  return Buffer.concat([lenBuf, crcInput, crcBuf]);
}

function cropAndSavePng(src, x0, y0, w, h, outPath) {
  const bpp = 3;
  const stride = 1 + w * bpp;
  const filtered = Buffer.alloc(h * stride);

  for (let y = 0; y < h; y++) {
    filtered[y * stride] = 0; // Filter 0 (None)
    const srcRow = (y0 + y) * src.width * bpp + x0 * bpp;
    const destRow = y * stride + 1;
    src.raw.copy(filtered, destRow, srcRow, srcRow + w * bpp);
  }

  const compressed = zlib.deflateSync(filtered);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(w, 0);
  ihdrData.writeUInt32BE(h, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 2; // RGB
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace

  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]));
  console.log(`Saved ${outPath} (${w}x${h})`);
}

console.log('Decoding reference PNG...');
const src = decodePngRGB('Image/Ori Oke Ase Oluwa Ministry Homepage.png');
console.log(`Decoded reference PNG: ${src.width}x${src.height}`);

// Let's crop:
// 1. Logo area: top nav logo is roughly x=25..125, y=30..90
// Let's crop a slightly wider box for logo: x=25, y=30, w=95, h=65
cropAndSavePng(src, 25, 30, 95, 65, 'public/images/logo-reference.png');

// 2. Full logo + text banner: x=20, y=28, w=320, h=66
cropAndSavePng(src, 20, 28, 320, 66, 'public/images/logo-brand-reference.png');

// 3. Hero background: from y=95 to y=450, full width 1024
cropAndSavePng(src, 0, 95, 1024, 355, 'public/images/hero-reference.png');

// 4. Founder portrait: roughly x=700..830, y=580..720
cropAndSavePng(src, 700, 580, 135, 140, 'public/images/founder-reference.png');

// 5. Pre-footer banner: roughly y=1295..1415, full width 1024
cropAndSavePng(src, 0, 1295, 1024, 120, 'public/images/cta-banner-reference.png');

// 6. Special monthly programme photos:
// Night of Encounter: x=362..470, y=630..705
cropAndSavePng(src, 362, 630, 108, 75, 'public/images/night-encounter.png');
// Back to sender (dove): x=362..470, y=715..790
cropAndSavePng(src, 362, 715, 108, 75, 'public/images/back-to-sender.png');
// Men praying: x=362..470, y=800..875
cropAndSavePng(src, 362, 800, 108, 75, 'public/images/men-praying.png');

// 7. Gallery thumbnails:
// 5 images around y=1070..1190
// img1: x=20..210 (mountain landscape)
cropAndSavePng(src, 20, 1065, 192, 125, 'public/images/gallery-mock-1.png');
// img2: x=220..410 (tent revival)
cropAndSavePng(src, 218, 1065, 192, 125, 'public/images/gallery-mock-2.png');
// img3: x=418..608 (retreat lodge)
cropAndSavePng(src, 416, 1065, 192, 125, 'public/images/gallery-mock-3.png');
// img4: x=614..804 (auditorium worship)
cropAndSavePng(src, 614, 1065, 192, 125, 'public/images/gallery-mock-4.png');
// img5: x=812..1002 (mountain cross summit)
cropAndSavePng(src, 812, 1065, 192, 125, 'public/images/gallery-mock-5.png');

