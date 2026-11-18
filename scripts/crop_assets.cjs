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
  const bpp = 3;
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
      } else if (filter === 1) {
        val = (cur + a) & 0xff;
      } else if (filter === 2) {
        val = (cur + b) & 0xff;
      } else if (filter === 3) {
        val = (cur + Math.floor((a + b) / 2)) & 0xff;
      } else if (filter === 4) {
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
    filtered[y * stride] = 0;
    const srcRow = (y0 + y) * src.width * bpp + x0 * bpp;
    const destRow = y * stride + 1;
    src.raw.copy(filtered, destRow, srcRow, srcRow + w * bpp);
  }

  const compressed = zlib.deflateSync(filtered);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(w, 0);
  ihdrData.writeUInt32BE(h, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 2;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]));
  console.log(`Saved ${outPath} (${w}x${h})`);
}

const src = decodePngRGB('Image/Ori Oke Ase Oluwa Ministry Homepage.png');

// Clean circular logo emblem:
cropAndSavePng(src, 30, 31, 88, 58, 'public/images/logo-badge.png');
// Full header brand banner with logo + title + tagline:
cropAndSavePng(src, 25, 27, 315, 65, 'public/images/logo-brand.png');

// Hero section (from below navbar y=94 to start of quick highlight bar y=435):
cropAndSavePng(src, 0, 94, 1024, 341, 'public/images/hero-mountain.png');

// Founder portrait (Prophet Sunday Olawale):
cropAndSavePng(src, 705, 583, 132, 137, 'public/images/founder-portrait.png');

// Pre-footer banner:
cropAndSavePng(src, 0, 1276, 1024, 134, 'public/images/banner-encounter.png');

// Monthly programmes:
cropAndSavePng(src, 360, 642, 114, 62, 'public/images/prog-encounter.png');
cropAndSavePng(src, 360, 715, 114, 63, 'public/images/prog-back-to-sender.png');
cropAndSavePng(src, 360, 792, 114, 63, 'public/images/prog-men-prayer.png');

// Gallery:
cropAndSavePng(src, 18, 1065, 194, 125, 'public/images/gallery-1.png');
cropAndSavePng(src, 216, 1065, 194, 125, 'public/images/gallery-2.png');
cropAndSavePng(src, 414, 1065, 194, 125, 'public/images/gallery-3.png');
cropAndSavePng(src, 612, 1065, 194, 125, 'public/images/gallery-4.png');
cropAndSavePng(src, 810, 1065, 194, 125, 'public/images/gallery-5.png');

console.log('Finished updating crops.');
