import type {
  Partner,
  Achievement,
  GalleryItem,
  DocumentItem,
  FAQItem,
  InvolvementPath,
} from "@/types";

export const partners: Partner[] = [
  {
    name: "[Partner Organization 1]",
    category: "Institutional Partners",
    logoPlaceholder: "IO",
  },
  {
    name: "[Partner Organization 2]",
    category: "Institutional Partners",
    logoPlaceholder: "IO",
  },
  {
    name: "[Community Partner 1]",
    category: "Community Partners",
    logoPlaceholder: "CP",
  },
  {
    name: "[Community Partner 2]",
    category: "Community Partners",
    logoPlaceholder: "CP",
  },
  {
    name: "[Corporate Partner 1]",
    category: "Corporate Partners",
    logoPlaceholder: "CO",
  },
  {
    name: "[Corporate Partner 2]",
    category: "Corporate Partners",
    logoPlaceholder: "CO",
  },
  {
    name: "[Academic Partner 1]",
    category: "Academic Partners",
    logoPlaceholder: "AC",
  },
  {
    name: "[Academic Partner 2]",
    category: "Academic Partners",
    logoPlaceholder: "AC",
  },
  {
    name: "[International Partner 1]",
    category: "International Partners",
    logoPlaceholder: "IN",
  },
  {
    name: "[International Partner 2]",
    category: "International Partners",
    logoPlaceholder: "IN",
  },
];

export const partnerCategories = [
  "Institutional Partners",
  "Community Partners",
  "Corporate Partners",
  "Academic Partners",
  "International Partners",
];

