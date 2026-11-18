# ORI OKE ASE OLUWA (IBUDO IYANU)
## Official Ministry Website — Production Release

> **Official Tagline:** *"Prayer, Spiritual Empowerment and Transformation."*  
> **Founder & General Overseer:** Prophet Sunday Olawale  
> **Year Established:** 2014  
> **Sacred Mountain Location:** Prayer City, KM 54/400 New Oyo - Ogbomoso Expressway, Oyo State, Nigeria  

---

## 📖 Overview

This repository contains the complete, modern, responsive, high-performance website for **Ori Oke Ase Oluwa (Ibudo Iyanu)**. 

The website has been developed in strict accordance with the master design specification and reproduces the layout, visual hierarchy, green and gold brand tokens, typography, and section arrangement from the primary design reference (`Ori Oke Ase Oluwa Ministry Homepage.png`).

---

## 🌟 Key Features & Sections

1. **Top Contact & Partner Strip**
   - Highway address: *Prayer City, KM 54/400 New Oyo - Ogbomoso Expressway, Oyo State*
   - Configurable telephone & email slots (no fictional details published)
   - Social media placeholders
   - Gold *"Donate 💛"* partner modal trigger

2. **Main Navigation**
   - High-resolution circular ministry seal
   - Full ministry typography: *ORI OKE ASE OLUWA (IBUDO IYANU)*
   - Dynamic page switching (Home, About Us, Prayer & Retreats, Events, Facilities, Gallery, Testimonies, Contact)
   - Search modal with instant query results across all pages
   - Prominent *"Plan Your Visit"* call-to-action button
   - Responsive mobile navigation drawer with touch targets

3. **Homepage Hero Section**
   - Full-width panoramic prayer mountain landscape with worshippers and cross
   - Left dark green overlay with gold script *"Welcome to —"*
   - Majestic serif typography for ministry name and tagline
   - Top-right Jeremiah 33:3 quote badge (*"Call unto Me, and I will answer you..."*)
   - Dual CTAs: *"Plan Your Visit ➔"* and *"Explore The Mountain"*

4. **5-Point Quick Highlight Bar**
   - Prayer Grounds
   - Spiritual Retreats
   - Comfortable Facilities
   - Powerful Programmes
   - Easy Access

5. **2-Column Split Section (Desktop Composition)**
   - **Left Column (60%): Weekly & Monthly Programme Schedule**
     - *1. Daily Programmes (Monday – Saturday):*
       - Afternoon Session: 12:00 PM – 2:00 PM
       - Evening Session: 6:00 PM – 7:00 PM
       - Midnight Vigil: 12:00 AM – 2:00 AM
     - *2. Sunday Programmes:*
       - Sunday Service: 8:30 AM – 12:00 PM
       - Special Sunday Programme: 4:00 PM – 6:00 PM
     - *3. Special Monthly Programmes:*
       - A. Night of Encounter (Second Wednesday to Friday, 12:00 AM – 4:00 AM)
       - B. Back to Sender Programme (Last Friday of every month, 10:00 AM – 2:00 PM)
       - C. Men's Programme [Men Only] (Last day of every month, 9:00 AM – 10:00 AM; if Sunday, 3:00 PM – 4:00 PM)
   - **Right Column (40%): About Our Mountain**
     - Founder portrait: *Prophet Sunday Olawale* (Established: 2014)
     - Our Vision statement
     - Our 9 Mission statements (numbered 1 through 9)
     - *"Learn More About Us ➔"* link

6. **Interactive Gallery & Lightbox**
   - 5 preview thumbnails on the homepage
   - Full dedicated gallery page with category filtering (*All, Facilities & Grounds, Worship & Prayer, Leadership, Prayer Mountain, Programmes*)
   - Fullscreen Lightbox modal with next/previous navigation, keyboard arrow support, and captions
   - Authentic photographs of the prayer grounds, auditorium altar, chalets, vigil, and signboard

7. **Pre-Footer Call-to-Action Banner**
   - Curved landscape banner with hill silhouette and cross at sunset
   - Praying hands emblem with gold divider
   - *"Come and Encounter God — Plan your visit to Ibudo Iyanu"*
   - Gold *"Contact Us ➔"* button

8. **Footer**
   - Isaiah 56:7 scripture (*"For my house shall be called a house of prayer for all nations."*)
   - Ministry location and 2014 founding statement
   - Multi-column site links
   - Dynamic current year copyright notice
   - Modals for Privacy Policy & Terms of Visit

