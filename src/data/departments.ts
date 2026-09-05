import type { Department } from "@/types";

export const departments: Department[] = [
  {
    slug: "information-technology",
    name: "Information Technology",
    shortName: "IT",
    description:
      "The IT Department drives NEY's digital transformation, maintaining internal systems and developing technology solutions for community impact.",
    purpose:
      "To leverage technology as a tool for social impact — building digital systems that support NEY's mission and creating innovative solutions for community challenges.",
    responsibilities: [
      "Maintaining NEY's digital infrastructure and web presence",
      "Developing tools and platforms for program delivery",
      "Leading digital literacy and technology education initiatives",
      "Supporting data collection and impact measurement systems",
      "Managing cybersecurity and data protection practices",
    ],
    lead: "[IT Department Head]",
    teamSize: "10+ members",
    activities: [
      "Website development and maintenance",
      "Digital literacy workshop delivery",
      "Innovation hackathon organization",
      "Internal tool development",
      "Data systems management",
    ],
    contactEmail: "it@ney.org.np",
    icon: "Cpu",
  },
  {
    slug: "human-resources",
    name: "Human Resources",
    shortName: "HR",
    description:
      "The HR Department manages recruitment, volunteer coordination, and member development, ensuring NEY has the people power to deliver on its mission.",
    purpose:
      "To build and nurture a capable, motivated, and well-supported team of members and volunteers across the organization.",
    responsibilities: [
      "Recruiting and onboarding new members and volunteers",
      "Coordinating volunteer assignments across programs",
      "Managing member development and training programs",
      "Handling member engagement and retention",
      "Maintaining organizational records and directories",
    ],
    lead: "[HR Department Head]",
    teamSize: "8+ members",
    activities: [
      "Member recruitment drives",
      "Volunteer orientation and training",
      "Team-building events",
      "Performance recognition programs",
      "Member satisfaction surveys",
    ],
    contactEmail: "hr@ney.org.np",
    icon: "Users",
  },
  {
    slug: "public-relations",
    name: "Public Relations",
    shortName: "PR",
    description:
      "The PR Department manages NEY's external communications, media relations, and institutional partnerships.",
    purpose:
      "To build and maintain a strong, credible public image for NEY and foster meaningful relationships with external stakeholders.",
    responsibilities: [
      "Managing media relations and press communications",
      "Developing partnerships with institutions and organizations",
      "Coordinating external event representation",
      "Handling public inquiries and communications",
      "Building NEY's brand presence in the public sphere",
    ],
    lead: "[PR Department Head]",
    teamSize: "6+ members",
    activities: [
      "Press releases and media outreach",
      "Institutional partnership development",
      "Public speaking engagements",
      "Brand strategy and positioning",
      "Stakeholder communications",
    ],
    contactEmail: "pr@ney.org.np",
    icon: "Megaphone",
  },
  {
    slug: "events",
    name: "Events",
    shortName: "Events",
    description:
      "The Events Department plans and executes all NEY events, from small workshops to large-scale conferences and campaigns.",
    purpose:
      "To deliver exceptional events that inspire, educate, and mobilize youth and communities across Nepal.",
    responsibilities: [
      "Planning and executing all NEY events",
      "Managing event logistics, venues, and supplies",
      "Coordinating with speakers, partners, and vendors",
      "Overseeing event registration and attendee experience",
      "Post-event evaluation and reporting",
    ],
    lead: "[Events Department Head]",
    teamSize: "12+ members",
    activities: [
      "National Youth Leadership Summit",
      "Workshop series and training events",
      "Community drives and campaigns",
      "Hackathons and innovation events",
      "Networking meetups",
    ],
    contactEmail: "events@ney.org.np",
    icon: "CalendarDays",
  },
  {
    slug: "research",
    name: "Research",
    shortName: "Research",
    description:
      "The Research Department conducts studies and impact assessments that inform NEY's programs and measure community outcomes.",
    purpose:
      "To ground NEY's work in evidence and data, ensuring programs are informed by research and measured by real impact.",
    responsibilities: [
      "Conducting community needs assessments",
      "Designing and implementing impact measurement frameworks",
      "Producing research reports and publications",
      "Analyzing program data and outcomes",
      "Supporting evidence-based program design",
    ],
    lead: "[Research Lead]",
    teamSize: "5+ members",
    activities: [
      "Annual impact assessment",
      "Community needs surveys",
      "Program evaluation reports",
      "Youth trends research",
      "Data analysis and visualization",
    ],
    contactEmail: "research@ney.org.np",
    icon: "FlaskConical",
  },
  {
    slug: "media-communications",
    name: "Media & Communications",
    shortName: "Media",
    description:
      "The Media & Communications Department manages content creation, social media, and all internal and external communications.",
    purpose:
      "To tell NEY's story effectively, engage audiences across platforms, and ensure clear communication within and beyond the organization.",
    responsibilities: [
      "Creating content for website, social media, and newsletters",
      "Managing NEY's social media presence",
      "Producing video, photo, and graphic content",
      "Internal communications and announcements",
      "Maintaining brand consistency across all channels",
    ],
    lead: "[Media & Communications Lead]",
    teamSize: "10+ members",
    activities: [
      "Social media content creation",
      "Newsletter production",
      "Event photography and videography",
      "Graphic design and branding",
      "Website content management",
    ],
    contactEmail: "media@ney.org.np",
    icon: "Camera",
  },
  {
    slug: "finance",
    name: "Finance",
    shortName: "Finance",
    description:
      "The Finance Department manages NEY's financial operations, budgeting, and transparency reporting.",
    purpose:
      "To ensure financial integrity, transparency, and responsible resource management across all NEY activities.",
    responsibilities: [
      "Budgeting and financial planning",
      "Tracking income and expenses",
      "Financial reporting and transparency",
      "Grant and funding management",
      "Compliance and financial controls",
    ],
    lead: "[Finance Department Head]",
    teamSize: "4+ members",
    activities: [
      "Annual budget preparation",
      "Monthly financial reporting",
      "Transparency report publication",
      "Grant administration",
      "Financial audit coordination",
    ],
    contactEmail: "finance@ney.org.np",
    icon: "Wallet",
  },
  {
    slug: "community-outreach",
    name: "Community Outreach",
    shortName: "Outreach",
    description:
      "The Community Outreach Department builds relationships with communities and local partners to ensure NEY's work reaches where it's needed most.",
    purpose:
      "To connect NEY with communities across Nepal, ensuring our programs are grounded in local needs and reach the people who benefit most.",
    responsibilities: [
      "Building relationships with community leaders and groups",
      "Identifying community needs and opportunities",
      "Coordinating local program delivery",
      "Managing community partnerships",
      "Gathering community feedback and input",
    ],
    lead: "[Community Outreach Officer]",
    teamSize: "8+ members",
    activities: [
      "Community needs assessment visits",
      "Local partnership development",
      "Regional program coordination",
      "Community feedback collection",
      "Local volunteer recruitment",
    ],
    contactEmail: "outreach@ney.org.np",
    icon: "MapPin",
  },
  {
    slug: "international-relations",
    name: "International Relations",
    shortName: "International",
    description:
      "The International Relations Department manages NEY's connections with international organizations and global youth networks.",
    purpose:
      "To position NEY within the global youth movement and create opportunities for international collaboration and exchange.",
    responsibilities: [
      "Building relationships with international organizations",
      "Exploring global partnership opportunities",
      "Managing international exchange programs",
      "Representing NEY in international forums",
      "Monitoring global youth development trends",
    ],
    lead: "[International Relations Lead]",
    teamSize: "4+ members",
    activities: [
      "International partnership outreach",
      "Global youth network engagement",
      "Exchange program coordination",
      "International forum representation",
      "Global best practices research",
    ],
    contactEmail: "international@ney.org.np",
    icon: "Globe",
  },
];
