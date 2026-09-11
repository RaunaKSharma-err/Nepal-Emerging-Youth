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
      "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/793212756_122167266153119995_672114096608872646_n.jpg?stp=dst-jpg_tt6&cstp=mx1800x1800&ctp=s1800x1800&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Gor7V8eQFmUQ7kNvwFSp9E-&_nc_oc=AdpdJ7rhl3CEgxytSJWVVQDuBZF-gjK4LoLONwUOO0E3j69NqLcN7h0uuEL7W5hbNM5eCLSivnrTcxkgKEPokBQd&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=W74L4KIEa7OzjpExY8xBlQ&_nc_ss=7b2a8&oh=00_AQL6DqlMXtSBRhR39YfiQ9PsoH04O0F0WN0cbq9KljlO9A&oe=6AA98CD9",
    caption: "Legal quiz competition for young people",
    event: "Legal Quiz Competition",
    date: "2026-09-05",
    category: "Education",
  },
  {
    id: "g2",
    image:
      "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/794061831_122167170465119995_2970869836409356226_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mvnGdwdZCycQ7kNvwHkzDlV&_nc_oc=AdosT9sIb_9zYID5JpXh3A0a3PUIJQQNNLQro0YuHzkBbvAivcMnbCwn7dgcw827lMW6cVdL_82f0TGK1hGsYQWU&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=TWcu04t9JUroWlK0zr6C7w&_nc_ss=7b2a8&oh=00_AQKpGRnglbTqXY-aiTZspo4PCI_Iqw3JFTjYKCyCQRX-8A&oe=6AA97D8A",
    caption: "Community health checkups and awareness services",
    event: "Ghar Nirman Mela 2083 – Health Desk",
    date: "2026-09-03",
    category: "Health",
  },
  {
    id: "g3",
    image:
      "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/793212642_122167074789119995_740175094318545571_n.jpg?stp=dst-jpg_tt6&cstp=mx1800x1800&ctp=s1800x1800&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_LeBE0geUIQ7kNvwGN9Y_K&_nc_oc=Adp-EK7_g9MH95DGLMTZTN2MFz85OyP0paAnR5oLLq5mqhrCg9yRGoBGcn14Os_7OqEXTVQebLsy7jIxD_vPXhif&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=2vs_COe70GtlOTYMKpst-A&_nc_ss=7b2a8&oh=00_AQKIqTUQbIl4_7tIHCz_Yxrnb3OPEK3zKwL714J3CPLknQ&oe=6AA96783",
    caption: "Mobile healthcare services for flood-affected communities",
    event: "Nuwakot Mobile Health Camp",
    date: "2026-08-31",
    category: "Health",
  },
  {
    id: "g4",
    image:
      "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/793212641_122167039695119995_6139180518440728941_n.jpg?stp=dst-jpg_tt6&cstp=mx1152x2048&ctp=s1152x2048&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dxH-23PiWtcQ7kNvwEAsalW&_nc_oc=Adp7ENYADFl_2izdrpUQDhGY2MiNT0oHBqNhMzaEYz2X98ceGxbK8yklEP6Wd47tQxbM3P4hmTqjisVDrsMYNjbD&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=UN19t2IQ-ymf_EbJMT0-Lg&_nc_ss=7b2a8&oh=00_AQLCPT6oDyX7IcmLq9azVTKxh91FHyKGgd1IvhEomrvmdw&oe=6AA979D2",
    caption: "Youth volunteers distributing relief materials",
    event: "Rasuwa Relief Campaign",
    date: "2026-09-01",
    category: "Disaster Relief",
  },
  {
    id: "g5",
    image:
      "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/778883352_122165650221119995_3490540782797297812_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1920&ctp=s1920x1920&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hyxN7Y_JTRkQ7kNvwG_UEk_&_nc_oc=Adp91HeRZekdg3z8MEmM6tR8YLf_PQSMXKcw_hyChzdzI4HjSHfNWsKLuDLwU-vqcCPDE3Jxl7RVUR0CbNUgsVfB&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=W2plESuHIOBHciqEB0IoRg&_nc_ss=7b2a8&oh=00_AQI7lwPuaAAtDfG-LlRCD2ukw9gZcIT5HoLdLt92SSmHuw&oe=6AA975D1",
    caption: "Volunteer and medical support at a youth technology event",
    event: "CodeFest Madhesh Pradesh – Community & Medical Support",
    date: "2026-08-21",
    category: "Community & Health",
  },
  {
    id: "g6",
    image:
      "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/766797925_122164565511119995_4086237624243385012_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Lz7On_0TCKgQ7kNvwHoVwGV&_nc_oc=AdolbYQW5ycHh17DVYah1QK9bUBqDMrVAELX2a7DzeCNmrxR0lddM0I3uJxhRODVTkiyHedy1Fy5_GH87pnBFIoS&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=htC_SAocRvcogVQiTIR9VA&_nc_ss=7b2a8&oh=00_AQIivhq-jsr1Kdx6TW-hbXAwqIzpIUsL33hbeczsG3CO4w&oe=6AA97AE9",
    caption: "Young people engaging in youth rights advocacy",
    event: "7th Nepal Youth Rights Mega Meet",
    date: "2026-01-01",
    category: "Youth Advocacy",
  },
  {
    id: "g7",
    image:
      "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/698737326_122153939631119995_797306232196457092_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x591&ctp=s1280x591&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=brTXY9owHNUQ7kNvwF8fnIH&_nc_oc=AdrMNKOfdfaQ0o8DOJM9Cmyzlhk182pNKbr9o1yCqxI2ceHyMv-Q4vENUPihVJHzpRoXgKaAsDG1OylZ7w0ceI-6&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=MTI56WKqgXfwuMA_-GYFDQ&_nc_ss=7b2a8&oh=00_AQILaOyRl5qlGScoxPuwdqDweEpa_2f3ZlLk0UYHjf0iFA&oe=6AA99186",
    caption: "Dental and eye health screening for school students",
    event: "School Health Awareness Program & Health Camp",
    date: "2026-05-15",
    category: "Health",
  },
  {
    id: "g8",
    image:
      "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/689013507_122153305833119995_1839708086786806739_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x721&ctp=s1600x721&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UZStWBaOUn4Q7kNvwEUoQ7N&_nc_oc=Adponatpop8pJS9qutFELwo0KFgyN4Lo9soURTIgOHeYs2-YpW3QfdTJ91oXL36uPDqO8vFEaZgnJTNDLPE62MyC&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=Fjpu1rhvB4t5-hK8pRSYyA&_nc_ss=7b2a8&oh=00_AQJkFo1zUhylF8GYP6w4DrD0Ks09VZUq6rFba4SFv2Gtcw&oe=6AA98C1E",
    caption: "Student health checkups and adolescent health awareness",
    event: "School Health Camp & Awareness Program",
    date: "2026-05-11",
    category: "Health",
  },
  {
    id: "g9",
    image:
      "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/614285160_122123650797119995_3594764790103196280_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=28mgpSnF0JwQ7kNvwH42OQ1&_nc_oc=Ado3n0kAuq0oqjHZLfM1KrFmohmpuG46wLIYkSgp6aO02qEoW0e7ayywd5UBgwZvp-8lktdPKo6KM-u4emg7KhRu&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=Y8LM7hA3ErUAYCgn4fshaw&_nc_ss=7b2a8&oh=00_AQKeBmoKdlyPE3U6HDzDlCmE08wk15i789KIU-sJPwc6Aw&oe=6AA97A3D",
    caption: "Students learning about digital health and cyber safety",
    event: "Digital Health & Social Media Awareness Program",
    date: "2026-01-01",
    category: "Digital Health",
  },
  {
    id: "g10",
    image:
      "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/612322995_122123305623119995_3510580506098076301_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MDjQNumx7XUQ7kNvwHhgWP6&_nc_oc=AdpBFOHE5iLHflr2yHgtL98CcvzPmf9c_Nx1xw7rM8djFKW-nYeiEFy4DteH0WZj3JFg2m6oOgBuyC3j0_qvsq8I&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=EwEnWk-y8psSO9TbHBgb1g&_nc_ss=7b2a8&oh=00_AQJ_WYtzdzaJxwVtheQ_DeTsphPkj_HgamvmVZvnTjSFjQ&oe=6AA9999A",
    caption: "Mental health and handwashing awareness for students",
    event: "Mental Health & Handwashing Awareness Program",
    date: "2026-01-01",
    category: "Health Awareness",
  },
  {
  id: "g11",
  image:
    "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/801788981_122167778523119995_1615616397536003320_n.jpg?stp=dst-jpg_tt6&cstp=mx1800x1800&ctp=s1800x1800&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YSOYENXR4NUQ7kNvwHh0Fu9&_nc_oc=AdplAuGOb4sUzYfQ5A9IKMxr0pdmkd63hTedn0c5sQQo6Cku6YttswG6FlJdy8iaT2ZhiHFIUST3He2ucEfE7jIa&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=Z5vD9tK8PIck-YIU00VtYg&_nc_ss=7b2a8&oh=00_AQJfFeFPFSD2G4GJQub9pe4LRrMEfaxECjLQqjOd3OeYVQ&oe=6AA98AB5",
  caption:
    "A tuition centre established in Rautahat to support children from families with no history of formal education, along with the distribution of essential study accessories.",
  event: "Rautahat Education Support Initiative",
  date: "2026-09-11",
  category: "Education",
},
{
  id: "g12",
  image:
    "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/801585751_122167684989119995_3809696701807904925_n.jpg?stp=dst-jpg_tt6&cstp=mx1800x1800&ctp=s1800x1800&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oOI1deUipnMQ7kNvwG3NQgG&_nc_oc=AdrECNaxbJskMcVxb5MkW_zsj8nquHLWCbr2uDDLWPbR9ebFQzENmpbdF3UFAdIsdHlurUJ4TNlzfjStU10plZrT&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=iV0uQ2FPZeEnyn7HCD16vw&_nc_ss=7b2a8&oh=00_AQJZXmAdU3jQ_EN6GaG8yAN015XsS3V2XtMw209pRjYKZw&oe=6AA9A035",
  caption:
    "Supporting children by removing barriers to education and distributing essential study materials.",
  event: "Rautahat Education Support Initiative",
  date: "2026-09-11",
  category: "Education",
},
{
  id: "g13",
  image:
    "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/801585760_122167684887119995_3209192166165772083_n.jpg?stp=dst-jpg_tt6&cstp=mx1800x1800&ctp=s1800x1800&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Z4mrGhJsUFcQ7kNvwFSc6zc&_nc_oc=AdpPkDC7RI60zF6LVYLRvVWEHG63O1fltl1Z45zDVE5OVxIG-KBZ73vvP-UyjuRs2iydrwM5UTKTORZMV4jBv4D3&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=9Du0nJymlzX-EVfyhjdx6A&_nc_ss=7b2a8&oh=00_AQKRfgg5EcDTFeRIqPUjchx9l2h67W30ft6hsM_wUrNVjQ&oe=6AA98362",
  caption:
    "School bags, notebooks, and pencils distributed to children to support their education.",
  event: "Rautahat Education Support Initiative",
  date: "2026-09-11",
  category: "Education",
},
{
  id: "g15",
  image:
    "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/793212626_122167169493119995_6474463416058454198_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1280x960&ctp=s1280x960&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vweCkFjvT_cQ7kNvwF0DlF_&_nc_oc=AdqO_fz69Bx0xEuYE7xQqcavzXS0D1I9kFBuVPr3qxicKeMHNlMd-3ZGoL3j0nptl1FUpAiPa2yu4gQfUs78mC38&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=wgrbVkudY2ixQxCeCcC3rA&_nc_ss=7b2a8&oh=00_AQLpouodG7R6HB0NChvC_gRuc2Z1_IN5kCPpTKpl3dGfBA&oe=6AA9775B",
  caption:
    "Community members receiving essential healthcare and support services.",
  event: "Birgunj Nirman Mela Mobile Health Camp",
  date: "2026-09-8",
  category: "Health",
},
{
  id: "g16",
  image:
    "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/793212394_122166975651119995_2838978134601502563_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=K9uHbtZHt_8Q7kNvwGvId0F&_nc_oc=AdpSFlY6G3qaCIqas1xhbMN8M2rdKfLm2uWBcrEuGTqd0M-WejxG7VVWZOF8AGtoL3jyv20xZLu4rzwCc4FXSCHj&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=YXpLN41Cb8SektNdSSic6Q&_nc_ss=7b2a8&oh=00_AQI9jPuE90aGhHcmmQ9AlEft9thnpOaFo9Zaj2Hr5uzInw&oe=6AA97627",
  caption:
    "Youth volunteers providing healthcare support to flood-affected communities.",
  event: "Nuwakot Mobile Health Camp",
  date: "2026-08-31",
  category: "Health",
},
{
  id: "g17",
  image:
    "https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/793159057_122166975705119995_1247666595217925458_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6_Y0-lm0WgcQ7kNvwGOAwL4&_nc_oc=AdpUGAIvWkKjlawOiiPlNkoYX-KAjB1Hyazjgz8W4esY7FXfMvb-JwvFfXedC41gLbCvbWM5MB0KQu7_gtRZIWIW&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=fgX3uKSTA0ojjylU_cNQig&_nc_ss=7b2a8&oh=00_AQJIL1ghlTpM5bkWVPVDjOx8UZVTWCATYMOyY-vpQXz1dg&oe=6AA979AD",
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