9. **Dedicated Inner Pages & Functional Forms**
   - **About Us:** Detailed history, founder profile, vision, 9 mission cards
   - **Prayer & Retreats:** Timetables, vigils, guidelines
   - **Facilities:** Auditorium, accommodation chalets, shaded grounds, water, restrooms
   - **Testimonies:** Scriptural invitation & interactive testimony submission form
   - **Plan Your Visit:** Travel directions (Lagos/Ibadan, Ogbomoso/Ilorin, Abuja), highway landmark KM 54/400, and mountain visit registration form
   - **Contact Us:** Secretariat details and validated enquiry message form
   - **Partner / Giving:** Configurable donation modal with transparent administration notice

---

## 🎨 Design Tokens & Branding

- **Forest Green:** `#06452F`
- **Deep Green:** `#003B27`
- **Gold:** `#F4C430`
- **Warm Gold:** `#D9A928`
- **Lime Green:** `#8BD329`
- **Ivory Background:** `#F8F7F0`
- **Dark Text:** `#17251D`
- **White:** `#FFFFFF`

---

## 🚀 Running the Website Locally

You can launch and view the website immediately using the included lightweight server:

```bash
# Using Node.js (Zero dependencies needed)
node server.cjs
```

Then open your browser at:
`http://localhost:3000`

Alternatively, you can open `index.html` directly in any modern web browser.

---

## 📁 Project Structure

```text
Ori-Oke Aseoluwa Web-Project/
├── index.html                   # Production HTML entry point
├── app.js                       # Production client-side bundle
├── server.cjs                   # Native Node.js HTTP server
├── tailwind.config.js           # Tailwind design tokens & font configuration
├── package.json                 # Project dependencies & scripts
├── public/
│   ├── app.js                   # Application script
│   └── images/
│       ├── logo-badge.png       # Official circular logo
│       ├── hero-mountain.png    # Homepage hero image
│       ├── founder-portrait.png # Prophet Sunday Olawale portrait
│       ├── banner-encounter.png # Pre-footer landscape banner
│       ├── prog-*.png           # Monthly programme preview thumbnails
│       ├── gallery-*.png        # Gallery preview images
│       └── real/                # Authentic ministry photos from the mountain:
│           ├── photo_..._02-00-24.jpg # Joyful church praise celebration
│           ├── photo_..._02-00-40.jpg # Prophet Sunday Olawale ministering
│           ├── photo_..._02-00-47.jpg # Fervent midnight vigil prayers
│           ├── photo_..._02-00-52.jpg # Prophet Sunday Olawale & ministers praying
│           ├── photo_..._02-00-57.jpg # Prayer grounds with shady mango tree
│           ├── photo_..._02-01-11.jpg # Open-air prayer gazebo & chalets
│           ├── photo_..._02-01-14.jpg # Main Auditorium Altar & terrazzo cross
│           ├── photo_..._02-01-20.jpg # Main Auditorium sanctuary wide view
│           ├── photo_..._02-01-33.jpg # Accommodation guest chalets
│           └── photo_..._02-01-47.jpg # Official expressway entrance signpost
├── src/                         # Modular React + TypeScript sources
│   ├── App.tsx                  # Root application
│   ├── index.css                # Custom CSS & Tailwind directives
│   ├── data/
│   │   └── ministryData.ts      # Centralized ministry configuration & content
│   ├── components/              # Modular UI components
│   └── pages/                   # Dedicated page views
└── scripts/
    └── crop_assets.cjs          # High-fidelity reference asset extraction script
```

---

## ⚙️ Updating Ministry Details

To update contact numbers, emails, or social media links once officially provided:
1. Open `public/app.js` and `src/data/ministryData.ts`.
2. Locate the `contact` configuration block:
   ```javascript
   contact: {
     isPhonePublic: true, // change to true when ready
     phoneDisplay: "+234 803 067 0667",
     phoneRaw: "+2348030670667",
     isEmailPublic: true,
     emailDisplay: "office@oriokeaseoluwa.org",
     social: {
       facebook: "https://facebook.com/oriokeaseoluwa",
       youtube: "https://youtube.com/@oriokeaseoluwa",
       instagram: "https://instagram.com/oriokeaseoluwa",
       whatsapp: "2348030670667"
     }
   }
   ```
3. Save the file. The changes will update automatically across all navigation bars, contact sections, and footers.

