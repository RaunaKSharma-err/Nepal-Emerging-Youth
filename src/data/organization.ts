import type { Partner, Achievement, GalleryItem, DocumentItem, FAQItem, InvolvementPath } from "@/types";

export const partners: Partner[] = [
  { name: "[Partner Organization 1]", category: "Institutional Partners", logoPlaceholder: "IO" },
  { name: "[Partner Organization 2]", category: "Institutional Partners", logoPlaceholder: "IO" },
  { name: "[Community Partner 1]", category: "Community Partners", logoPlaceholder: "CP" },
  { name: "[Community Partner 2]", category: "Community Partners", logoPlaceholder: "CP" },
  { name: "[Corporate Partner 1]", category: "Corporate Partners", logoPlaceholder: "CO" },
  { name: "[Corporate Partner 2]", category: "Corporate Partners", logoPlaceholder: "CO" },
  { name: "[Academic Partner 1]", category: "Academic Partners", logoPlaceholder: "AC" },
  { name: "[Academic Partner 2]", category: "Academic Partners", logoPlaceholder: "AC" },
  { name: "[International Partner 1]", category: "International Partners", logoPlaceholder: "IN" },
  { name: "[International Partner 2]", category: "International Partners", logoPlaceholder: "IN" },
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
    image: "https://images.pexels.com/photos/19017632/pexels-photo-19017632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Community volunteer cleanup drive",
    event: "Green Nepal Campaign",
    date: "2026-06-05",
    category: "Community",
  },
  {
    id: "g2",
    image: "https://images.pexels.com/photos/8761350/pexels-photo-8761350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Leadership workshop in session",
    event: "Youth Leadership Academy",
    date: "2026-03-15",
    category: "Workshops",
  },
  {
    id: "g3",
    image: "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "National Youth Leadership Summit",
    event: "NEY Summit 2025",
    date: "2025-10-15",
    category: "Conferences",
  },
  {
    id: "g4",
    image: "https://images.pexels.com/photos/28662953/pexels-photo-28662953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Tree planting drive with community volunteers",
    event: "Green Nepal Campaign",
    date: "2026-06-05",
    category: "Campaigns",
  },
  {
    id: "g5",
    image: "https://images.pexels.com/photos/5530437/pexels-photo-5530437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Digital skills training session",
    event: "Digital Literacy Initiative",
    date: "2026-04-20",
    category: "Workshops",
  },
  {
    id: "g6",
    image: "https://images.pexels.com/photos/6646770/pexels-photo-6646770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Volunteers organizing community aid packages",
    event: "Community Outreach Program",
    date: "2026-05-10",
    category: "Community",
  },
  {
    id: "g7",
    image: "https://images.pexels.com/photos/5711035/pexels-photo-5711035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Innovation hackathon team at work",
    event: "NEY Innovation Hackathon 2026",
    date: "2026-05-24",
    category: "Conferences",
  },
  {
    id: "g8",
    image: "https://images.pexels.com/photos/6647026/pexels-photo-6647026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Volunteers during a community service event",
    event: "Community Service Day",
    date: "2026-07-01",
    category: "Community",
  },
  {
    id: "g9",
    image: "https://images.pexels.com/photos/3931501/pexels-photo-3931501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Group discussion during leadership training",
    event: "Regional Leadership Training",
    date: "2026-04-12",
    category: "Leadership",
  },
  {
    id: "g10",
    image: "https://images.pexels.com/photos/7869021/pexels-photo-7869021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Entrepreneurship bootcamp brainstorming session",
    event: "Youth Entrepreneurship Lab",
    date: "2026-07-12",
    category: "Workshops",
  },
  {
    id: "g11",
    image: "https://images.pexels.com/photos/6646923/pexels-photo-6646923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Health awareness campaign distribution",
    event: "Community Health Awareness",
    date: "2026-03-20",
    category: "Campaigns",
  },
  {
    id: "g12",
    image: "https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    caption: "Team strategy meeting",
    event: "Quarterly Planning Session",
    date: "2026-01-15",
    category: "Leadership",
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
    description: "Comprehensive overview of NEY's activities, programs, and financial summary for 2025.",
    fileSize: "2.4 MB",
  },
  {
    title: "Impact Report 2025",
    type: "Impact Report",
    year: "2025",
    description: "Detailed analysis of the impact created by NEY programs across communities in Nepal.",
    fileSize: "1.8 MB",
  },
  {
    title: "Organizational Constitution",
    type: "Organizational Document",
    year: "2023",
    description: "The founding constitution of Nepal Emerging Youth, outlining governance and structure.",
    fileSize: "850 KB",
  },
  {
    title: "Code of Conduct Policy",
    type: "Policy",
    year: "2024",
    description: "Guidelines and standards of conduct for all NEY members, volunteers, and leadership.",
    fileSize: "420 KB",
  },
  {
    title: "Event Report — National Youth Leadership Summit 2025",
    type: "Event Report",
    year: "2025",
    description: "Summary report from the 2025 National Youth Leadership Summit, including outcomes and feedback.",
    fileSize: "1.2 MB",
  },
  {
    title: "Volunteer Handbook",
    type: "Policy",
    year: "2024",
    description: "A guide for NEY volunteers covering roles, expectations, and available support.",
    fileSize: "680 KB",
  },
  {
    title: "Financial Transparency Report 2024",
    type: "Impact Report",
    year: "2024",
    description: "Detailed breakdown of NEY's income, expenses, and financial management practices for 2024.",
    fileSize: "950 KB",
  },
  {
    title: "Research Paper — Youth Participation in Nepal",
    type: "Publication",
    year: "2025",
    description: "A research publication examining the state of youth participation and civic engagement in Nepal.",
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
    description: "Join NEY as an official member and participate in programs, events, and organizational activities.",
    icon: "UserPlus",
    cta: "Join NEY",
    href: "/join",
  },
  {
    title: "Volunteer",
    description: "Contribute your time and skills to NEY programs, events, and community initiatives.",
    icon: "HeartHandshake",
    cta: "Volunteer",
    href: "/join",
  },
  {
    title: "Campus Representative",
    description: "Represent NEY at your college or university and build a local youth network.",
    icon: "School",
    cta: "Apply Now",
    href: "/join",
  },
  {
    title: "Partner With NEY",
    description: "Collaborate with NEY as an organization, institution, or corporate entity on shared goals.",
    icon: "Handshake",
    cta: "Partner With Us",
    href: "/contact",
  },
  {
    title: "Sponsor an Initiative",
    description: "Support specific NEY programs or events through sponsorship and help us scale our impact.",
    icon: "Sparkles",
    cta: "Get in Touch",
    href: "/contact",
  },
  {
    title: "Collaborate With Us",
    description: "Have an idea for collaboration? We're always open to exploring new ways to work together.",
    icon: "Network",
    cta: "Reach Out",
    href: "/contact",
  },
];
