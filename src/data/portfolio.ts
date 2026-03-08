/**
 * Portfolio Data — Single source of truth
 * =========================================
 * Modify ONLY this file to update every section of the portfolio.
 * Sections without data are automatically hidden from the site and navigation.
 */

/* ------------------------------------------------------------------ */
/*  Type definitions                                                   */
/* ------------------------------------------------------------------ */

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  emails: string[];
  phone?: string;
  location: string;
  avatarUrl: string;
  availabilityBadge: string;
  cvUrl?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SkillCategory {
  icon: string;        // Lucide icon key
  category: string;
  skills: string[];
}

export interface SoftSkill {
  icon: string;
  name: string;
  description: string;
}

export interface Education {
  period: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  description: string;
}

export interface Experience {
  period: string;
  current?: boolean;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
}

export interface Publication {
  year: string;
  title: string;
  url?: string;
  journal: string;
  authors: string;
  doi?: string;
  role: 'first' | 'co';
}

export interface Certification {
  name: string;
  issuer: string;
  issuerUrl?: string;
  date: string;
  skills: string[];
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;        // Lucide icon key
}

export interface AboutParagraph {
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

/* ------------------------------------------------------------------ */
/*  Personal information                                               */
/* ------------------------------------------------------------------ */

export const personalInfo: PersonalInfo = {
  firstName: 'Anas',
  lastName: 'Boulif',
  title: 'Future Software Engineer',
  subtitle: 'Software Engineering student passionate about building modern web applications, solving real-world problems through code, and continuously expanding my technical skills.',
  emails: ['bfanas404@gmail.com'],
  location: 'Morocco',
  avatarUrl: '/profile.jpg',
  availabilityBadge: 'Open to Internship Opportunities',
  cvUrl: '#contact',
};

/* ------------------------------------------------------------------ */
/*  Key statistics                                                     */
/* ------------------------------------------------------------------ */

export const stats: Stat[] = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Years of Study', value: '2+' },
  { label: 'Certificates', value: '3+' },
];

/* ------------------------------------------------------------------ */
/*  About paragraphs                                                   */
/* ------------------------------------------------------------------ */

export const aboutParagraphs: AboutParagraph[] = [
  {
    text: 'I am a first-year Software Engineering student at ESISA (Higher School of Engineering in Applied Sciences) in Fès, Morocco. I am building a strong foundation in software development, data structures, algorithms, and modern application design.',
  },
  {
    text: 'I have a strong interest in full-stack web development, database design, and software architecture. I enjoy turning ideas into functional, well-crafted applications that solve real problems.',
  },
  {
    text: 'Driven by curiosity and a self-learning mindset, I dedicate time to exploring new technologies, completing online courses, and working on personal projects that sharpen my technical skills.',
  },
  {
    text: 'My immediate goal is to secure a software engineering internship where I can apply my knowledge in a professional environment, contribute to meaningful projects, and grow as a developer.',
  },
];

/* ------------------------------------------------------------------ */
/*  Technical skills                                                   */
/* ------------------------------------------------------------------ */

export const technicalSkills: SkillCategory[] = [
  {
    icon: 'code',
    category: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'SQL'],
  },
  {
    icon: 'globe',
    category: 'Web Development',
    skills: ['HTML5', 'CSS3', 'React', 'Astro', 'Node.js', 'Express'],
  },
  {
    icon: 'database',
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: 'wrench',
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Docker'],
  },
];

/* ------------------------------------------------------------------ */
/*  Soft skills (optional — set to [] to hide section)                 */
/* ------------------------------------------------------------------ */

export const softSkills: SoftSkill[] = [
  { icon: 'users', name: 'Teamwork', description: 'Effective collaboration in academic and personal projects.' },
  { icon: 'lightbulb', name: 'Problem Solving', description: 'Methodical and creative analysis to overcome technical challenges.' },
  { icon: 'clock', name: 'Time Management', description: 'Rigorous organization to balance studies, projects, and learning.' },
  { icon: 'message-circle', name: 'Communication', description: 'Ability to explain technical concepts in a clear and concise manner.' },
];