export const achievements: Achievement[] = [
  {
    year: "2023",
    title: "Nepal Emerging Youth Founded",
    description:
      "NEY was established by a group of young Nepali leaders with a vision to create a platform for youth empowerment and community impact.",
    type: "founding",
  },
  {
    year: "2023",
    title: "First Leadership Workshop",
    description:
      "NEY conducted its first youth leadership workshop, marking the beginning of the Youth Leadership Academy program.",
    type: "program",
  },
  {
    year: "2024",
    title: "100+ Members Milestone",
    description:
      "NEY's membership crossed 100 active members, establishing a strong volunteer base across multiple districts.",
    type: "milestone",
  },
  {
    year: "2024",
    title: "First Regional Chapter",
    description:
      "NEY expanded beyond Kathmandu with its first regional chapter, bringing programs to communities outside the capital.",
    type: "expansion",
  },
  {
    year: "2024",
    title: "Green Nepal Campaign Launched",
    description:
      "NEY launched its flagship environmental initiative, beginning a campaign that would plant thousands of trees across Nepal.",
    type: "campaign",
  },
  {
    year: "2025",
    title: "Digital Literacy Initiative",
    description:
      "NEY launched its digital literacy program to bridge the technology gap in underserved communities.",
    type: "program",
  },
  {
    year: "2025",
    title: "First Innovation Hackathon",
    description:
      "NEY organized its first hackathon, bringing together 150+ young innovators to build technology solutions for community problems.",
    type: "program",
  },
  {
    year: "2025",
    title: "500+ Members Milestone",
    description:
      "NEY's active membership crossed 500, with volunteers and members active across multiple regions of Nepal.",
    type: "milestone",
  },
  {
    year: "2026",
    title: "5,000 Trees Planted",
    description:
      "The Green Nepal Campaign reached a major milestone with over 5,000 trees planted across communities in Nepal.",
    type: "milestone",
  },
  {
    year: "2026",
    title: "Expansion to Three New Districts",
    description:
      "NEY's Digital Literacy Initiative expanded to three new districts, significantly increasing the program's reach.",
    type: "expansion",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    image:
      "/QuizCompetition.jpg",
    caption: "Legal quiz competition for young people",
    event: "Legal Quiz Competition",
    date: "2026-09-05",
    category: "Education",
  },
  {
    id: "g2",
    image:
      "/Gharnirmanmela.jpg",
    caption: "Community health checkups and awareness services",
    event: "Ghar Nirman Mela 2083 – Health Desk",
    date: "2026-09-03",
    category: "Health",
  },
  {
    id: "g3",
    image:
      "/NuwakotHealthCamp.jpg",
    caption: "Mobile healthcare services for flood-affected communities",
    event: "Nuwakot Mobile Health Camp",
    date: "2026-08-31",
    category: "Health",
  },
  {
    id: "g4",
    image:
      "/RasuwaReliefCamp.jpg",
    caption: "Youth volunteers distributing relief materials",
    event: "Rasuwa Relief Campaign",
    date: "2026-09-01",
    category: "Disaster Relief",
  },
  {
    id: "g5",
    image:
      "/Codefest2026.jpg",
    caption: "Volunteer and medical support at a youth technology event",
    event: "CodeFest Madhesh Pradesh – Community & Medical Support",
    date: "2026-08-21",
    category: "Community & Health",
  },
  {
    id: "g6",
    image:
      "/Youthrightmegameet.jpg",
    caption: "Young people engaging in youth rights advocacy",
    event: "7th Nepal Youth Rights Mega Meet",
    date: "2026-01-01",
    category: "Youth Advocacy",
  },
  {
    id: "g7",
    image:
      "698179779_122153306805119995_6474939620489557325_n.jpg",
    caption: "Dental and eye health screening for school students",
    event: "School Health Awareness Program & Health Camp",
    date: "2026-05-15",
    category: "Health",
  },
  {
    id: "g8",
    image:
      "/698737326_122153939631119995_797306232196457092_n.jpg",
    caption: "Student health checkups and adolescent health awareness",
    event: "School Health Camp & Awareness Program",
    date: "2026-05-11",
    category: "Health",
  },
  {
    id: "g9",
    image:
      "/615248310_122123651283119995_275544795606028812_n.jpg",
    caption: "Students learning about digital health and cyber safety",
    event: "Digital Health & Social Media Awareness Program",
    date: "2026-01-01",
    category: "Digital Health",
  },
  {
    id: "g10",
    image:
      "/612234629_122123306139119995_6078434963029753408_n.jpg",
    caption: "Mental health and handwashing awareness for students",
    event: "Mental Health & Handwashing Awareness Program",
    date: "2026-01-01",
    category: "Health Awareness",
  },
  {
  id: "g11",
  image:
    "/801788981_122167778523119995_1615616397536003320_n.jpg",
  caption:
    "A tuition centre established in Rautahat to support children from families with no history of formal education, along with the distribution of essential study accessories.",
  event: "Rautahat Education Support Initiative",
  date: "2026-09-11",
  category: "Education",
},
{
  id: "g12",
  image:
    "/801585751_122167684989119995_3809696701807904925_n.jpg",
  caption:
    "Supporting children by removing barriers to education and distributing essential study materials.",
  event: "Rautahat Education Support Initiative",
  date: "2026-09-11",
  category: "Education",
},
{
  id: "g13",
  image:
    "/801585760_122167684887119995_3209192166165772083_n.jpg",
  caption:
    "School bags, notebooks, and pencils distributed to children to support their education.",
  event: "Rautahat Education Support Initiative",
  date: "2026-09-11",
  category: "Education",
},
{
  id: "g15",
  image:
    "/Gharnirmanmela.jpg",
  caption:
    "Community members receiving essential healthcare and support services.",
  event: "Birgunj Nirman Mela Mobile Health Camp",
  date: "2026-09-8",
  category: "Health",
},
{
  id: "g16",
  image:
    "/793212641_122167039695119995_6139180518440728941_n.jpg",
  caption:
    "Youth volunteers providing healthcare support to flood-affected communities.",
  event: "Nuwakot Mobile Health Camp",
  date: "2026-08-31",
  category: "Health",
},
{
  id: "g17",
  image:
    "/793212535_122166975567119995_4690235809642442640_n.jpg",
  caption:
    "Healthcare professionals providing medical consultation and support to flood-affected families.",
  event: "Nuwakot Mobile Health Camp",
  date: "2026-08-31",
  category: "Health",
},

];

export const galleryCategories = [
  "All",
  "Events",
  "Workshops",
  "Community",
  "Leadership",
  "Campaigns",
  "Conferences",
];

