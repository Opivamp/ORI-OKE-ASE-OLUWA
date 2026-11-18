export interface ProgrammeItem {
  name: string;
  time: string;
  note?: string;
}

export interface SpecialProgrammeItem {
  id: string;
  letter: string;
  title: string;
  schedule: string;
  time: string;
  specialCondition?: string;
  image: string;
  description: string;
  category: string;
}

export interface MissionItem {
  number: number;
  title: string;
  description: string;
  iconName: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'mountain' | 'worship' | 'programmes' | 'facilities' | 'leadership';
  categoryLabel: string;
  src: string;
  alt: string;
  caption: string;
  isRealPhoto: boolean;
}

export const ministryConfig = {
  name: "ORI OKE ASE OLUWA (IBUDO IYANU)",
  shortName: "Ori Oke Ase Oluwa",
  subtitle: "Ibudo Iyanu",
  tagline: "Prayer, Spiritual Empowerment and Transformation.",
  founder: "Prophet Sunday Olawale",
  founderTitle: "Founder and General Overseer",
  yearEstablished: 2014,
  location: {
    address: "Prayer City, KM 54/400 New Oyo - Ogbomoso Expressway, Oyo State, Nigeria",
    city: "Oyo",
    state: "Oyo State",
    country: "Nigeria",
    shortAddress: "Prayer City, KM 54/400 New Oyo - Ogbomoso Expressway, Oyo State",
    landmark: "Directly accessible along the New Oyo - Ogbomoso Expressway at KM 54/400",
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
  // Configurable contact details
  contact: {
    isPhonePublic: false,
    phoneDisplay: "+234 (Official Line Pending)",
    phoneRaw: "",
    isEmailPublic: false,
    emailDisplay: "info@oriokeaseoluwa.org (Placeholder)",
    emailRaw: "",
    social: {
      facebook: "",
      youtube: "",
      instagram: "",
      whatsapp: "",
    },
    supportNote: "For enquiries and retreat reservations, please use our online visitor form or meet the ministry leadership at Prayer City."
  },
  about: {
    leadParagraph: "Ori Oke Ase Oluwa, popularly known as Ibudo Iyanu, is a Christian prayer mountain established in 2014 under the divine leadership of Prophet Sunday Olawale.",
    bodyParagraphs: [
      "It is a sacred sanctuary dedicated to prayer, spiritual empowerment, transformation, divine encounters and the advancement of the Gospel of Jesus Christ.",
      "Built upon the unshakable foundation of God's Word and the supernatural power of prayer, Ibudo Iyanu provides a serene, spiritually-charged atmosphere where believers come to seek God's presence, experience renewal, receive Holy Spirit empowerment, and grow profoundly in their faith.",
      "Through consistent prayer vigils, Bible teaching, conferences, evangelism, and deliverance ministrations, the ministry is committed to leading souls to salvation, freedom, holiness, and an intimate communion with God.",
      "Our heart's desire is to see lives transformed, destinies fulfilled, families restored, believers empowered and the Gospel of Jesus Christ advanced across the nations."
    ]
  },
  vision: "To lead all people to salvation and a new life in Jesus Christ, empowering them through the Holy Spirit, prayer, and the Word of God to live in holiness, fulfil God's divine purpose, advance the Gospel across nations, and ultimately make Heaven.",
  missions: [
    {
      number: 1,
      title: "Salvation & New Life",
      description: "To bring people to a new life in Jesus Christ through the power of the Holy Spirit, prayer, and the preaching of the Gospel.",
      iconName: "Heart"
    },
    {
      number: 2,
      title: "Deliverance & Freedom",
      description: "To set people free from the power of darkness and spiritual bondage through prayer, holiness, and the power of the Holy Spirit.",
      iconName: "ShieldAlert"
    },
    {
      number: 3,
      title: "Sound Word & Effective Prayer",
      description: "To teach and equip believers with sound knowledge of God's Word and the principles of effective, result-oriented prayer.",
      iconName: "BookOpen"
    },
    {
      number: 4,
      title: "Spiritual Gatherings & Healing",
      description: "To organise impactful prayer programmes, conferences, and spiritual gatherings to address people's spiritual, physical, health, mental, and family needs through divine intervention.",
      iconName: "Users"
    },
    {
      number: 5,
      title: "Kingdom Collaboration",
      description: "To collaborate with local and international ministries and Gospel ministers to advance the kingdom of God through prayer and evangelism.",
      iconName: "Handshake"
    },
    {
      number: 6,
      title: "Church Planting & Discipleship",
      description: "To plant churches across Nigeria and beyond, spreading the Gospel and raising spiritually empowered believers.",
      iconName: "Globe"
    },
    {
      number: 7,
      title: "Holistic Well-being",
      description: "To promote the spiritual, physical, material, and emotional well-being of members and the wider community.",
      iconName: "Sparkles"
    },
    {
      number: 8,
      title: "Educational Development",
      description: "To establish educational institutions that provide quality education and contribute to the development of individuals and society.",
      iconName: "GraduationCap"
    },
    {
      number: 9,
      title: "Humanitarian Love of Christ",
      description: "To demonstrate the love of Christ through humanitarian services, leadership development, and support for the less privileged, while advancing the Gospel to all nations.",
      iconName: "HelpingHand"
    }
  ] as MissionItem[],
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
    ] as SpecialProgrammeItem[]
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
  ] as FacilityItem[],
  gallery: [
    {
      id: "gal-1",
      title: "Main Prayer Auditorium Altar",
      category: "facilities",
      categoryLabel: "Facilities",
      src: "/images/real/photo_2026-11-18_02-01-14.jpg",
      alt: "Main Prayer Auditorium Altar with Terrazzo Cross at Ori Oke Ase Oluwa",
      caption: "The consecrated altar and terrazzo floor cross in the Main Auditorium.",
      isRealPhoto: true
    },
    {
      id: "gal-2",
      title: "Prophet Sunday Olawale Ministering",
      category: "leadership",
      categoryLabel: "Leadership",
      src: "/images/real/photo_2026-11-18_02-00-40.jpg",
      alt: "Prophet Sunday Olawale, Founder and General Overseer ministering with joy",
      caption: "Prophet Sunday Olawale ministering with joy during a celebration service.",
      isRealPhoto: true
    },
    {
      id: "gal-3",
      title: "Night Vigil Prayer Ministration",
      category: "worship",
      categoryLabel: "Worship & Prayer",
      src: "/images/real/photo_2026-11-18_02-00-47.jpg",
      alt: "Congregation and minister in fervent night vigil prayer",
      caption: "Fervent midnight prayers and intercession at Ibudo Iyanu.",
      isRealPhoto: true
    },
    {
      id: "gal-4",
      title: "Serene Prayer Grounds & Shaded Retreat",
      category: "mountain",
      categoryLabel: "Prayer Mountain",
      src: "/images/real/photo_2026-11-18_02-00-57.jpg",
      alt: "Prayer grounds under the shade of mature mango trees",
      caption: "Quiet, peaceful prayer grounds under the shade of trees.",
      isRealPhoto: true
    },
    {
      id: "gal-5",
      title: "Prayer Roundabout & Chalets",
      category: "facilities",
      categoryLabel: "Facilities",
      src: "/images/real/photo_2026-11-18_02-01-11.jpg",
      alt: "Open-air prayer gazebo and prayer chalets at Ibudo Iyanu",
      caption: "Circular open-air prayer gazebo and retreat chalets.",
      isRealPhoto: true
    },
    {
      id: "gal-6",
      title: "Ministers & Leadership in Prayer",
      category: "leadership",
      categoryLabel: "Leadership",
      src: "/images/real/photo_2026-11-18_02-00-52.jpg",
      alt: "Prophet Sunday Olawale and church ministers interceding together",
      caption: "Prophet Sunday Olawale and ministers in corporate prayer.",
      isRealPhoto: true
    },
    {
      id: "gal-7",
      title: "Retreat Accommodation Chalets",
      category: "facilities",
      categoryLabel: "Facilities",
      src: "/images/real/photo_2026-11-18_02-01-33.jpg",
      alt: "Retreat accommodation chalets and guest rooms",
      caption: "Accommodation chalets for visitors and retreat seekers.",
      isRealPhoto: true
    },
    {
      id: "gal-8",
      title: "Joyful Praise & Celebration",
      category: "worship",
      categoryLabel: "Worship & Prayer",
      src: "/images/real/photo_2026-11-18_02-00-24.jpg",
      alt: "Joyful church worship and praise session with dancing congregation",
      caption: "Celebration of divine testimonies, praise and worship.",
      isRealPhoto: true
    },
    {
      id: "gal-9",
      title: "Entrance Signboard & Programme Timetable",
      category: "programmes",
      categoryLabel: "Programmes",
      src: "/images/real/photo_2026-11-18_02-01-47.jpg",
      alt: "Official Ori Oke Ase Oluwa signpost along New Oyo - Ogbomoso Expressway",
      caption: "Official ministry signpost at the expressway entrance.",
      isRealPhoto: true
    },
    {
      id: "gal-10",
      title: "Main Auditorium Wide Perspective",
      category: "facilities",
      categoryLabel: "Facilities",
      src: "/images/real/photo_2026-11-18_02-01-20.jpg",
      alt: "Wide angle perspective of the Main Prayer Auditorium",
      caption: "Wide view of the Main Auditorium and sanctuary platform.",
      isRealPhoto: true
    },
    {
      id: "gal-11",
      title: "Prayer Mountain Landscape & Summit",
      category: "mountain",
      categoryLabel: "Prayer Mountain",
      src: "/images/gallery-1.png",
      alt: "Prayer mountain lush landscape view",
      caption: "Vast green mountain vistas surrounding the prayer sanctuary.",
      isRealPhoto: false
    },
    {
      id: "gal-12",
      title: "Mass Revival & Camp Meeting",
      category: "programmes",
      categoryLabel: "Programmes",
      src: "/images/gallery-2.png",
      alt: "Outdoor revival convention and gathering",
      caption: "Special convention gathering worshippers across the nation.",
      isRealPhoto: false
    }
  ] as GalleryImage[]
};