/* ------------------------------------------------------------------ */
/*  Education                                                          */
/* ------------------------------------------------------------------ */

export const education: Education[] = [
  {
    period: 'Oct 2025 — Present',
    degree: 'Bachelor\'s Degree in Software Engineering',
    field: 'Software Engineering — First Year',
    institution: 'ESISA — Higher School of Engineering in Applied Sciences',
    institutionUrl: 'https://esisa.ac.ma',
    description: 'First-year engineering program covering software development, databases, networking, artificial intelligence, and IT project management.',
  },
  {
    period: 'Sep 2022 — Jun 2025',
    degree: 'Technical High School Diploma',
    field: 'Electrical Technology Sciences',
    institution: 'Technical High School, Fès',
    description: 'A three-year technical high school diploma (Baccalaureate) focusing on electrical engineering and technology, providing a strong analytical and technical foundation.',
  },
];

/* ------------------------------------------------------------------ */
/*  Experiences (optional — set to [] to hide section)                 */
/* ------------------------------------------------------------------ */

export const experiences: Experience[] = [];

/* ------------------------------------------------------------------ */
/*  Publications (optional — set to [] to hide section)                */
/* ------------------------------------------------------------------ */

export const publications: Publication[] = [];

/* ------------------------------------------------------------------ */
/*  Certifications (optional — set to [] to hide section)              */
/* ------------------------------------------------------------------ */

export const certifications: Certification[] = [];

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    description: 'Modern portfolio website built with Astro and deployed on Vercel. Professional dark theme with glassmorphism, smooth animations, and responsive design.',
    tags: ['Astro', 'TypeScript', 'CSS3', 'Vercel'],
  },
  {
    title: 'Student Management System',
    description: 'Full-stack application for student management with authentication, complete CRUD operations, and an intuitive user interface.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'AI-Powered Smart Car',
    description: 'Developed an AI-powered smart car capable of recognizing traffic lights. The car automatically stops at red lights, slows down at orange lights, and moves forward at green lights. Project completed with a classmate during the third year of high school under the supervision of our teacher, and presented during the school\'s Open Day.',
    tags: ['Python', 'AI', 'Computer Vision', 'Embedded Systems'],
  },
];

/* ------------------------------------------------------------------ */
/*  Social links                                                       */
/* ------------------------------------------------------------------ */

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/anas-boulif-44117b379', icon: 'linkedin' },
  { label: 'WhatsApp', url: 'https://wa.me/212680663734?text=Hello%20Anas', icon: 'message-circle' },
  { label: 'Gmail', url: 'https://mail.google.com/mail/?view=cm&to=bfanas404@gmail.com', icon: 'mail' },
];

/* ------------------------------------------------------------------ */
/*  Dynamic navigation — auto-generated from active sections           */
/* ------------------------------------------------------------------ */

function buildNavItems(): NavItem[] {
  const items: NavItem[] = [
    { label: 'Home', href: '#hero', icon: 'home' },
    { label: 'About', href: '#about', icon: 'user' },
    { label: 'Skills', href: '#skills', icon: 'cpu' },
    { label: 'Education', href: '#education', icon: 'graduation-cap' },
  ];

  if (experiences.length > 0) {
    items.push({ label: 'Experience', href: '#experience', icon: 'briefcase' });
  }

  if (publications.length > 0) {
    items.push({ label: 'Publications', href: '#publications', icon: 'book-open' });
  }

  if (certifications.length > 0) {
    items.push({ label: 'Certifications', href: '#certifications', icon: 'award' });
  }

  items.push({ label: 'Projects', href: '#projects', icon: 'folder-open' });
  items.push({ label: 'Contact', href: '#contact', icon: 'send' });

  return items;
}

export const navItems: NavItem[] = buildNavItems();
