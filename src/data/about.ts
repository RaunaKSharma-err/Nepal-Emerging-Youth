import type { ImpactStat, Value } from "@/types";

export const impactStats: ImpactStat[] = [
  { label: "Active Members", value: "300", suffix: "+", icon: "Users" },
  { label: "Volunteers", value: "500", suffix: "+", icon: "HeartHandshake" },
  { label: "Events Organized", value: "80", suffix: "+", icon: "CalendarDays" },
  { label: "Communities Reached", value: "25", suffix: "+", icon: "MapPin" },
  { label: "Programs Running", value: "15", suffix: "+", icon: "Rocket" },
  { label: "Past Partnerships", value: "20", suffix: "+", icon: "Handshake" },
];

export const values: Value[] = [
  {
    title: "Leadership",
    description: "We cultivate leaders who take initiative and inspire others to act.",
    icon: "Compass",
  },
  {
    title: "Integrity",
    description: "We hold ourselves to the highest standards of honesty and transparency.",
    icon: "ShieldCheck",
  },
  {
    title: "Innovation",
    description: "We embrace new ideas and creative approaches to solve community challenges.",
    icon: "Lightbulb",
  },
  {
    title: "Inclusion",
    description: "We create spaces where every young person belongs and can contribute.",
    icon: "UsersRound",
  },
  {
    title: "Service",
    description: "We are committed to serving communities and putting others first.",
    icon: "HeartHandshake",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of working together across disciplines and borders.",
    icon: "Network",
  },
  {
    title: "Empowerment",
    description: "We equip youth with the tools, skills, and confidence to lead change.",
    icon: "TrendingUp",
  },
  {
    title: "Responsibility",
    description: "We take ownership of our actions and their impact on society.",
    icon: "Target",
  },
];

export const aboutContent = {
  whoWeAre:
    "Nepal Emerging Youth (NEY) is a youth-driven organization built by and for young people who believe in the power of collective action. We are a community of students, professionals, volunteers, and changemakers working across Nepal to create meaningful social impact.",
  whoWeAreParagraph2:
    "From leadership development to community service, from technology initiatives to awareness campaigns, NEY brings together passionate individuals who want to shape the future of their communities and their country.",
  mission:
    "To empower young people across Nepal with the skills, platforms, and opportunities they need to become effective leaders, innovators, and changemakers in their communities.",
  vision:
    "A Nepal where every young person has the opportunity to lead, innovate, and contribute meaningfully to society — where youth are not just the future, but active participants in shaping the present.",
};

export const whyExists = {
  title: "Why NEY Exists",
  subtitle: "The challenges we address",
  points: [
    {
      title: "Youth Participation",
      description:
        "Many young people in Nepal lack platforms to meaningfully participate in decision-making and community development. NEY creates those platforms.",
      icon: "Users",
    },
    {
      title: "Leadership Development",
      description:
        "There is a gap in structured leadership training for youth outside traditional academic paths. We fill that gap through hands-on programs.",
      icon: "Compass",
    },
    {
      title: "Skill Development",
      description:
        "Employability and life skills remain a challenge. NEY offers workshops, mentorship, and practical learning opportunities.",
      icon: "GraduationCap",
    },
    {
      title: "Community Engagement",
      description:
        "Communities need energetic, organized youth to drive local initiatives. We connect young people to causes that matter.",
      icon: "HeartHandshake",
    },
    {
      title: "Innovation & Entrepreneurship",
      description:
        "Nepal's youth have ideas but limited support to pursue them. NEY fosters an entrepreneurial mindset and innovation culture.",
      icon: "Lightbulb",
    },
    {
      title: "Social Responsibility",
      description:
        "We believe in building a generation that actively cares about social issues and takes responsibility for creating change.",
      icon: "Target",
    },
  ],
};

export const impactStory: import("@/types").ImpactStory = {
  title: "From Ideas to Impact",
  subtitle: "How a small team turned a community need into lasting change",
  image:
    "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/793212642_122167074789119995_740175094318545571_n.jpg?stp=dst-jpg_tt6&cstp=mx1800x1800&ctp=s1800x1800&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_LeBE0geUIoQ7kNvwGN9Y_K&_nc_oc=Adp-EK7_g9MH95DGLMTZTN2MFz85OyP0paAnR5oLLq5mqhrCg9yRGoBGcn14Os_7OqEXTVQebLsy7jIxD_vPXhif&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=hc3yjc5u4waTRyfCkKELbQ&_nc_ss=7b2a8&oh=00_AQKReCpfgRL3ml9jVTWV3QAZteJXx6615sU7P9zFbASXlA&oe=6AA99FC3",
  problem:
    "In Massive flood in bhotekoshi river and other rivers in Nepal, young people lacked access to structured leadership training and meaningful volunteer opportunities. Many were eager to contribute but had no organized platform to channel their energy.",
  action:
    "NEY organized a series of community health service, bringing together local youth for free treatment, communication, and community organizing. Volunteers were paired with mentors and given real responsibilities.",
  result:
    "Within days, participants got their own health checkup community initiatives from awareness campaigns to health checkup programs. The model proved that with the right support, young people can drive measurable change.",
  location: "Nuwakot, Nepal",
  participants: "500+",
  volunteers: "30+",
  outcome: "Self-led initiative launched by workshop graduates",
};
