import type { Program } from "@/types";

export const programs: Program[] = [
  {
    slug: "youth-leadership-academy",
    title: "Youth Leadership Academy",
    category: "Youth Leadership",
    description:
      "A structured leadership development program equipping young people with core leadership competencies through workshops, mentorship, and real-world projects.",
    longDescription:
      "The Youth Leadership Academy is NEY's flagship leadership program. Over a multi-week curriculum, participants develop skills in communication, team management, project planning, and community organizing. The program combines expert-led workshops with hands-on community projects, ensuring that learning translates directly into action. Graduates join NEY's alumni network and often go on to lead their own initiatives.",
    image:
      "https://images.pexels.com/photos/8761350/pexels-photo-8761350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    location: "Kathmandu Valley & regional chapters",
    date: "Ongoing",
    status: "ongoing",
    impact: "200+ youth trained",
    highlights: [
      "Multi-week structured curriculum",
      "Mentorship from experienced leaders",
      "Hands-on community project component",
      "Alumni network and continued support",
    ],
  },
  {
    slug: "digital-literacy-initiative",
    title: "Digital Literacy Initiative",
    category: "Technology & Innovation",
    description:
      "Bringing essential digital skills to communities across Nepal, from basic computer literacy to coding fundamentals and online safety.",
    longDescription:
      "The Digital Literacy Initiative aims to bridge the digital divide in Nepal by providing accessible technology education to underserved communities. The program covers basic computer skills, internet literacy, introductory coding, and digital safety. Through partnerships with local schools and community centers, NEY volunteers deliver hands-on training that empowers participants to navigate and benefit from the digital world.",
    image:
      "https://images.pexels.com/photos/5530437/pexels-photo-5530437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    location: "Community centers across Nepal",
    date: "Ongoing",
    status: "ongoing",
    impact: "500+ individuals trained",
    highlights: [
      "Basic to intermediate digital skills",
      "Mobile-first training approach",
      "Online safety and digital citizenship",
      "Partnered with local schools",
    ],
  },
  {
    slug: "community-health-awareness",
    title: "Community Health Awareness",
    category: "Health",
    description:
      "Organizing health awareness campaigns, basic health camps, and wellness workshops in partnership with healthcare professionals.",
    longDescription:
      "The Community Health Awareness program focuses on spreading health knowledge and facilitating access to basic healthcare in underserved areas. NEY organizes health camps, awareness drives on topics like mental health, nutrition, and hygiene, and partners with medical professionals to provide free check-ups. The program emphasizes preventive care and health education as tools for community empowerment.",
    image:
      "https://images.pexels.com/photos/6646923/pexels-photo-6646923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    location: "Rural and semi-urban communities",
    date: "Quarterly campaigns",
    status: "ongoing",
    impact: "1,000+ people reached",
    highlights: [
      "Free health check-up camps",
      "Mental health awareness sessions",
      "Nutrition and hygiene workshops",
      "Partnership with healthcare professionals",
    ],
  },
  {
    slug: "green-nepal-campaign",
    title: "Green Nepal Campaign",
    category: "Environment",
    description:
      "An environmental initiative mobilizing youth for tree planting, cleanup drives, and sustainability education across communities.",
    longDescription:
      "The Green Nepal Campaign is NEY's environmental outreach program. It brings young people together for tree planting drives, community cleanup events, waste management workshops, and sustainability education. The campaign aims to foster environmental consciousness among youth and translate that awareness into tangible action — cleaner neighborhoods, greener communities, and a more sustainable future.",
    image:
      "https://images.pexels.com/photos/28662953/pexels-photo-28662953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    location: "Nationwide",
    date: "Seasonal drives",
    status: "ongoing",
    impact: "5,000+ trees planted",
    highlights: [
      "Tree planting drives",
      "Community cleanup events",
      "Waste management workshops",
      "Sustainability education in schools",
    ],
  },
  {
    slug: "youth-entrepreneurship-lab",
    title: "Youth Entrepreneurship Lab",
    category: "Entrepreneurship",
    description:
      "A startup and entrepreneurship program helping young founders turn ideas into viable ventures through training, mentorship, and networking.",
    longDescription:
      "The Youth Entrepreneurship Lab supports aspiring young entrepreneurs in Nepal with the knowledge, mentorship, and networks they need to build viable businesses. The program covers business fundamentals, market research, financial literacy, pitch development, and access to a network of mentors and potential partners. Participants work on real business ideas and receive feedback throughout the program.",
    image:
      "https://images.pexels.com/photos/7869021/pexels-photo-7869021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    location: "Kathmandu & online",
    date: "Cohort-based",
    status: "upcoming",
    impact: "50+ startup ideas supported",
    highlights: [
      "Business model canvas workshops",
      "Mentorship from experienced entrepreneurs",
      "Pitch practice and demo day",
      "Networking with investors and partners",
    ],
  },
  {
    slug: "education-support-program",
    title: "Education Support Program",
    category: "Education",
    description:
      "Providing tutoring, mentorship, and educational resources to students from underserved communities to support their academic journey.",
    longDescription:
      "The Education Support Program connects NEY volunteers with students from underserved communities who need additional academic support. The program offers tutoring sessions, mentorship, study materials, and guidance on higher education opportunities. By pairing motivated volunteers with students in need, NEY aims to reduce educational inequality and help more young people reach their academic potential.",
    image:
      "https://images.pexels.com/photos/8761522/pexels-photo-8761522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    location: "Partner schools across Nepal",
    date: "School year aligned",
    status: "ongoing",
    impact: "300+ students supported",
    highlights: [
      "One-on-one tutoring sessions",
      "Mentorship for career guidance",
      "Study materials distribution",
      "Higher education awareness sessions",
    ],
  },
];

export const featuredInitiatives: import("@/types").FeaturedInitiative[] = [
  {
    slug: "youth-leadership-academy",
    title: "Youth Leadership Academy",
    description:
      "Our flagship program has trained hundreds of young leaders who now drive community initiatives across Nepal. A structured curriculum combined with real-world projects creates leaders who don't just talk about change — they make it.",
    image:
      "./767041620_122164566045119995_8242587380027076348_n.jpg",
    impactMetric: "200+",
    impactLabel: "Youth Trained",
    size: "large",
  },
  {
    slug: "Bhotekoshi Flood and disaster-campaign",
    title: "Bhotekoshi Flood and Disaster Relief Campaign",
    description:
      "In response to the devastating floods in the Bhotekoshi region, NEY mobilized volunteers and resources to provide immediate relief and support to affected communities. This initiative not only delivered essential supplies but also raised awareness about disaster preparedness and community resilience.",
    image:
      "./793212652_122166975513119995_5017206661600121347_n.jpg",
    impactMetric: "5,000+",
    impactLabel: "People Assisted",
    size: "small",
  },
  {
    slug: "digital-literacy-initiative",
    title: "Digital Literacy Initiative",
    description:
      "Bridging the digital divide by bringing technology education to communities that need it most.",
    image:
      "https://images.pexels.com/photos/5530437/pexels-photo-5530437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    impactMetric: "500+",
    impactLabel: "People Trained",
    size: "small",
  },
];

export const programCategories = [
  "All",
  "Youth Leadership",
  "Education",
  "Health",
  "Entrepreneurship",
  "Technology & Innovation",
  "Community Development",
  "Environment",
  "Awareness Campaigns",
];