export const documents: DocumentItem[] = [
  {
    title: "Annual Report 2025",
    type: "Annual Report",
    year: "2025",
    description:
      "Comprehensive overview of NEY's activities, programs, and financial summary for 2025.",
    fileSize: "2.4 MB",
  },
  {
    title: "Impact Report 2025",
    type: "Impact Report",
    year: "2025",
    description:
      "Detailed analysis of the impact created by NEY programs across communities in Nepal.",
    fileSize: "1.8 MB",
  },
  {
    title: "Organizational Constitution",
    type: "Organizational Document",
    year: "2023",
    description:
      "The founding constitution of Nepal Emerging Youth, outlining governance and structure.",
    fileSize: "850 KB",
  },
  {
    title: "Code of Conduct Policy",
    type: "Policy",
    year: "2024",
    description:
      "Guidelines and standards of conduct for all NEY members, volunteers, and leadership.",
    fileSize: "420 KB",
  },
  {
    title: "Event Report — National Youth Leadership Summit 2025",
    type: "Event Report",
    year: "2025",
    description:
      "Summary report from the 2025 National Youth Leadership Summit, including outcomes and feedback.",
    fileSize: "1.2 MB",
  },
  {
    title: "Volunteer Handbook",
    type: "Policy",
    year: "2024",
    description:
      "A guide for NEY volunteers covering roles, expectations, and available support.",
    fileSize: "680 KB",
  },
  {
    title: "Financial Transparency Report 2024",
    type: "Impact Report",
    year: "2024",
    description:
      "Detailed breakdown of NEY's income, expenses, and financial management practices for 2024.",
    fileSize: "950 KB",
  },
  {
    title: "Research Paper — Youth Participation in Nepal",
    type: "Publication",
    year: "2025",
    description:
      "A research publication examining the state of youth participation and civic engagement in Nepal.",
    fileSize: "1.5 MB",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What is Nepal Emerging Youth (NEY)?",
    answer:
      "NEY is a youth-driven organization that empowers young people across Nepal through leadership development, community programs, innovation initiatives, and social impact projects. We are a platform where young people can develop skills, contribute to their communities, and drive positive change.",
  },
  {
    question: "Who can join NEY?",
    answer:
      "NEY is open to young people typically aged 16-30 who are passionate about creating positive change in their communities. You don't need prior experience — just enthusiasm and a willingness to learn and contribute. We welcome students, young professionals, and anyone who shares our vision.",
  },
  {
    question: "How can I volunteer with NEY?",
    answer:
      "You can volunteer by filling out the Join NEY application form on our website. Select 'Volunteer' as your area of interest, and our team will get in touch with you about available opportunities. Volunteers can participate in events, programs, community drives, and departmental work.",
  },
  {
    question: "How can organizations partner with NEY?",
    answer:
      "Organizations interested in partnering with NEY can reach out through our Contact page or email us at partnerships@ney.org.np. We collaborate with institutions, community organizations, corporate partners, academic institutions, and international organizations on various initiatives.",
  },
  {
    question: "How can I attend NEY events?",
    answer:
      "NEY events are listed on our Events page. For upcoming events with open registration, you can register directly through the event details page. Some events have limited capacity, so we encourage early registration. Many events are free to attend.",
  },
  {
    question: "How can I contact a specific department?",
    answer:
      "Each department has its own contact email listed on the Departments page. You can also use our general Contact form and select the relevant department, and your message will be directed accordingly.",
  },
  {
    question: "Does NEY charge membership fees?",
    answer:
      "NEY does not charge mandatory membership fees. We believe in keeping participation accessible. Some specific programs or events may have nominal costs to cover materials, but our core membership and volunteering opportunities are free.",
  },
  {
    question: "Is NEY active outside Kathmandu?",
    answer:
      "Yes, NEY is expanding its presence across Nepal. We have regional activities and are actively growing our network of chapters. Check our Events and Programs pages to see activities in your region, or contact us about starting a chapter in your area.",
  },
];

export const involvementPaths: InvolvementPath[] = [
  {
    title: "Become a Member",
    description:
      "Join NEY as an official member and participate in programs, events, and organizational activities.",
    icon: "UserPlus",
    cta: "Join NEY",
    href: "/join",
  },
  {
    title: "Volunteer",
    description:
      "Contribute your time and skills to NEY programs, events, and community initiatives.",
    icon: "HeartHandshake",
    cta: "Volunteer",
    href: "/join",
  },
  {
    title: "Campus Representative",
    description:
      "Represent NEY at your college or university and build a local youth network.",
    icon: "School",
    cta: "Apply Now",
    href: "/join",
  },
  {
    title: "Partner With NEY",
    description:
      "Collaborate with NEY as an organization, institution, or corporate entity on shared goals.",
    icon: "Handshake",
    cta: "Partner With Us",
    href: "/contact",
  },
  {
    title: "Sponsor an Initiative",
    description:
      "Support specific NEY programs or events through sponsorship and help us scale our impact.",
    icon: "Sparkles",
    cta: "Get in Touch",
    href: "/contact",
  },
  {
    title: "Collaborate With Us",
    description:
      "Have an idea for collaboration? We're always open to exploring new ways to work together.",
    icon: "Network",
    cta: "Reach Out",
    href: "/contact",
  },
];
