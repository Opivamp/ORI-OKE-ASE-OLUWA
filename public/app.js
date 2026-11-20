// ORI OKE ASE OLUWA (IBUDO IYANU) - OFFICIAL COMPLETE WEB APPLICATION
(function () {
  const { useState, useEffect, createElement: h } = React;

  // 1. CENTRAL MINISTRY DATA (Single source of truth)
  const ministryData = {
    name: "ORI OKE ASE OLUWA (IBUDO IYANU)",
    shortName: "Ori Oke Ase Oluwa",
    subtitle: "Ibudo Iyanu",
    tagline: "Prayer, Spiritual Empowerment and Transformation.",
    founder: "Prophet Sunday Olawale",
    founderTitle: "Founder and General Overseer",
    yearEstablished: 2014,
    location: {
      address: "Prayer City, KM 54/400 New Oyo - Ogbomoso Expressway, Oyo State, Nigeria",
      shortAddress: "Prayer City, KM 54/400 New Oyo - Ogbomoso Expressway, Oyo State",
      city: "Oyo",
      state: "Oyo State",
      country: "Nigeria",
      landmark: "Directly located at KM 54/400 along the New Oyo - Ogbomoso Expressway with visible official signpost."
    },
    scriptures: {
      hero: {
        verse: "Call unto Me, and I will answer you...",
        reference: "Jeremiah 33:3"
      },
      footer: {
        verse: "For my house shall be called a house of prayer for all nations.",
        reference: "Isaiah 56:7"
      },
      emblem: {
        verse: "Upon Mount Zion shall be deliverance, and there shall be holiness...",
        reference: "Obadiah 1:17"
      }
    },
    about: {
      lead: "Ori Oke Ase Oluwa, popularly known as Ibudo Iyanu, is a Christian prayer mountain established in 2014 under the divine leadership of Prophet Sunday Olawale.",
      body: [
        "It is a sacred sanctuary dedicated to prayer, spiritual empowerment, transformation, divine encounters and the advancement of the Gospel of Jesus Christ.",
        "Built upon the unshakable foundation of God's Word and the supernatural power of prayer, Ibudo Iyanu provides a serene, spiritually-charged atmosphere where believers come to seek God's presence, experience renewal, receive Holy Spirit empowerment, and grow profoundly in their faith.",
        "Through consistent prayer vigils, Bible teaching, conferences, evangelism, and deliverance ministrations, the ministry is committed to leading souls to salvation, freedom, holiness, and an intimate communion with God.",
        "Our heart's desire is to see lives transformed, destinies fulfilled, families restored, believers empowered and the Gospel of Jesus Christ advanced across the nations."
      ]
    },
    vision: "To lead all people to salvation and a new life in Jesus Christ, empowering them through the Holy Spirit, prayer, and the Word of God to live in holiness, fulfil God's divine purpose, advance the Gospel across nations, and ultimately make Heaven.",
    missions: [
      { number: 1, title: "Salvation & New Life", description: "To bring people to a new life in Jesus Christ through the power of the Holy Spirit, prayer, and the preaching of the Gospel." },
      { number: 2, title: "Deliverance & Freedom", description: "To set people free from the power of darkness and spiritual bondage through prayer, holiness, and the power of the Holy Spirit." },
      { number: 3, title: "Sound Word & Effective Prayer", description: "To teach and equip believers with sound knowledge of God's Word and the principles of effective, result-oriented prayer." },
      { number: 4, title: "Spiritual Gatherings & Healing", description: "To organise impactful prayer programmes, conferences, and spiritual gatherings to address people's spiritual, physical, health, mental, and family needs through divine intervention." },
      { number: 5, title: "Kingdom Collaboration", description: "To collaborate with local and international ministries and Gospel ministers to advance the kingdom of God through prayer and evangelism." },
      { number: 6, title: "Church Planting & Discipleship", description: "To plant churches across Nigeria and beyond, spreading the Gospel and raising spiritually empowered believers." },
      { number: 7, title: "Holistic Well-being", description: "To promote the spiritual, physical, material, and emotional well-being of members and the wider community." },
      { number: 8, title: "Educational Development", description: "To establish educational institutions that provide quality education and contribute to the development of individuals and society." },
      { number: 9, title: "Humanitarian Love of Christ", description: "To demonstrate the love of Christ through humanitarian services, leadership development, and support for the less privileged, while advancing the Gospel to all nations." }
    ],
    schedules: {
      daily: [
        { name: "Afternoon Session", time: "12:00 PM – 2:00 PM" },
        { name: "Evening Session", time: "6:00 PM – 7:00 PM" },
        { name: "Midnight Vigil", time: "12:00 AM – 2:00 AM" }
      ],
      sunday: [
        { name: "Sunday Service", time: "8:30 AM – 12:00 PM" },
        { name: "Special Sunday Programme", time: "4:00 PM – 6:00 PM" }
      ],
      monthly: [
        {
          id: "night-of-encounter",
          letter: "A",
          title: "NIGHT OF ENCOUNTER",
          schedule: "Second Wednesday to Friday of every month",
          time: "12:00 AM – 4:00 AM",
          image: "/images/real/photo_2026-11-18_02-00-47.jpg",
          description: "A three-night mountain vigil dedicated to intense prayer, breakthroughs, Holy Ghost fire, and prophetic alignment.",
          category: "Deliverance & Vigil"
        },
        {
          id: "back-to-sender",
          letter: "B",
          title: "BACK TO SENDER PROGRAMME",
          schedule: "Last Friday of every month",
          time: "10:00 AM – 2:00 PM",
          image: "/images/prog-back-to-sender.png",
          description: "Spiritual warfare and deliverance service breaking demonic strongholds and reversing spiritual arrows.",
          category: "Spiritual Warfare"
        },
        {
          id: "mens-programme",
          letter: "C",
          title: "MEN'S PROGRAMME (MEN ONLY)",
          schedule: "Last day of every month",
          time: "9:00 AM – 10:00 AM",
          specialCondition: "If the last day falls on a Sunday, the programme will hold from 3:00 PM – 4:00 PM.",
          image: "/images/real/photo_2026-11-18_02-00-52.jpg",
          description: "A dedicated monthly empowerment gathering for men, fathers, and leaders to intercede for families and destinies.",
          category: "Men's Ministry"
        }
      ]
    },
    facilities: [
      {
        id: "prayer-auditorium",
        title: "Main Prayer Auditorium",
        shortDesc: "Large air-conditioned and well-ventilated worship hall with a prominent terrazzo cross and prayer altar.",
        fullDesc: "The Main Prayer Auditorium serves as the worship and intercession epicenter of Ibudo Iyanu. It features a spacious tiled platform, custom gold lecterns, state-of-the-art sound systems, and a consecrated altar with an inlaid terrazzo cross bearing the ministry inscription 'ORI OKE ASE OLUWA'. Designed for high-capacity church services, all-night vigils, and seminars.",
        image: "/images/real/photo_2026-11-18_02-01-14.jpg",
        features: ["Consecrated Prayer Altar", "Terrazzo Inlaid Cross", "High-Fidelity Audio Setup", "Spacious Seating Capacity"]
      },
      {
        id: "accommodation",
        title: "Retreat Accommodation & Lodges",
        shortDesc: "Comfortable, serene guest chalets and rooms for individuals, families, and ministers on personal retreats.",
        fullDesc: "Designed to provide visitors with peaceful, quiet rest during personal retreats, dry fasting, and multi-day vigils. The guest buildings and chalets offer clean sleeping areas, ventilation, and a serene environment conducive to uninterrupted fellowship with God.",
        image: "/images/real/photo_2026-11-18_02-01-33.jpg",
        features: ["Private Retreat Rooms", "Group Accommodation", "Secure & Peaceful", "Proximity to Prayer Grounds"]
      },
      {
        id: "prayer-grounds",
        title: "Outdoor Prayer Grounds & Groves",
        shortDesc: "Quiet natural grounds shaded by mature mango trees, with seating for personal meditation and private prayer.",
        fullDesc: "Sprawling, tranquil prayer grounds set in nature where visitors can walk, meditate, pray, and fellowship with God in open air. Shaded by large mango trees with strategically placed prayer seats away from urban noise.",
        image: "/images/real/photo_2026-11-18_02-00-57.jpg",
        features: ["Natural Shaded Groves", "Private Outdoor Prayer Spaces", "Fresh Mountain Air", "Open-Air Fellowship Area"]
      },
      {
        id: "prayer-gazebo",
        title: "Open-Air Prayer Roundabout & Gazebo",
        shortDesc: "Covered circular pavilion for outdoor prayer groups, small fellowship sessions, and personal intercession.",
        fullDesc: "A purpose-built covered prayer gazebo offering shelter from the sun while allowing worshippers to pray with open horizons and clear breezes. Perfect for group intercession and silent meditation.",
        image: "/images/real/photo_2026-11-18_02-01-11.jpg",
        features: ["Tiled Roundabout Base", "Weather-Resistant Canopy", "360-Degree Mountain View", "Ideal for Group Intercession"]
      },
      {
        id: "water-facilities",
        title: "Borehole & Clean Water Supply",
        shortDesc: "Continuous access to clean, potable water throughout the mountain grounds for drinking and domestic use.",
        fullDesc: "Ibudo Iyanu is equipped with dedicated deep borehole water systems ensuring uninterrupted clean water for retreat participants, campers, and visitors around the clock.",
        image: "/images/gallery-3.png",
        features: ["Dedicated Deep Borehole", "Continuous Water Flow", "Potable & Domestic Use", "Accessible Tap Stations"]
      },
      {
        id: "sanitary-conveniences",
        title: "Restrooms & Sanitary Facilities",
        shortDesc: "Clean, hygienic restrooms and bath facilities regularly maintained for the convenience of all visitors.",
        fullDesc: "Modern, hygienic toilet and bathroom facilities situated conveniently across the auditorium, chalets, and grounds to ensure the comfort and dignity of retreat guests.",
        image: "/images/real/photo_2026-11-18_02-01-33.jpg",
        features: ["Separate Male & Female Units", "Running Water Access", "Regular Sanitation", "Convenient Locations"]
      }
    ],
    gallery: [
      { id: "gal-1", title: "Main Prayer Auditorium Altar", category: "facilities", categoryLabel: "Facilities", src: "/images/real/photo_2026-11-18_02-01-14.jpg", alt: "Main Prayer Auditorium Altar with Terrazzo Cross", caption: "The consecrated altar and terrazzo floor cross in the Main Auditorium.", isRealPhoto: true },
      { id: "gal-2", title: "Prophet Sunday Olawale Ministering", category: "leadership", categoryLabel: "Leadership", src: "/images/real/photo_2026-11-18_02-00-40.jpg", alt: "Prophet Sunday Olawale ministering with joy", caption: "Prophet Sunday Olawale ministering with joy during a celebration service.", isRealPhoto: true },
      { id: "gal-3", title: "Night Vigil Prayer Ministration", category: "worship", categoryLabel: "Worship & Prayer", src: "/images/real/photo_2026-11-18_02-00-47.jpg", alt: "Congregation and minister in fervent night vigil prayer", caption: "Fervent midnight prayers and intercession at Ibudo Iyanu.", isRealPhoto: true },
      { id: "gal-4", title: "Serene Prayer Grounds & Shaded Retreat", category: "mountain", categoryLabel: "Prayer Mountain", src: "/images/real/photo_2026-11-18_02-00-57.jpg", alt: "Prayer grounds under the shade of mature mango trees", caption: "Quiet, peaceful prayer grounds under the shade of trees.", isRealPhoto: true },
      { id: "gal-5", title: "Prayer Roundabout & Chalets", category: "facilities", categoryLabel: "Facilities", src: "/images/real/photo_2026-11-18_02-01-11.jpg", alt: "Open-air prayer gazebo and prayer chalets at Ibudo Iyanu", caption: "Circular open-air prayer gazebo and retreat chalets.", isRealPhoto: true },
      { id: "gal-6", title: "Ministers & Leadership in Prayer", category: "leadership", categoryLabel: "Leadership", src: "/images/real/photo_2026-11-18_02-00-52.jpg", alt: "Prophet Sunday Olawale and church ministers interceding together", caption: "Prophet Sunday Olawale and ministers in corporate prayer.", isRealPhoto: true },
      { id: "gal-7", title: "Retreat Accommodation Chalets", category: "facilities", categoryLabel: "Facilities", src: "/images/real/photo_2026-11-18_02-01-33.jpg", alt: "Retreat accommodation chalets and guest rooms", caption: "Accommodation chalets for visitors and retreat seekers.", isRealPhoto: true },
      { id: "gal-8", title: "Joyful Praise & Celebration", category: "worship", categoryLabel: "Worship & Prayer", src: "/images/real/photo_2026-11-18_02-00-24.jpg", alt: "Joyful church worship and praise session with dancing congregation", caption: "Celebration of divine testimonies, praise and worship.", isRealPhoto: true },
      { id: "gal-9", title: "Entrance Signboard & Programme Timetable", category: "programmes", categoryLabel: "Programmes", src: "/images/real/photo_2026-11-18_02-01-47.jpg", alt: "Official Ori Oke Ase Oluwa signpost along New Oyo - Ogbomoso Expressway", caption: "Official ministry signpost at the expressway entrance.", isRealPhoto: true },
      { id: "gal-10", title: "Main Auditorium Wide Perspective", category: "facilities", categoryLabel: "Facilities", src: "/images/real/photo_2026-11-18_02-01-20.jpg", alt: "Wide angle perspective of the Main Prayer Auditorium", caption: "Wide view of the Main Auditorium and sanctuary platform.", isRealPhoto: true },
      { id: "gal-11", title: "Prayer Mountain Landscape & Summit", category: "mountain", categoryLabel: "Prayer Mountain", src: "/images/gallery-1.png", alt: "Prayer mountain lush landscape view", caption: "Vast green mountain vistas surrounding the prayer sanctuary.", isRealPhoto: false },
      { id: "gal-12", title: "Mass Revival & Camp Meeting", category: "programmes", categoryLabel: "Programmes", src: "/images/gallery-2.png", alt: "Outdoor revival convention and gathering", caption: "Special convention gathering worshippers across the nation.", isRealPhoto: false }
    ]
  };

  // 2. ICON HELPERS
  const Icon = ({ name, className = "w-4 h-4" }) => {
    switch (name) {
      case 'map-pin':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }),
          h('circle', { cx: "12", cy: "10", r: "3" })
        );
      case 'phone':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
        );
      case 'mail':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('rect', { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
          h('path', { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
        );
      case 'heart':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" })
        );
      case 'calendar':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" })
        );
      case 'clock':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('circle', { cx: "12", cy: "12", r: "10" }),
          h('polyline', { points: "12 6 12 12 16 14" })
        );
      case 'arrow-right':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M5 12h14M12 5l7 7-7 7" })
        );
      case 'chevron-right':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "m9 18 6-6-6-6" })
        );
      case 'compass':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('circle', { cx: "12", cy: "12", r: "10" }),
          h('polygon', { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" })
        );
      case 'image':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('rect', { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }),
          h('circle', { cx: "9", cy: "9", r: "2" }),
          h('path', { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
        );
      case 'message-square':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
        );
      case 'phone-call':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }),
          h('path', { d: "M14.05 2a9 9 0 0 1 8 7.94" }),
          h('path', { d: "M14.05 6A5 5 0 0 1 18 10" })
        );
      case 'search':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('circle', { cx: "11", cy: "11", r: "8" }),
          h('path', { d: "m21 21-4.3-4.3" })
        );
      case 'menu':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('line', { x1: "4", x2: "20", y1: "12", y2: "12" }),
          h('line', { x1: "4", x2: "20", y1: "6", y2: "6" }),
          h('line', { x1: "4", x2: "20", y1: "18", y2: "18" })
        );
      case 'x':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M18 6 6 18M6 6l12 12" })
        );
      case 'praying-hands':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M7 11v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6" }),
          h('path', { d: "M12 2v9M9 5l3-3 3 3M9 14h6" })
        );
      case 'users':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
          h('circle', { cx: "9", cy: "7", r: "4" }),
          h('path', { d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" })
        );
      case 'home':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
          h('polyline', { points: "9 22 9 12 15 12 15 22" })
        );
      case 'eye':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
          h('circle', { cx: "12", cy: "12", r: "3" })
        );
      case 'target':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('circle', { cx: "12", cy: "12", r: "10" }),
          h('circle', { cx: "12", cy: "12", r: "6" }),
          h('circle', { cx: "12", cy: "12", r: "2" })
        );
      case 'sparkles':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" })
        );
      case 'check':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('polyline', { points: "20 6 9 17 4 12" })
        );
      case 'check-circle':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
          h('polyline', { points: "22 4 12 14.01 9 11.01" })
        );
      case 'send':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('line', { x1: "22", y1: "2", x2: "11", y2: "13" }),
          h('polygon', { points: "22 2 15 22 11 13 2 9 22 2" })
        );
      case 'building':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('rect', { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }),
          h('path', { d: "M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" })
        );
      case 'facebook':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })
        );
      case 'youtube':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
          h('polygon', { points: "10 15 15 12 10 9 10 15", fill: "currentColor" })
        );
      case 'instagram':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('rect', { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }),
          h('path', { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
          h('line', { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" })
        );
      case 'whatsapp':
        return h('svg', { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          h('path', { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" })
        );
      default:
        return null;
    }
  };

  // 3. MAIN APP
  function MainApp() {
    const [currentPage, setCurrentPage] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDonateOpen, setIsDonateOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [galleryFilter, setGalleryFilter] = useState('all');
    const [privacyModalType, setPrivacyModalType] = useState(null);

    // Form states
    const [testimonySubmitted, setTestimonySubmitted] = useState(false);
    const [visitSubmitted, setVisitSubmitted] = useState(false);
    const [contactSubmitted, setContactSubmitted] = useState(false);

    // Lock body scroll when mobile sidebar is open
    useEffect(() => {
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    // Close sidebar on Escape key
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const navigate = (page) => {
      setCurrentPage(page);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // TOP BAR
    const renderContactBar = () => {
      return h('div', { className: "bg-ministry-deep text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-ministry-forest/40" },
        h('div', { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5" },
          h('div', {
            onClick: () => navigate('visit'),
            className: "flex items-center gap-1.5 cursor-pointer hover:text-ministry-gold transition-colors text-center md:text-left"
          },
            h(Icon, { name: "map-pin", className: "w-3.5 h-3.5 text-ministry-gold shrink-0" }),
            h('span', { className: "font-medium tracking-wide" }, ministryData.location.shortAddress)
          ),
          h('div', { className: "hidden lg:flex items-center gap-1.5 text-gray-300" },
            h(Icon, { name: "phone", className: "w-3.5 h-3.5 text-ministry-gold shrink-0" }),
            h('span', {
              onClick: () => navigate('contact'),
              className: "hover:text-ministry-gold cursor-pointer transition-colors"
            }, "Enquiries & Prayer: Contact Mountain Office")
          ),
          h('div', { className: "flex items-center gap-4" },
            h('div', { className: "flex items-center gap-2.5 text-gray-300" },
              h('span', { className: "cursor-pointer hover:text-ministry-gold", title: "Facebook", onClick: () => navigate('contact') }, h(Icon, { name: "facebook", className: "w-3.5 h-3.5" })),
              h('span', { className: "cursor-pointer hover:text-ministry-gold", title: "YouTube", onClick: () => navigate('contact') }, h(Icon, { name: "youtube", className: "w-3.5 h-3.5" })),
              h('span', { className: "cursor-pointer hover:text-ministry-gold", title: "Instagram", onClick: () => navigate('contact') }, h(Icon, { name: "instagram", className: "w-3.5 h-3.5" })),
              h('span', { className: "cursor-pointer hover:text-ministry-gold", title: "WhatsApp", onClick: () => navigate('contact') }, h(Icon, { name: "whatsapp", className: "w-3.5 h-3.5" }))
            ),
            h('button', {
              onClick: () => setIsDonateOpen(true),
              className: "flex items-center gap-1.5 bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-semibold px-3 py-1 rounded-full text-xs shadow-sm hover:brightness-105 active:scale-95 transition-all"
            },
              h('span', null, "Donate"),
              h(Icon, { name: "heart", className: "w-3 h-3 fill-ministry-dark text-ministry-dark" })
            )
          )
        )
      );
    };

    // NAV
    const renderNav = () => {
      const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'programmes', label: 'Prayer & Retreats' },
        { id: 'facilities', label: 'Facilities' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'testimonies', label: 'Testimonies' },
        { id: 'contact', label: 'Contact' }
      ];

      return h('header', { className: "sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2.5 sm:py-3 transition-all duration-300" },
        h('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6" },
          // Brand Logo + Title
          h('div', {
            onClick: () => navigate('home'),
            className: "flex items-center gap-3 cursor-pointer group shrink-0"
          },
            h('div', { className: "w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden p-0.5 ring-2 ring-ministry-gold/60 shadow-sm bg-white shrink-0 group-hover:scale-105 transition-transform" },
              h('img', {
                src: "/images/logo.jpg",
                alt: "Ori Oke Ase Oluwa Logo",
                className: "w-full h-full object-cover rounded-full"
              })
            ),
            h('div', { className: "flex flex-col text-left" },
              h('span', { className: "font-serif font-bold text-base sm:text-lg lg:text-xl tracking-tight text-ministry-forest group-hover:text-ministry-deep transition-colors leading-tight" }, "ORI OKE ASE OLUWA"),
              h('span', { className: "text-xs sm:text-sm font-bold text-ministry-gold tracking-wide" }, "(IBUDO IYANU)")
            )
          ),

          // Desktop Links - Free, stylish, airy with underline indicator
          h('nav', { className: "hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm text-gray-700" },
            navLinks.map(link => {
              const isActive = currentPage === link.id;
              return h('button', {
                key: link.id,
                onClick: () => navigate(link.id),
                className: `relative py-2 tracking-wide transition-all duration-200 group ${
                  isActive ? 'text-ministry-forest font-bold' : 'text-gray-600 hover:text-ministry-forest'
                }`
              },
                h('span', null, link.label),
                isActive 
                  ? h('span', { className: "absolute bottom-0 left-0 right-0 h-[2.5px] bg-ministry-gold rounded-full" })
                  : h('span', { className: "absolute bottom-0 left-0 right-0 h-[2px] bg-ministry-forest/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" })
              );
            })
          ),

          // Desktop Right Action Area
          h('div', { className: "hidden lg:flex items-center gap-3" },
            h('button', {
              onClick: () => setIsSearchOpen(true),
              className: "p-2.5 text-gray-500 hover:text-ministry-forest hover:bg-gray-50 rounded-full transition-colors",
              'aria-label': "Search site"
            }, h(Icon, { name: "search", className: "w-4 h-4" })),
            h('button', {
              onClick: () => navigate('visit'),
              className: "bg-gradient-to-r from-ministry-gold to-ministry-warmGold hover:brightness-105 active:scale-95 text-ministry-dark font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            },
              h('span', null, "Plan Your Visit"),
              h(Icon, { name: "arrow-right", className: "w-3.5 h-3.5" })
            )
          ),

          // Mobile Right Buttons
          h('div', { className: "flex items-center gap-2 lg:hidden" },
            h('button', {
              onClick: () => setIsSearchOpen(true),
              className: "p-2 text-gray-600 hover:text-ministry-forest hover:bg-gray-100 rounded-full",
              'aria-label': "Search"
            }, h(Icon, { name: "search", className: "w-5 h-5" })),
            h('button', {
              onClick: () => setMobileMenuOpen(true),
              className: "p-2 text-ministry-forest hover:bg-gray-100 rounded-lg transition-colors active:scale-95",
              'aria-label': "Open Navigation Menu"
            }, h(Icon, { name: "menu", className: "w-6 h-6" }))
          )
        ),

        // Off-canvas Responsive Sidebar Drawer - Stylish & Smart
        h('div', {
          className: `fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`
        },
          // Soft Dark Blurred Backdrop (tap to close)
          h('div', {
            onClick: () => setMobileMenuOpen(false),
            className: "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
            'aria-hidden': "true"
          }),

          // Sliding Sidebar Panel (slides in smoothly from right)
          h('aside', {
            className: `absolute top-0 right-0 bottom-0 w-[86vw] max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-hidden transform transition-transform duration-300 ease-out ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`,
            role: "dialog",
            'aria-modal': "true",
            'aria-label': "Navigation Menu"
          },
            // 1. Sidebar Header
            h('div', { className: "p-4 sm:p-5 border-b border-gray-100 bg-[#FCFCFA] flex items-center justify-between gap-3 shrink-0" },
              h('div', {
                onClick: () => navigate('home'),
                className: "flex items-center gap-3 cursor-pointer group"
              },
                h('img', {
                  src: "/images/logo.jpg",
                  alt: "Ori Oke Ase Oluwa Logo",
                  className: "w-10 h-10 object-cover rounded-full shadow ring-2 ring-ministry-gold/60"
                }),
                h('div', { className: "flex flex-col text-left" },
                  h('span', { className: "font-serif font-bold text-sm sm:text-base text-ministry-forest leading-tight" }, "ORI OKE ASE OLUWA"),
                  h('span', { className: "text-[11px] sm:text-xs font-bold text-ministry-gold tracking-wide" }, "(IBUDO IYANU)")
                )
              ),
              h('button', {
                onClick: () => setMobileMenuOpen(false),
                'aria-label': "Close menu",
                className: "w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all active:scale-95"
              }, h(Icon, { name: "x", className: "w-5 h-5" }))
            ),

            // 2. Scrollable Navigation List with Rich Icons and Subtitles
            h('div', { className: "flex-1 overflow-y-auto px-4 py-4 space-y-1.5" },
              h('div', { className: "space-y-1" },
                [
                  { id: 'home', label: 'Home', subtitle: 'Sanctuary & Welcome', icon: 'home' },
                  { id: 'about', label: 'About Us', subtitle: 'Vision, 9 Missions & Founder', icon: 'compass' },
                  { id: 'programmes', label: 'Prayer & Retreats', subtitle: 'Daily Services & Vigils', icon: 'calendar' },
                  { id: 'facilities', label: 'Facilities', subtitle: 'Auditorium, Lodges & Grounds', icon: 'building' },
                  { id: 'gallery', label: 'Gallery', subtitle: 'Authentic Mountain Photography', icon: 'image' },
                  { id: 'testimonies', label: 'Testimonies', subtitle: 'Praise & Supernatural Acts', icon: 'message-square' },
                  { id: 'contact', label: 'Contact', subtitle: 'Directions & Enquiries', icon: 'phone-call' }
                ].map(item => {
                  const isActive = currentPage === item.id;
                  return h('button', {
                    key: item.id,
                    onClick: () => navigate(item.id),
                    className: `w-full group flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition-all text-left ${
                      isActive
                        ? 'bg-ministry-forest/10 border-l-4 border-ministry-forest text-ministry-forest shadow-sm'
                        : 'hover:bg-gray-50 text-gray-800'
                    }`
                  },
                    h('div', { className: "flex items-center gap-3" },
                      h('div', {
                        className: `w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-ministry-forest text-ministry-gold shadow-sm'
                            : 'bg-gray-100 text-ministry-forest group-hover:bg-ministry-ivory group-hover:text-ministry-forest'
                        }`
                      }, h(Icon, { name: item.icon, className: "w-4 h-4" })),
                      h('div', { className: "flex flex-col" },
                        h('span', {
                          className: `text-sm tracking-tight ${
                            isActive ? 'font-bold text-ministry-forest' : 'font-medium text-gray-800 group-hover:text-ministry-forest'
                          }`
                        }, item.label),
                        h('span', { className: "text-[11px] text-gray-400 group-hover:text-gray-500 font-sans" }, item.subtitle)
                      )
                    ),
                    h(Icon, {
                      name: "chevron-right",
                      className: `w-4 h-4 transition-transform ${
                        isActive ? 'text-ministry-forest' : 'text-gray-300 group-hover:text-ministry-forest group-hover:translate-x-0.5'
                      }`
                    })
                  );
                })
              ),

              // Search Shortcut
              h('div', { className: "pt-3" },
                h('button', {
                  onClick: () => {
                    setMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  },
                  className: "w-full flex items-center gap-3 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-medium transition-colors"
                },
                  h('div', { className: "w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-xs text-gray-500" },
                    h(Icon, { name: "search", className: "w-4 h-4" })
                  ),
                  h('span', null, "Search programmes, retreats, facilities...")
                )
              )
            ),

            // 3. Smart Sidebar Footer
            h('div', { className: "p-4 sm:p-5 border-t border-gray-100 bg-[#FCFCFA] space-y-3 shrink-0" },
              h('button', {
                onClick: () => navigate('visit'),
                className: "w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold hover:brightness-105 active:scale-95 text-ministry-dark font-extrabold py-3.5 px-4 rounded-xl shadow-md text-center flex items-center justify-center gap-2 text-sm transition-all"
              },
                h('span', null, "PLAN YOUR VISIT"),
                h(Icon, { name: "arrow-right", className: "w-4 h-4" })
              ),
              h('div', { className: "flex items-start gap-2 text-[11px] text-gray-500 bg-white p-2.5 rounded-lg border border-gray-100" },
                h(Icon, { name: "map-pin", className: "w-3.5 h-3.5 text-ministry-gold shrink-0 mt-0.5" }),
                h('span', { className: "line-clamp-2" }, "Prayer City, KM 54/400 New Oyo - Ogbomoso Expressway, Oyo State")
              ),
              h('p', { className: "text-[10px] text-center font-serif italic text-gray-400" },
                "“Call unto Me, and I will answer you...” — Jer. 33:3"
              )
            )
          )
        )
      );
    };

    // HOMEPAGE HERO
    const renderHero = () => {
      return h('section', { className: "relative overflow-hidden bg-ministry-forest min-h-[480px] lg:min-h-[540px] flex items-center" },
        h('div', { className: "absolute inset-0 z-0" },
          h('img', {
            src: "/images/hero.jpg",
            alt: "Ori Oke Ase Oluwa Prayer Mountain Sanctuary",
            className: "w-full h-full object-cover object-center"
          }),
          h('div', { className: "absolute inset-0 bg-gradient-to-r from-ministry-forest/95 via-ministry-forest/75 to-transparent sm:via-ministry-forest/60 lg:via-ministry-forest/35" }),
          h('div', { className: "absolute inset-0 bg-gradient-to-t from-ministry-forest/85 via-transparent to-black/25 lg:hidden" })
        ),
        h('div', { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full" },
          h('div', { className: "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8" },
            h('div', { className: "max-w-2xl text-left" },
              h('div', { className: "inline-flex items-center gap-2 mb-2 sm:mb-3" },
                h('span', { className: "font-serif italic text-ministry-gold text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide" }, "Welcome to"),
                h('span', { className: "w-8 sm:w-12 h-[2px] bg-ministry-gold/80 inline-block" })
              ),
              h('h1', { className: "font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 drop-shadow" },
                "Ori Oke Ase Oluwa",
                h('br'),
                h('span', { className: "text-white/95 font-semibold text-2xl sm:text-4xl lg:text-5xl" }, "(Ibudo Iyanu)")
              ),
              h('p', { className: "font-serif italic text-white/90 text-base sm:text-xl lg:text-2xl font-normal leading-relaxed mb-8 max-w-xl drop-shadow" },
                "“A Place of Divine Encounter,",
                h('br', { className: "hidden sm:inline" }),
                " Prayer and Transformation.”"
              ),
              h('div', { className: "flex flex-wrap items-center gap-4" },
                h('button', {
                  onClick: () => navigate('visit'),
                  className: "group bg-gradient-to-r from-ministry-gold to-ministry-warmGold hover:brightness-105 text-ministry-dark font-bold px-6 sm:px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center gap-3 text-sm sm:text-base"
                },
                  h('span', null, "Plan Your Visit"),
                  h('span', { className: "w-6 h-6 rounded-full bg-ministry-dark text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform" },
                    h(Icon, { name: "arrow-right", className: "w-3.5 h-3.5" })
                  )
                ),
                h('button', {
                  onClick: () => navigate('about'),
                  className: "bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-medium px-5 sm:px-6 py-3.5 rounded-full shadow-sm hover:shadow active:scale-95 transition-all text-sm sm:text-base"
                }, "Explore The Mountain")
              )
            ),
            h('div', { className: "self-end lg:self-start lg:mt-2" },
              h('div', { className: "bg-white/90 backdrop-blur-md border border-white/60 text-ministry-dark px-5 py-4 sm:px-6 sm:py-5 rounded-2xl shadow-elevated max-w-xs sm:max-w-sm text-center transform lg:hover:-translate-y-1 transition-transform" },
                h('span', { className: "text-3xl font-serif text-ministry-forest font-bold leading-none block -mb-2" }, "“"),
                h('p', { className: "font-serif italic text-ministry-deep text-lg sm:text-xl font-bold leading-snug mb-3" }, ministryData.scriptures.hero.verse),
                h('div', { className: "inline-block bg-ministry-forest text-white font-sans text-xs font-semibold px-3 py-1 rounded-full shadow-sm tracking-wide" }, ministryData.scriptures.hero.reference)
              )
            )
          )
        )
      );
    };

    // 5-HIGHLIGHT BAR
    const renderHighlightBar = () => {
      const items = [
        { icon: 'praying-hands', title: 'Prayer Grounds', sub: 'Sacred mountain terrain', page: 'facilities' },
        { icon: 'users', title: 'Spiritual Retreats', sub: 'Fasting & renewal stays', page: 'visit' },
        { icon: 'home', title: 'Comfortable Facilities', sub: 'Auditorium & guest rooms', page: 'facilities' },
        { icon: 'calendar', title: 'Powerful Programmes', sub: 'Daily & monthly vigils', page: 'programmes' },
        { icon: 'map-pin', title: 'Easy Access', sub: 'Oyo-Ogbomoso Expressway', page: 'visit' }
      ];

      return h('div', { className: "bg-[#FAF9F5] border-y border-gray-200/80 shadow-sm py-4 lg:py-5" },
        h('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
          h('div', { className: "grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200/90" },
            items.map((item, idx) =>
              h('button', {
                key: idx,
                onClick: () => navigate(item.page),
                className: "flex items-center justify-center gap-3 py-2 px-3 hover:bg-white/80 rounded-xl transition-all group text-left w-full focus:outline-none"
              },
                h('div', { className: "p-2.5 rounded-full bg-ministry-forest/10 group-hover:bg-ministry-forest group-hover:text-ministry-gold text-ministry-forest transition-colors shrink-0" },
                  h(Icon, { name: item.icon, className: "w-5 h-5 text-ministry-forest" })
                ),
                h('div', { className: "flex flex-col" },
                  h('span', { className: "font-bold text-xs sm:text-sm text-ministry-dark group-hover:text-ministry-forest transition-colors tracking-tight" }, item.title),
                  h('span', { className: "text-[11px] text-gray-500 hidden sm:block" }, item.sub)
                )
              )
            )
          )
        )
      );
    };

    // PROGRAMME SCHEDULE (LEFT 60%)
    const renderProgrammeSchedule = () => {
      const { schedules } = ministryData;
      return h('div', { className: "bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100 flex flex-col h-full" },
        h('div', { className: "bg-ministry-forest text-white p-4 sm:p-5 flex items-center gap-3.5 border-b-2 border-ministry-gold" },
          h('div', { className: "p-2 rounded-lg bg-ministry-deep text-ministry-gold shrink-0" },
            h(Icon, { name: "calendar", className: "w-6 h-6" })
          ),
          h('div', null,
            h('h2', { className: "font-serif text-lg sm:text-2xl font-bold tracking-tight text-white" }, "Weekly & Monthly Programme Schedule"),
            h('p', { className: "font-serif italic text-ministry-gold text-xs sm:text-sm font-medium" }, "Join us for powerful prayer and divine encounter")
          )
        ),
        h('div', { className: "p-4 sm:p-6 space-y-5 flex-1 bg-[#FCFCFA]" },
          h('div', { className: "bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm" },
            h('div', { className: "bg-ministry-forest text-white px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-between" },
              h('span', null, "1. DAILY PROGRAMMES (MONDAY – SATURDAY)"),
              h('span', { className: "text-[10px] text-ministry-gold font-normal lowercase tracking-normal" }, "every week")
            ),
            h('div', { className: "p-3.5 divide-y divide-gray-100 space-y-2.5" },
              schedules.daily.map((item, idx) =>
                h('div', { key: idx, className: "flex items-center justify-between pt-2 first:pt-0 text-xs sm:text-sm" },
                  h('div', { className: "flex items-center gap-2.5 font-semibold text-ministry-dark" },
                    h(Icon, { name: "clock", className: "w-4 h-4 text-ministry-forest shrink-0" }),
                    h('span', null, item.name)
                  ),
                  h('div', { className: "font-medium text-ministry-forest bg-ministry-ivory px-2.5 py-1 rounded-md border border-gray-100 font-mono text-xs font-bold" }, item.time)
                )
              )
            )
          ),
          h('div', { className: "bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm" },
            h('div', { className: "bg-ministry-forest text-white px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-between" },
              h('span', null, "2. SUNDAY PROGRAMMES"),
              h('span', { className: "text-[10px] text-ministry-gold font-normal lowercase tracking-normal" }, "Lord's day")
            ),
            h('div', { className: "p-3.5 divide-y divide-gray-100 space-y-2.5" },
              schedules.sunday.map((item, idx) =>
                h('div', { key: idx, className: "flex items-center justify-between pt-2 first:pt-0 text-xs sm:text-sm" },
                  h('div', { className: "flex items-center gap-2.5 font-semibold text-ministry-dark" },
                    h(Icon, { name: "clock", className: "w-4 h-4 text-ministry-forest shrink-0" }),
                    h('span', null, item.name)
                  ),
                  h('div', { className: "font-medium text-ministry-forest bg-ministry-ivory px-2.5 py-1 rounded-md border border-gray-100 font-mono text-xs font-bold" }, item.time)
                )
              )
            )
          ),
          h('div', { className: "bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm" },
            h('div', { className: "bg-ministry-forest text-white px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-between" },
              h('span', null, "3. SPECIAL MONTHLY PROGRAMMES"),
              h('span', { className: "text-[10px] text-ministry-gold font-normal lowercase tracking-normal" }, "monthly miracles")
            ),
            h('div', { className: "p-3.5 space-y-3.5" },
              schedules.monthly.map((prog) =>
                h('div', {
                  key: prog.id,
                  className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2.5 rounded-lg bg-gray-50/70 border border-gray-100 hover:border-ministry-gold/60 transition-colors"
                },
                  h('div', { className: "relative w-full sm:w-28 h-24 sm:h-20 rounded-lg overflow-hidden shrink-0 shadow-sm bg-ministry-deep" },
                    h('img', {
                      src: prog.image,
                      alt: prog.title,
                      className: "w-full h-full object-cover object-center"
                    }),
                    h('div', { className: "absolute top-1 left-1 bg-ministry-forest text-white font-bold text-[10px] w-5 h-5 rounded flex items-center justify-center shadow" }, prog.letter)
                  ),
                  h('div', { className: "flex-1 min-w-0" },
                    h('h4', { className: "font-bold text-xs sm:text-sm text-ministry-forest tracking-tight mb-1" }, `${prog.letter}. ${prog.title}`),
                    h('div', { className: "space-y-1 text-xs text-gray-700" },
                      h('div', { className: "flex items-center gap-1.5" },
                        h(Icon, { name: "calendar", className: "w-3.5 h-3.5 text-ministry-forest shrink-0" }),
                        h('span', { className: "font-medium" }, prog.schedule)
                      ),
                      h('div', { className: "flex items-center gap-1.5 text-ministry-forest font-semibold" },
                        h(Icon, { name: "clock", className: "w-3.5 h-3.5 text-ministry-forest shrink-0" }),
                        h('span', null, prog.time)
                      ),
                      prog.specialCondition && h('div', { className: "text-[11px] text-amber-900 bg-amber-50 p-1 rounded font-serif italic mt-1 border border-amber-200/50" },
                        `* ${prog.specialCondition}`
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    };

    // ABOUT OUR MOUNTAIN (RIGHT 40%)
    const renderAboutSection = () => {
      return h('div', { className: "bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100 flex flex-col h-full" },
        h('div', { className: "bg-ministry-forest text-white p-4 sm:p-5 flex items-center justify-between border-b-2 border-ministry-gold" },
          h('h2', { className: "font-serif text-lg sm:text-2xl font-bold tracking-tight text-white" }, "About Our Mountain"),
          h('button', {
            onClick: () => navigate('about'),
            className: "text-xs font-semibold text-ministry-gold hover:text-white transition-colors flex items-center gap-1"
          },
            h('span', null, "More Details"),
            h(Icon, { name: "arrow-right", className: "w-3.5 h-3.5" })
          )
        ),
        h('div', { className: "p-4 sm:p-6 space-y-5 flex-1 bg-[#FCFCFA]" },
          // Founder Card - Big, visible, and prominent
          h('div', { className: "bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-5" },
            h('div', { className: "relative shrink-0 w-32 sm:w-36 md:w-40 h-44 sm:h-48 md:h-52 rounded-2xl overflow-hidden border-2 border-ministry-gold shadow-lg bg-gray-100 group" },
              h('img', {
                src: "/images/founder.jpg",
                alt: ministryData.founder,
                className: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              }),
              h('div', { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" })
            ),
            h('div', { className: "flex-1 min-w-0 text-center sm:text-left flex flex-col justify-center py-1" },
              h('span', { className: "inline-block text-[11px] sm:text-xs uppercase font-extrabold text-ministry-warmGold tracking-wider mb-1" }, ministryData.founderTitle),
              h('h3', { className: "font-serif text-xl sm:text-2xl font-bold text-ministry-forest leading-tight mb-2" }, ministryData.founder),
              h('div', { className: "inline-flex items-center gap-2 justify-center sm:justify-start mb-3" },
                h('span', { className: "bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-black text-xs px-3.5 py-1 rounded-full shadow-sm" },
                  `Established: ${ministryData.yearEstablished}`
                )
              ),
              h('p', { className: "text-xs sm:text-sm text-gray-600 leading-relaxed font-sans" },
                "Visionary servant of God ministering under an apostolic mandate of prayer, deliverance, holiness, and the supernatural power of the Holy Spirit."
              )
            )
          ),
          h('div', { className: "bg-white rounded-xl p-4 border border-gray-200 shadow-sm" },
            h('div', { className: "flex items-center gap-2 mb-2 text-ministry-forest" },
              h('div', { className: "p-1.5 rounded-lg bg-ministry-ivory border border-gray-100" }, h(Icon, { name: "eye", className: "w-4 h-4 text-ministry-forest" })),
              h('h4', { className: "font-serif text-base sm:text-lg font-bold text-ministry-forest" }, "Our Vision")
            ),
            h('p', { className: "text-xs sm:text-sm text-gray-700 leading-relaxed font-sans" }, ministryData.vision)
          ),
          h('div', { className: "bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex-1" },
            h('div', { className: "flex items-center justify-between mb-3 text-ministry-forest" },
              h('div', { className: "flex items-center gap-2" },
                h('div', { className: "p-1.5 rounded-lg bg-ministry-ivory border border-gray-100" }, h(Icon, { name: "target", className: "w-4 h-4 text-ministry-forest" })),
                h('h4', { className: "font-serif text-base sm:text-lg font-bold text-ministry-forest" }, "Our Mission")
              ),
              h('span', { className: "text-[11px] font-semibold text-gray-500" }, "9 Divine Mandates")
            ),
            h('div', { className: "space-y-2 text-xs sm:text-[13px] text-gray-700 leading-snug" },
              ministryData.missions.map(m =>
                h('div', { key: m.number, className: "flex items-start gap-2 pt-1 border-t border-gray-100 first:border-0 first:pt-0" },
                  h('span', { className: "font-bold text-ministry-forest shrink-0 font-mono text-xs w-4" }, `${m.number}.`),
                  h('span', { className: "text-gray-700 font-sans leading-tight" }, m.description)
                )
              )
            ),
            h('div', { className: "mt-4 pt-3 border-t border-gray-100 text-center" },
              h('button', {
                onClick: () => navigate('about'),
                className: "text-xs font-bold text-ministry-forest hover:text-ministry-gold transition-colors inline-flex items-center gap-1.5"
              },
                h('span', null, "Learn More About Us"),
                h(Icon, { name: "arrow-right", className: "w-3.5 h-3.5" })
              )
            )
          )
        )
      );
    };

    // OUR GALLERY PREVIEW (5 IMAGES)
    const renderGalleryPreview = () => {
      const displayImages = ministryData.gallery.slice(0, 5);
      return h('section', { className: "bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100" },
        h('div', { className: "bg-ministry-forest text-white p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-ministry-gold" },
          h('div', { className: "flex items-center gap-3" },
            h('div', { className: "p-2 rounded-lg bg-ministry-deep text-ministry-gold shrink-0" },
              h(Icon, { name: "calendar", className: "w-6 h-6" })
            ),
            h('div', null,
              h('h2', { className: "font-serif text-xl sm:text-2xl font-bold tracking-tight text-white" }, "Our Gallery"),
              h('p', { className: "text-xs text-gray-300" }, "Photographs of Ibudo Iyanu, prayer meetings & facilities")
            )
          ),
          h('button', {
            onClick: () => navigate('gallery'),
            className: "bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-bold px-4 py-2 rounded-full text-xs shadow hover:brightness-105 active:scale-95 transition-all flex items-center gap-1.5 self-end sm:self-auto"
          },
            h('span', null, "View More Photos"),
            h(Icon, { name: "arrow-right", className: "w-3.5 h-3.5" })
          )
        ),
        h('div', { className: "p-4 sm:p-6 bg-[#FCFCFA]" },
          h('div', { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4" },
            displayImages.map((img, idx) =>
              h('div', {
                key: img.id,
                onClick: () => setLightboxIndex(idx),
                className: "group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-200 cursor-pointer shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
              },
                h('img', {
                  src: img.src,
                  alt: img.alt,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }),
                h('div', { className: "absolute inset-0 bg-gradient-to-t from-ministry-forest/90 via-ministry-forest/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex flex-col justify-end text-white" },
                  h('span', { className: "text-ministry-gold font-semibold text-[11px] truncate" }, img.categoryLabel),
                  h('p', { className: "text-[11px] text-gray-200 line-clamp-2 leading-tight" }, img.title)
                ),
                img.isRealPhoto && h('div', { className: "absolute top-1.5 left-1.5 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow" }, "Real Photo")
              )
            )
          )
        )
      );
    };

    // PRE-FOOTER CTA BANNER - Pure text-free background
    const renderCtaBanner = () => {
      return h('section', { className: "relative overflow-hidden rounded-2xl shadow-elevated bg-ministry-forest border-2 border-ministry-gold/40" },
        h('div', { className: "absolute inset-0 z-0" },
          h('img', {
            src: "/images/banner-encounter-clean.jpg",
            alt: "Come and Encounter God on the Prayer Mountain",
            className: "w-full h-full object-cover object-center"
          }),
          h('div', { className: "absolute inset-0 bg-gradient-to-r from-ministry-forest/90 via-ministry-forest/40 to-transparent" })
        ),
        h('div', { className: "relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-white" },
          h('div', { className: "flex items-center gap-5 sm:gap-6 w-full sm:w-auto" },
            h('div', { className: "shrink-0 p-2 text-white" },
              h(Icon, { name: "praying-hands", className: "w-12 h-12 text-white" })
            ),
            h('div', { className: "h-14 w-[2px] bg-ministry-gold/80 hidden sm:block" }),
            h('div', { className: "flex flex-col" },
              h('h2', { className: "font-serif italic text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight" }, "Come and Encounter God"),
              h('p', { className: "font-serif italic text-white/90 text-sm sm:text-base lg:text-lg" }, "Plan your visit to Ibudo Iyanu.")
            )
          ),
          h('div', { className: "shrink-0 w-full sm:w-auto text-right" },
            h('button', {
              onClick: () => navigate('contact'),
              className: "w-full sm:w-auto bg-gradient-to-r from-ministry-gold to-ministry-warmGold hover:brightness-105 active:scale-95 text-ministry-dark font-extrabold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base"
            },
              h('span', null, "Contact Us"),
              h(Icon, { name: "arrow-right", className: "w-4 h-4 text-ministry-dark" })
            )
          )
        )
      );
    };

    // FOOTER (DEEP GREEN)
    const renderFooter = () => {
      const year = new Date().getFullYear();
      return h('footer', { className: "bg-ministry-deep text-white border-t border-ministry-forest/60 pt-12 pb-8 mt-12" },
        h('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
          h('div', { className: "text-center pb-8 border-b border-ministry-forest/70" },
            h('p', { className: "font-serif italic text-ministry-gold text-base sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed" },
              `“${ministryData.scriptures.footer.verse}”`
            ),
            h('span', { className: "inline-block mt-1 text-xs font-semibold tracking-wider text-gray-300 uppercase" },
              `— ${ministryData.scriptures.footer.reference}`
            )
          ),
          h('div', { className: "pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300" },
            h('div', null,
              `© ${year} Ori Oke Ase Oluwa (Ibudo Iyanu). All Rights Reserved. • Designed by `,
              h('span', { className: "text-ministry-gold font-semibold" }, "'Opivamp'")
            ),
            h('div', { className: "flex items-center gap-3 text-gray-300" },
              h('button', { onClick: () => setPrivacyModalType('privacy'), className: "hover:text-ministry-gold transition-colors" }, "Privacy Policy"),
              h('span', null, "|"),
              h('button', { onClick: () => setPrivacyModalType('terms'), className: "hover:text-ministry-gold transition-colors" }, "Terms & Conditions"),
              h('span', null, "|"),
              h('button', { onClick: () => navigate('contact'), className: "hover:text-ministry-gold transition-colors" }, "Support")
            ),
            h('div', { className: "flex items-center gap-3 text-gray-300" },
              h('span', { className: "cursor-pointer hover:text-ministry-gold", title: "Facebook", onClick: () => navigate('contact') }, h(Icon, { name: "facebook", className: "w-4 h-4" })),
              h('span', { className: "cursor-pointer hover:text-ministry-gold", title: "YouTube", onClick: () => navigate('contact') }, h(Icon, { name: "youtube", className: "w-4 h-4" })),
              h('span', { className: "cursor-pointer hover:text-ministry-gold", title: "Instagram", onClick: () => navigate('contact') }, h(Icon, { name: "instagram", className: "w-4 h-4" })),
              h('span', { className: "cursor-pointer hover:text-ministry-gold", title: "WhatsApp", onClick: () => navigate('contact') }, h(Icon, { name: "whatsapp", className: "w-4 h-4" }))
            )
          )
        )
      );
    };

    // LIGHTBOX
    const renderLightbox = () => {
      if (lightboxIndex === null) return null;
      const images = ministryData.gallery;
      const current = images[lightboxIndex];
      return h('div', { className: "fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" },
        h('button', {
          onClick: () => setLightboxIndex(null),
          className: "absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 rounded-full"
        }, h(Icon, { name: "x", className: "w-6 h-6" })),
        h('button', {
          onClick: () => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length),
          className: "absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 rounded-full"
        }, h(Icon, { name: "arrow-right", className: "w-6 h-6 rotate-180" })),
        h('button', {
          onClick: () => setLightboxIndex((lightboxIndex + 1) % images.length),
          className: "absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 rounded-full"
        }, h(Icon, { name: "arrow-right", className: "w-6 h-6" })),
        h('div', { className: "max-w-4xl max-h-[85vh] flex flex-col items-center" },
          h('div', { className: "relative rounded-xl overflow-hidden shadow-2xl bg-black max-h-[70vh]" },
            h('img', { src: current.src, alt: current.alt, className: "max-h-[70vh] w-auto object-contain mx-auto" })
          ),
          h('div', { className: "mt-4 text-center text-white max-w-xl" },
            h('span', { className: "inline-block bg-ministry-forest text-ministry-gold text-xs font-semibold px-3 py-1 rounded-full mb-1.5" }, current.categoryLabel),
            h('h3', { className: "font-serif text-lg font-bold" }, current.title),
            h('p', { className: "text-xs text-gray-300 mt-1" }, current.caption),
            h('div', { className: "text-xs text-gray-400 mt-2 font-mono" }, `${lightboxIndex + 1} of ${images.length}`)
          )
        )
      );
    };

    // SEARCH MODAL
    const renderSearchModal = () => {
      if (!isSearchOpen) return null;
      const searchableItems = [
        { title: 'Night of Encounter (Monthly Vigil)', desc: 'Second Wednesday to Friday, 12 AM - 4 AM', page: 'programmes' },
        { title: 'Back to Sender Programme', desc: 'Last Friday of every month, 10 AM - 2 PM', page: 'programmes' },
        { title: "Men's Programme (Men Only)", desc: 'Last day of every month, 9 AM - 10 AM', page: 'programmes' },
        { title: 'Daily Prayer Sessions', desc: '12 PM - 2 PM, 6 PM - 7 PM, Midnight Vigil 12 AM - 2 AM', page: 'programmes' },
        { title: 'Sunday Services', desc: '8:30 AM - 12 PM & 4 PM - 6 PM', page: 'programmes' },
        { title: 'Prophet Sunday Olawale', desc: 'Founder & General Overseer established 2014', page: 'about' },
        { title: 'Vision & 9 Mission Statements', desc: 'The divine mandates and calling of the ministry', page: 'about' },
        { title: 'Main Prayer Auditorium', desc: 'Consecrated altar with terrazzo cross and prayer platform', page: 'facilities' },
        { title: 'Retreat Accommodation Lodges', desc: 'Peaceful guest chalets and rooms for fasting stays', page: 'facilities' },
        { title: 'Prayer Grounds & Open-Air Gazebo', desc: 'Tree-shaded quiet groves for personal prayer', page: 'facilities' },
        { title: 'Plan Your Mountain Visit', desc: 'KM 54/400 New Oyo-Ogbomoso Expressway travel directions', page: 'visit' },
        { title: 'Testimonies & Miracles', desc: 'Submit and read divine accounts of answered prayers', page: 'testimonies' },
        { title: 'Contact Ministry Office', desc: 'Visitor enquiry and prayer request correspondence', page: 'contact' }
      ];

      const results = searchQuery.trim() === ''
        ? searchableItems.slice(0, 5)
        : searchableItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase()));

      return h('div', { className: "fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-start justify-center p-4 pt-20 animate-fade-in" },
        h('div', { className: "bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-gray-100" },
          h('div', { className: "p-4 border-b border-gray-100 flex items-center gap-3" },
            h(Icon, { name: "search", className: "w-5 h-5 text-ministry-forest shrink-0" }),
            h('input', {
              type: "text",
              autoFocus: true,
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: "Search programmes, founder, retreats, location, facilities...",
              className: "w-full text-sm text-gray-800 focus:outline-none"
            }),
            h('button', { onClick: () => setIsSearchOpen(false), className: "p-1 rounded text-gray-400 hover:text-gray-600" }, h(Icon, { name: "x", className: "w-5 h-5" }))
          ),
          h('div', { className: "p-3 max-h-96 overflow-y-auto divide-y divide-gray-50" },
            results.map((res, idx) =>
              h('button', {
                key: idx,
                onClick: () => { navigate(res.page); setIsSearchOpen(false); },
                className: "w-full text-left p-3 hover:bg-ministry-ivory rounded-xl flex items-center justify-between gap-3 group transition-colors"
              },
                h('div', null,
                  h('div', { className: "font-bold text-xs sm:text-sm text-ministry-dark group-hover:text-ministry-forest" }, res.title),
                  h('div', { className: "text-[11px] text-gray-500" }, res.desc)
                ),
                h(Icon, { name: "arrow-right", className: "w-4 h-4 text-gray-300 group-hover:text-ministry-forest shrink-0" })
              )
            )
          )
        )
      );
    };

    // DONATION MODAL
    const renderDonationModal = () => {
      if (!isDonateOpen) return null;
      return h('div', { className: "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" },
        h('div', { className: "bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100" },
          h('div', { className: "bg-ministry-forest text-white p-5 border-b-2 border-ministry-gold flex items-center justify-between" },
            h('div', null,
              h('h3', { className: "font-serif text-xl font-bold" }, "Partner with the Ministry"),
              h('p', { className: "text-xs text-gray-300" }, "Ori Oke Ase Oluwa (Ibudo Iyanu)")
            ),
            h('button', { onClick: () => setIsDonateOpen(false), className: "p-1.5 rounded-full hover:bg-white/20 text-white" }, h(Icon, { name: "x", className: "w-5 h-5" }))
          ),
          h('div', { className: "p-6 space-y-4 text-gray-700 text-sm" },
            h('p', { className: "font-serif italic text-ministry-forest font-bold" }, "“Honour the Lord with your substance...” — Proverbs 3:9"),
            h('p', { className: "text-xs text-gray-600 leading-relaxed" }, "Your free-will offerings, tithes, and project support empower evangelism, mountain facility upkeep, welfare care for the less privileged, and all-night prayer vigils."),
            h('div', { className: "p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed" },
              h('strong', { className: "block text-amber-900 mb-1" }, "Digital Payment Integration Under Setup"),
              "Official electronic payment gateways will be activated as soon as verified banking accounts are certified by ministry administration."
            ),
            h('div', { className: "p-3.5 rounded-xl bg-ministry-ivory border border-gray-200 text-xs text-gray-700" },
              h('strong', { className: "block text-ministry-dark mb-1 uppercase" }, "Giving on Mountain Grounds:"),
              "Visitors and campers may give their offerings, tithes, and vows directly at the church administration office in Prayer City."
            ),
            h('button', {
              onClick: () => setIsDonateOpen(false),
              className: "w-full bg-ministry-forest hover:bg-ministry-deep text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
            }, "Understood / Close")
          )
        )
      );
    };

    // PRIVACY / TERMS MODAL
    const renderPrivacyTermsModal = () => {
      if (!privacyModalType) return null;
      const isPriv = privacyModalType === 'privacy';
      return h('div', { className: "fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" },
        h('div', { className: "bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-gray-100" },
          h('div', { className: "bg-ministry-forest text-white p-5 border-b-2 border-ministry-gold flex items-center justify-between" },
            h('h3', { className: "font-serif text-xl font-bold" }, isPriv ? "Privacy Policy" : "Terms & Conditions of Visit"),
            h('button', { onClick: () => setPrivacyModalType(null), className: "p-1.5 rounded-full hover:bg-white/20 text-white" }, h(Icon, { name: "x", className: "w-5 h-5" }))
          ),
          h('div', { className: "p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed" },
            isPriv
              ? h('div', { className: "space-y-3" },
                  h('p', null, "Ori Oke Ase Oluwa (Ibudo Iyanu) respects the privacy of all worshippers, campers, and website users. Information provided via forms is strictly utilized for spiritual and protocol administration and is never sold or shared."),
                  h('p', null, "All prayer requests submitted remain confidential.")
                )
              : h('div', { className: "space-y-3" },
                  h('p', null, "Ibudo Iyanu is a consecrated Christian prayer mountain. All visitors are requested to maintain an atmosphere of reverence, peace, and modesty during prayer retreats."),
                  h('p', null, "Registration at the administration office upon arrival is required for overnight camping and chalet lodging.")
                )
          ),
          h('div', { className: "p-4 bg-gray-50 border-t border-gray-100 flex justify-end" },
            h('button', { onClick: () => setPrivacyModalType(null), className: "bg-ministry-forest text-white px-5 py-2 rounded-xl text-xs font-bold" }, "Close")
          )
        )
      );
    };

    // INNER PAGE: ABOUT US
    const renderAboutPage = () => {
      return h('div', { className: "py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" },
        h('div', { className: "text-center max-w-3xl mx-auto space-y-3" },
          h('div', { className: "inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" }, "Sacred Calling & History"),
          h('h1', { className: "font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight" }, "About Ori Oke Ase Oluwa"),
          h('p', { className: "font-serif italic text-base sm:text-xl text-ministry-forest font-medium" }, "(Ibudo Iyanu) — A Place of Divine Encounter, Prayer and Transformation.")
        ),
        // Story Card
        h('div', { className: "bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden p-6 sm:p-10" },
          h('div', { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" },
            h('div', { className: "lg:col-span-7 space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base" },
              h('h2', { className: "font-serif text-2xl sm:text-3xl font-bold text-ministry-forest" }, "Our Origin & Spiritual Sanctuary"),
              h('p', { className: "font-semibold text-ministry-dark" }, ministryData.about.lead),
              ministryData.about.body.map((p, i) => h('p', { key: i, className: "text-gray-600" }, p)),
              h('div', { className: "pt-2 flex flex-wrap gap-4 text-xs font-medium text-gray-600" },
                h('div', { className: "bg-ministry-ivory px-3.5 py-2 rounded-lg border border-gray-200" }, h('strong', { className: "text-ministry-forest" }, "Location: "), ministryData.location.address),
                h('div', { className: "bg-ministry-ivory px-3.5 py-2 rounded-lg border border-gray-200" }, h('strong', { className: "text-ministry-forest" }, "Established: "), `Year ${ministryData.yearEstablished}`)
              )
            ),
            h('div', { className: "lg:col-span-5" },
              h('div', { className: "relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/3] bg-gray-100" },
                h('img', { src: "/images/real/photo_2026-11-18_02-01-14.jpg", alt: "Main Prayer Auditorium Altar", className: "w-full h-full object-cover" }),
                h('div', { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-white text-xs font-semibold" }, "The Main Prayer Auditorium Altar with Terrazzo Cross")
              )
            )
          )
        ),
        // Founder Profile - Grand, large, visible portrait
        h('div', { className: "bg-gradient-to-br from-ministry-forest to-ministry-deep text-white rounded-2xl shadow-elevated p-6 sm:p-10 border-2 border-ministry-gold/40" },
          h('div', { className: "grid grid-cols-1 md:grid-cols-12 gap-8 items-center" },
            h('div', { className: "md:col-span-5 flex justify-center" },
              h('div', { className: "w-60 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-ministry-gold bg-white group" },
                h('img', {
                  src: "/images/founder.jpg",
                  alt: ministryData.founder,
                  className: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                })
              )
            ),
            h('div', { className: "md:col-span-7 space-y-4 text-left" },
              h('div', { className: "inline-block bg-ministry-gold text-ministry-dark font-extrabold text-xs px-3.5 py-1 rounded-full uppercase" }, "Ministry Leadership"),
              h('h2', { className: "font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight" }, ministryData.founder),
              h('p', { className: "font-serif italic text-ministry-gold text-lg sm:text-xl font-medium" }, `${ministryData.founderTitle} — Established 2014`),
              h('p', { className: "text-gray-200 text-sm sm:text-base leading-relaxed" }, "Prophet Sunday Olawale is the visionary founder and General Overseer of Ori Oke Ase Oluwa (Ibudo Iyanu). He is an anointed minister of God with an apostolic and prophetic mandate centered on fervent prayer, holiness, deliverance, Holy Spirit empowerment, and salvation through Christ Jesus.")
            )
          )
        ),
        // Vision Card
        h('div', { className: "bg-white rounded-2xl shadow-card border border-gray-100 p-6 sm:p-10" },
          h('h3', { className: "font-serif text-2xl font-bold text-ministry-forest mb-3" }, "Our Vision"),
          h('div', { className: "p-6 rounded-xl bg-ministry-ivory border-l-4 border-ministry-gold" },
            h('p', { className: "font-serif italic text-lg sm:text-xl text-ministry-deep leading-relaxed font-semibold" }, `“${ministryData.vision}”`)
          )
        ),
        // 9 Missions
        h('div', { className: "space-y-6" },
          h('h3', { className: "font-serif text-2xl sm:text-3xl font-bold text-ministry-forest text-center" }, "Our 9 Mission Statements"),
          h('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
            ministryData.missions.map(m =>
              h('div', { key: m.number, className: "bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between" },
                h('div', null,
                  h('span', { className: "text-2xl font-serif font-bold text-ministry-gold/80 block mb-2" }, `0${m.number}`),
                  h('h4', { className: "font-serif text-base sm:text-lg font-bold text-ministry-forest mb-2" }, m.title),
                  h('p', { className: "text-xs sm:text-sm text-gray-600 leading-relaxed" }, m.description)
                )
              )
            )
          )
        )
      );
    };

    // INNER PAGE: PROGRAMMES
    const renderProgrammesPage = () => {
      const { schedules } = ministryData;
      return h('div', { className: "py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" },
        h('div', { className: "text-center max-w-3xl mx-auto space-y-3" },
          h('div', { className: "inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" }, "Spiritual Calendar & Prayer Timetables"),
          h('h1', { className: "font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight" }, "Programmes & Prayer Schedule"),
          h('p', { className: "font-serif italic text-base sm:text-xl text-ministry-forest font-medium" }, "Join us for powerful prayers, divine encounters and spiritual growth.")
        ),
        // Daily & Sunday
        h('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
          // Daily
          h('div', { className: "bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden" },
            h('div', { className: "bg-ministry-forest text-white p-5 border-b-2 border-ministry-gold" },
              h('h3', { className: "font-serif text-xl font-bold" }, "A. Daily Programmes (Monday – Saturday)")
            ),
            h('div', { className: "p-6 space-y-3" },
              schedules.daily.map((item, idx) =>
                h('div', { key: idx, className: "p-4 rounded-xl bg-ministry-ivory border border-gray-200 flex items-center justify-between" },
                  h('div', { className: "font-bold text-sm text-ministry-dark" }, item.name),
                  h('div', { className: "font-mono text-xs font-bold bg-white px-3 py-1 rounded border text-ministry-forest" }, item.time)
                )
              )
            )
          ),
          // Sunday
          h('div', { className: "bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden" },
            h('div', { className: "bg-ministry-forest text-white p-5 border-b-2 border-ministry-gold" },
              h('h3', { className: "font-serif text-xl font-bold" }, "B. Sunday Programmes")
            ),
            h('div', { className: "p-6 space-y-3" },
              schedules.sunday.map((item, idx) =>
                h('div', { key: idx, className: "p-4 rounded-xl bg-ministry-ivory border border-gray-200 flex items-center justify-between" },
                  h('div', { className: "font-bold text-sm text-ministry-dark" }, item.name),
                  h('div', { className: "font-mono text-xs font-bold bg-white px-3 py-1 rounded border text-ministry-forest" }, item.time)
                )
              )
            )
          )
        ),
        // Monthly
        h('div', { className: "space-y-6" },
          h('h3', { className: "font-serif text-2xl sm:text-3xl font-bold text-ministry-forest text-center" }, "C. Special Monthly Programmes"),
          h('div', { className: "grid grid-cols-1 lg:grid-cols-3 gap-8" },
            schedules.monthly.map(prog =>
              h('div', { key: prog.id, className: "bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden flex flex-col justify-between" },
                h('div', null,
                  h('div', { className: "relative h-48 bg-ministry-deep" },
                    h('img', { src: prog.image, alt: prog.title, className: "w-full h-full object-cover" }),
                    h('div', { className: "absolute top-3 left-3 bg-ministry-gold text-ministry-dark font-bold text-xs px-2.5 py-1 rounded shadow" }, `Programme ${prog.letter}`)
                  ),
                  h('div', { className: "p-6 space-y-3" },
                    h('h4', { className: "font-serif text-lg font-bold text-ministry-forest" }, prog.title),
                    h('div', { className: "text-xs text-gray-700 space-y-1" },
                      h('div', null, h('strong', null, "Schedule: "), prog.schedule),
                      h('div', null, h('strong', null, "Time: "), h('span', { className: "font-mono font-bold text-ministry-forest" }, prog.time)),
                      prog.specialCondition && h('div', { className: "text-[11px] text-amber-900 bg-amber-50 p-2 rounded mt-1 border border-amber-200" }, `* ${prog.specialCondition}`)
                    ),
                    h('p', { className: "text-xs text-gray-600 pt-2 border-t border-gray-100 leading-relaxed" }, prog.description)
                  )
                ),
                h('div', { className: "p-5 bg-gray-50 border-t border-gray-100" },
                  h('button', { onClick: () => navigate('visit'), className: "w-full bg-ministry-forest text-white py-2 rounded-xl text-xs font-bold hover:bg-ministry-deep transition-all" }, "Plan to Attend")
                )
              )
            )
          )
        )
      );
    };

    // INNER PAGE: FACILITIES
    const renderFacilitiesPage = () => {
      return h('div', { className: "py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" },
        h('div', { className: "text-center max-w-3xl mx-auto space-y-3" },
          h('div', { className: "inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" }, "Retreat Environment & Mountain Amenities"),
          h('h1', { className: "font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight" }, "Facilities & Mountain Retreats"),
          h('p', { className: "font-serif italic text-base sm:text-xl text-ministry-forest font-medium" }, "A peaceful, consecrated sanctuary equipped for your spiritual renewal.")
        ),
        h('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
          ministryData.facilities.map(fac =>
            h('div', { key: fac.id, className: "bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden flex flex-col justify-between" },
              h('div', null,
                h('div', { className: "relative h-56 bg-gray-100 overflow-hidden" },
                  h('img', { src: fac.image, alt: fac.title, className: "w-full h-full object-cover" }),
                  h('div', { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 text-white font-serif font-bold text-base" }, fac.title)
                ),
                h('div', { className: "p-6 space-y-3 text-xs sm:text-sm text-gray-700" },
                  h('p', { className: "leading-relaxed" }, fac.fullDesc),
                  h('div', { className: "pt-2 border-t border-gray-100 space-y-1 text-xs text-gray-600" },
                    fac.features.map((f, i) =>
                      h('div', { key: i, className: "flex items-center gap-2" },
                        h(Icon, { name: "check", className: "w-3.5 h-3.5 text-ministry-forest shrink-0" }),
                        h('span', null, f)
                      )
                    )
                  )
                )
              ),
              h('div', { className: "p-5 bg-gray-50 border-t border-gray-100" },
                h('button', { onClick: () => navigate('visit'), className: "w-full bg-ministry-forest text-white py-2 rounded-xl text-xs font-bold hover:bg-ministry-deep transition-all" }, "Plan Your Retreat")
              )
            )
          )
        )
      );
    };

    // INNER PAGE: TESTIMONIES
    const renderTestimoniesPage = () => {
      return h('div', { className: "py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" },
        h('div', { className: "text-center max-w-3xl mx-auto space-y-3" },
          h('div', { className: "inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" }, "Divine Acts & Testimonies of Faith"),
          h('h1', { className: "font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight" }, "Testimonies of Divine Encounter"),
          h('p', { className: "font-serif italic text-base sm:text-xl text-ministry-forest font-medium" }, "“And they overcame him by the blood of the Lamb, and by the word of their testimony.” — Revelation 12:11")
        ),
        h('div', { className: "bg-white rounded-2xl p-6 sm:p-10 shadow-card border border-gray-100 max-w-3xl mx-auto" },
          testimonySubmitted
            ? h('div', { className: "text-center py-10 space-y-4" },
                h('div', { className: "w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto" },
                  h(Icon, { name: "check-circle", className: "w-8 h-8" })
                ),
                h('h3', { className: "font-serif text-2xl font-bold text-ministry-forest" }, "Thank You for Sharing Your Testimony!"),
                h('p', { className: "text-sm text-gray-600 max-w-md mx-auto" }, "Your testimony has been received. Our ministry pastoral team will review your testimony with thanksgiving. May your miracle remain permanent in Jesus' name!"),
                h('button', { onClick: () => setTestimonySubmitted(false), className: "mt-4 bg-ministry-forest text-white px-6 py-2 rounded-full text-xs font-bold" }, "Submit Another Testimony")
              )
            : h('form', {
                onSubmit: (e) => { e.preventDefault(); setTestimonySubmitted(true); },
                className: "space-y-4"
              },
                h('h3', { className: "font-serif text-xl font-bold text-ministry-forest border-b pb-3" }, "Share What God Did for You"),
                h('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                  h('div', null,
                    h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Full Name *"),
                    h('input', { type: "text", required: true, placeholder: "Your name", className: "w-full px-3 py-2 border rounded-lg text-sm" })
                  ),
                  h('div', null,
                    h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "City / State *"),
                    h('input', { type: "text", required: true, placeholder: "e.g. Oyo, Oyo State", className: "w-full px-3 py-2 border rounded-lg text-sm" })
                  )
                ),
                h('div', null,
                  h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Testimony Title *"),
                  h('input', { type: "text", required: true, placeholder: "e.g. Miraculous Deliverance during Night of Encounter", className: "w-full px-3 py-2 border rounded-lg text-sm" })
                ),
                h('div', null,
                  h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Testimony Details *"),
                  h('textarea', { rows: 5, required: true, placeholder: "Please describe what God did...", className: "w-full px-3 py-2 border rounded-lg text-sm" })
                ),
                h('button', {
                  type: "submit",
                  className: "w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-extrabold py-3.5 rounded-xl shadow text-sm hover:brightness-105 transition-all flex items-center justify-center gap-2"
                },
                  h('span', null, "SUBMIT TESTIMONY FOR REVIEW"),
                  h(Icon, { name: "send", className: "w-4 h-4" })
                )
              )
        )
      );
    };

    // INNER PAGE: PLAN YOUR VISIT
    const renderPlanYourVisitPage = () => {
      return h('div', { className: "py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" },
        h('div', { className: "text-center max-w-3xl mx-auto space-y-3" },
          h('div', { className: "inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" }, "Sacred Mountain Sanctuary"),
          h('h1', { className: "font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight" }, "Plan Your Visit to Ibudo Iyanu"),
          h('p', { className: "font-serif italic text-base sm:text-xl text-ministry-forest font-medium" }, ministryData.location.address)
        ),
        // Signpost + Directions
        h('div', { className: "bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden p-6 sm:p-10" },
          h('div', { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" },
            h('div', { className: "lg:col-span-7 space-y-4 text-sm sm:text-base text-gray-700" },
              h('h2', { className: "font-serif text-2xl font-bold text-ministry-forest" }, "Highway Landmark & Coordinates"),
              h('p', null, `Ori Oke Ase Oluwa (Ibudo Iyanu) is located directly along the New Oyo - Ogbomoso Expressway at KM 54/400. Look for the official white signpost marked 'ORI OKE ASE OLUWA PRAYER MINISTRY (IBUDO IYANU)'.`),
              h('div', { className: "p-4 rounded-xl bg-ministry-ivory border border-gray-200 text-xs space-y-2 text-gray-700" },
                h('div', null, h('strong', { className: "text-ministry-forest" }, "From Lagos & Ibadan: "), "Follow the new dual carriageway from Ibadan through Oyo Town heading toward Ogbomoso. Continue until KM 54/400 signpost."),
                h('div', null, h('strong', { className: "text-ministry-forest" }, "From Ogbomoso & Ilorin: "), "Head south on the expressway toward Oyo; the entrance signpost is easily visible on the highway.")
              )
            ),
            h('div', { className: "lg:col-span-5" },
              h('div', { className: "relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/3] bg-gray-100" },
                h('img', { src: "/images/real/photo_2026-11-18_02-01-47.jpg", alt: "Official Expressway Signpost", className: "w-full h-full object-cover" }),
                h('div', { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4 text-white text-xs font-semibold" }, "Authentic Expressway Signpost at KM 54/400")
              )
            )
          )
        ),
        // Booking Form
        h('div', { className: "bg-white rounded-2xl p-6 sm:p-10 shadow-card border border-gray-100 max-w-3xl mx-auto" },
          visitSubmitted
            ? h('div', { className: "text-center py-10 space-y-4" },
                h('div', { className: "w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto" },
                  h(Icon, { name: "check-circle", className: "w-8 h-8" })
                ),
                h('h3', { className: "font-serif text-2xl font-bold text-ministry-forest" }, "Your Visit Has Been Registered!"),
                h('p', { className: "text-sm text-gray-600 max-w-md mx-auto" }, "Our mountain protocol team has noted your visit. We look forward to welcoming you to Ibudo Iyanu!"),
                h('button', { onClick: () => setVisitSubmitted(false), className: "mt-4 bg-ministry-forest text-white px-6 py-2 rounded-full text-xs font-bold" }, "Submit Another Registration")
              )
            : h('form', {
                onSubmit: (e) => { e.preventDefault(); setVisitSubmitted(true); },
                className: "space-y-4"
              },
                h('h3', { className: "font-serif text-2xl font-bold text-ministry-forest border-b pb-3" }, "Register Your Planned Mountain Visit"),
                h('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                  h('div', null,
                    h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Your Name *"),
                    h('input', { type: "text", required: true, placeholder: "Full Name", className: "w-full px-3 py-2 border rounded-lg text-sm" })
                  ),
                  h('div', null,
                    h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Phone Number *"),
                    h('input', { type: "tel", required: true, placeholder: "e.g. +234...", className: "w-full px-3 py-2 border rounded-lg text-sm" })
                  )
                ),
                h('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                  h('div', null,
                    h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Arrival Date *"),
                    h('input', { type: "date", required: true, className: "w-full px-3 py-2 border rounded-lg text-sm" })
                  ),
                  h('div', null,
                    h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Purpose of Visit"),
                    h('select', { className: "w-full px-3 py-2 border rounded-lg text-sm" },
                      h('option', null, "Personal Prayer Retreat"),
                      h('option', null, "Night of Encounter Vigil"),
                      h('option', null, "Back to Sender Programme"),
                      h('option', null, "Sunday Service"),
                      h('option', null, "Church Delegation")
                    )
                  )
                ),
                h('button', {
                  type: "submit",
                  className: "w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-extrabold py-3.5 rounded-xl shadow text-sm hover:brightness-105 transition-all flex items-center justify-center gap-2"
                },
                  h('span', null, "REGISTER YOUR MOUNTAIN VISIT"),
                  h(Icon, { name: "send", className: "w-4 h-4" })
                )
              )
        )
      );
    };

    // INNER PAGE: CONTACT
    const renderContactPage = () => {
      return h('div', { className: "py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" },
        h('div', { className: "text-center max-w-3xl mx-auto space-y-3" },
          h('div', { className: "inline-flex items-center gap-2 bg-ministry-forest/10 text-ministry-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" }, "Ministry Correspondence & Enquiries"),
          h('h1', { className: "font-serif text-3xl sm:text-5xl font-bold text-ministry-deep tracking-tight" }, "Contact Ori Oke Ase Oluwa"),
          h('p', { className: "font-serif italic text-base sm:text-xl text-ministry-forest font-medium" }, "We are here to intercede with you and welcome you to Ibudo Iyanu.")
        ),
        h('div', { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" },
          h('div', { className: "lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-gray-100 space-y-4" },
            h('h3', { className: "font-serif text-2xl font-bold text-ministry-forest" }, "Mountain Secretariat"),
            h('p', { className: "text-sm text-gray-700" }, h('strong', null, "Address: "), ministryData.location.address),
            h('p', { className: "text-sm text-gray-700" }, h('strong', null, "Gates: "), "Open 24 hours daily for prayer, retreats and personal vigils"),
            h('div', { className: "p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 mt-4 leading-relaxed" },
              h('strong', { className: "block text-amber-900 mb-1" }, "Official Contact Information:"),
              "For prayer appointments and retreat arrangements, please use the contact form or register directly upon arrival at the prayer mountain administration office."
            )
          ),
          h('div', { className: "lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 shadow-card border border-gray-100" },
            contactSubmitted
              ? h('div', { className: "text-center py-10 space-y-4" },
                  h('div', { className: "w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto" },
                    h(Icon, { name: "check-circle", className: "w-8 h-8" })
                  ),
                  h('h3', { className: "font-serif text-2xl font-bold text-ministry-forest" }, "Message Sent Successfully!"),
                  h('p', { className: "text-sm text-gray-600 max-w-md mx-auto" }, "Your prayer enquiry has been received and forwarded to our protocol office."),
                  h('button', { onClick: () => setContactSubmitted(false), className: "mt-4 bg-ministry-forest text-white px-6 py-2 rounded-full text-xs font-bold" }, "Send Another Message")
                )
              : h('form', {
                  onSubmit: (e) => { e.preventDefault(); setContactSubmitted(true); },
                  className: "space-y-4"
                },
                  h('h3', { className: "font-serif text-2xl font-bold text-ministry-forest border-b pb-3" }, "Send Us an Enquiry or Prayer Message"),
                  h('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                    h('div', null,
                      h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Your Name *"),
                      h('input', { type: "text", required: true, placeholder: "Full Name", className: "w-full px-3 py-2 border rounded-lg text-sm" })
                    ),
                    h('div', null,
                      h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Phone Number (Optional)"),
                      h('input', { type: "tel", placeholder: "Phone Number", className: "w-full px-3 py-2 border rounded-lg text-sm" })
                    )
                  ),
                  h('div', null,
                    h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Subject *"),
                    h('input', { type: "text", required: true, placeholder: "e.g. Prayer Request / Mountain Accommodation Enquiry", className: "w-full px-3 py-2 border rounded-lg text-sm" })
                  ),
                  h('div', null,
                    h('label', { className: "block text-xs font-bold text-gray-700 uppercase mb-1" }, "Message *"),
                    h('textarea', { rows: 5, required: true, placeholder: "Write your message clearly...", className: "w-full px-3 py-2 border rounded-lg text-sm" })
                  ),
                  h('button', {
                    type: "submit",
                    className: "w-full bg-gradient-to-r from-ministry-gold to-ministry-warmGold text-ministry-dark font-extrabold py-3.5 rounded-xl shadow text-sm hover:brightness-105 transition-all flex items-center justify-center gap-2"
                  },
                    h('span', null, "SEND MESSAGE TO MINISTRY"),
                    h(Icon, { name: "send", className: "w-4 h-4" })
                  )
                )
          )
        )
      );
    };

    // ROUTING SWITCH
    const renderContent = () => {
      if (currentPage === 'home') {
        return h('div', { className: "space-y-6 sm:space-y-8 pb-12" },
          renderHero(),
          renderHighlightBar(),
          h('section', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2" },
            h('div', { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch" },
              h('div', { className: "lg:col-span-7" }, renderProgrammeSchedule()),
              h('div', { className: "lg:col-span-5" }, renderAboutSection())
            )
          ),
          h('section', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, renderGalleryPreview()),
          h('section', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, renderCtaBanner())
        );
      }

      if (currentPage === 'about') return renderAboutPage();
      if (currentPage === 'programmes') return renderProgrammesPage();
      if (currentPage === 'events') return renderProgrammesPage();
      if (currentPage === 'facilities') return renderFacilitiesPage();
      if (currentPage === 'testimonies') return renderTestimoniesPage();
      if (currentPage === 'visit') return renderPlanYourVisitPage();
      if (currentPage === 'contact') return renderContactPage();

      if (currentPage === 'gallery') {
        const filtered = galleryFilter === 'all'
          ? ministryData.gallery
          : ministryData.gallery.filter(g => g.category === galleryFilter);

        return h('div', { className: "py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" },
          h('div', { className: "text-center max-w-3xl mx-auto space-y-2" },
            h('h1', { className: "font-serif text-3xl sm:text-5xl font-bold text-ministry-deep" }, "Photo Gallery"),
            h('p', { className: "font-serif italic text-ministry-forest" }, "Real photographs from Ori Oke Ase Oluwa (Ibudo Iyanu)")
          ),
          h('div', { className: "flex flex-wrap gap-2 justify-center" },
            [
              { id: 'all', label: 'All Photos' },
              { id: 'facilities', label: 'Facilities & Grounds' },
              { id: 'worship', label: 'Worship & Prayer' },
              { id: 'leadership', label: 'Leadership' },
              { id: 'mountain', label: 'Prayer Mountain' },
              { id: 'programmes', label: 'Programmes' }
            ].map(cat =>
              h('button', {
                key: cat.id,
                onClick: () => setGalleryFilter(cat.id),
                className: `px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  galleryFilter === cat.id ? 'bg-ministry-forest text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`
              }, cat.label)
            )
          ),
          h('div', { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" },
            filtered.map((img, idx) =>
              h('div', {
                key: img.id,
                onClick: () => setLightboxIndex(idx),
                className: "group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-200 cursor-pointer shadow-sm hover:shadow-md transition-all"
              },
                h('img', { src: img.src, alt: img.alt, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
                h('div', { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white" },
                  h('span', { className: "text-ministry-gold text-xs font-bold" }, img.categoryLabel),
                  h('p', { className: "text-xs text-gray-200 line-clamp-2" }, img.title)
                ),
                img.isRealPhoto && h('div', { className: "absolute top-2 left-2 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow" }, "Real Photo")
              )
            )
          )
        );
      }

      return null;
    };

    return h('div', { className: "min-h-screen flex flex-col bg-ministry-ivory text-ministry-dark" },
      renderContactBar(),
      renderNav(),
      h('main', { className: "flex-1" }, renderContent()),
      renderFooter(),
      renderLightbox(),
      renderSearchModal(),
      renderDonationModal(),
      renderPrivacyTermsModal()
    );
  }

  // Mount
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.createRoot(root).render(h(MainApp));
  }
})();
