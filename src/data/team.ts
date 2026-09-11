import type { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Amit Chand",
    position: "Founder",
    department: "Leadership",
    category: "executive",
    bio: "Leads NEY's strategic vision and overall organizational direction, with a background in youth development and community organizing.",
    image: "/WhatsApp Image 2026-09-06 at 4.10.43 PM.jpeg",
    social: { email: "amitchand461@gmail.com" ,linkedin:"https://www.linkedin.com/in/nepal-emerging-youth-09136b404/"},
  },
  {
    id: "2",
    name: "Dr. Aayush pudsaini",
    position: "Executive Director",
    department: "Leadership",
    category: "executive",
    bio: "Supports organizational strategy and oversees day-to-day operations, ensuring alignment across departments and programs.",
    image: "/WhatsApp Image 2026-09-06 at 4.19.30 PM.jpeg",
    social: {
      email: "aayushpudasaini177@gmail.com",
    },
  },
  {
    id: "3",
    name: "Raunak Sharma",
    position: "IT Head",
    department: "Programs",
    category: "executive",
    bio: "Oversees the IT department, implementation, and evaluation of all NEY Digital presence, ensuring quality and impact across initiatives.",
    image: "/Raunaksharma.png",
    social: { email: "progritik@gmail.com" ,linkedin: "https://www.linkedin.com/in/raunak-sharma-b193b62b5"},
  },
];

export const teamCategories = [
  { key: "executive", label: "Executive Leadership" },
  { key: "department-head", label: "Department Heads" },
  { key: "core-team", label: "Core Team" },
  { key: "advisor", label: "Advisors" },
] as const;
