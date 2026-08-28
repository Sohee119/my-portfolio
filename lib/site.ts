/**
 * Portfolio content — edit this file to update the site.
 */

export type ProjectStatus = "featured" | "in-progress";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  status?: ProjectStatus;
};

export const site = {
  name: "Paolo Espion",
  firstName: "Paolo",
  title: "Computer Science Graduate | Aspiring Software Engineer & AI Engineer",
  email: "pao.espion@gmail.com", 
  location: "Open to IT and software roles",
  resumePath: "/ESPION_RESUME.pdf",
  githubUsername: "Sohee119",
  socials: {
    github: "https://github.com/Sohee119",
    linkedin: "https://www.linkedin.com/in/paolo-espion/", 
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#github", label: "GitHub" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    greeting: "Hi, I'm Paolo Espion.",
    description:
      "I am a Computer Science graduate passionate about software development, data analytics, artificial intelligence, and building practical technology solutions. I enjoy learning new technologies, solving problems, and turning ideas into functional applications. I am currently building my skills and portfolio while looking for opportunities to start my professional career in IT.",
  },
  about: {
    paragraphs: [
      "I recently graduated with a Bachelor of Science in Computer Science. I am focused on growing as a software engineer by building real applications, writing clean code, and learning how production systems are designed and deployed.",
      "My current work is practical rather than theoretical. I spend time on software engineering, data analytics, artificial intelligence, backend development, databases, APIs, and cloud/deployment so I can contribute on a team from day one.",
      "I am looking for my first IT or software-related role where I can keep learning, ship useful features, and take ownership of well-defined problems.",
    ],
    focus: [
      "Software Engineering",
      "Data Analytics",
      "Artificial Intelligence",
      "Backend Development",
      "Databases",
      "APIs",
      "Cloud/Deployment",
    ],
  },
  skillCategories: [
    {
      name: "Programming",
      skills: ["Python", "TypeScript", "JavaScript", "SQL"],
    },
    {
      name: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "REST APIs"],
    },
    {
      name: "Database",
      skills: ["PostgreSQL", "Supabase", "MySQL"],
    },
    {
      name: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      name: "Data / AI",
      skills: [
        "Excel",
        "Data Analytics",
        "Python for Data",
        "AI APIs",
        "Machine Learning fundamentals",
      ],
    },
  ],
  projects: [
    {
      slug: "mynaga-crud-webapp",
      name: "MyNaga CRUD WebApp",
      summary:
        "An internal case management web application designed to help government staff manage and organize case records efficiently.",
      description:
        "MyNaga is a case management web app built to help staff create, update, search, and review case records in one place. The project focuses on practical workflows: structured CRUD operations, filtering, a case timeline, and PDF reporting for day-to-day use.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase/PostgreSQL",
        "NextAuth.js",
        "Google Sheets API",
      ],
      features: [
        "Case management",
        "CRUD operations",
        "Search and filtering",
        "Case timeline",
        "PDF report generation",
        "Batch PDF export",
        "Authentication",
      ],
      image: "/projects/mynaga.svg",
      githubUrl: "https://github.com/Sohee119/mynaga-crud-app",
      liveUrl: "",
      status: "featured",
    },
    {
      slug: "ai-rinconada-translation-synthetic-data",
      name: "AI-Driven Synthetic Data for Low-Resource Machine Translation: Enhancing Rinconada to English Translation",
      summary:
        "Enhancing Rinconada-to-English translation through synthetic data generation and specialized machine learning techniques for low-resource languages.",
      description:
        "A thesis research project focused on addressing data scarcity in low-resource machine translation. By generating and filtering high-quality synthetic parallel text data, the system improves translation accuracy, context retention, and fluency when translating Rinconada dialect into English.",
      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
        "PyTorch",
        "Hugging Face",
        "Synthetic Data Generation",
      ],
      features: [
        "Synthetic parallel corpus generation",
        "Low-resource Neural Machine Translation (NMT)",
        "Rinconada-to-English translation pipeline",
        "Dataset cleaning and quality validation",
        "Model performance evaluation (BLEU / chrF)",
      ],
      image: "/projects/rinconada-translation.svg",
      githubUrl: "https://github.com/Sohee119/Prototype_MT",
      liveUrl: "",
      status: "featured",
    },
    {
      slug: "data-analytics-dashboard",
      name: "Data Analytics Dashboard",
      summary:
        "An interactive dashboard that analyzes datasets and presents useful insights through charts, KPIs, and tables.",
      description:
        "A dashboard project for cleaning datasets, calculating KPIs, and presenting findings through charts and tables. The goal is to turn raw data into insights that are easy to scan and discuss.",
      technologies: ["Excel", "Python", "SQL", "Data visualization"],
      features: [
        "Data cleaning",
        "Data analysis",
        "KPI calculations",
        "Interactive visualizations",
        "Business insights",
      ],
      image: "/projects/analytics-dashboard.svg",
      githubUrl: "",
      liveUrl: "",
      status: "in-progress",
    },
  ] satisfies Project[],
  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "Camarines Sur Polytechnic Colleges", 
    graduationYear: "2026", 
    coursework: [] as string[],
    achievements: [] as string[],
  },
  certifications: [] as {
    name: string;
    organization: string;
    date: string;
    credentialUrl: string;
  }[],
  githubRepos: [
    {
      name: "mynaga-crud-app",
      description: "Case management web application built with Next.js, TypeScript, Tailwind CSS, and Supabase.",
      language: "TypeScript",
      url: "https://github.com/Sohee119/mynaga-crud-app",
    },
    {
      name: "Prototype_MT",
      description: "AI-Driven Synthetic Data for Low-Resource Machine Translation: Enhancing Rinconada to English Translation.",
      language: "Python",
      url: "https://github.com/Sohee119/Prototype_MT",
    },
  ],
} as const;

export function getProject(slug: string) {
  return site.projects.find((project) => project.slug === slug);
}