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
  title: 'Étudiant en Ingénierie Informatique',
  subtitle: 'Passionné par le développement web, les systèmes intelligents et les nouvelles technologies. Toujours en quête de nouveaux défis et d\'apprentissage continu.',
  emails: ['a.boulif@esisa.ac.ma'],
  location: 'Fès, Maroc',
  avatarUrl: 'https://avatars.githubusercontent.com/u/256898673?v=4',
  availabilityBadge: 'Disponible pour un stage',
  cvUrl: '#contact',
};

/* ------------------------------------------------------------------ */
/*  Key statistics                                                     */
/* ------------------------------------------------------------------ */

export const stats: Stat[] = [
  { label: 'Projets Réalisés', value: '6+' },
  { label: 'Technologies Maîtrisées', value: '12+' },
  { label: 'Années d\'Études', value: '2+' },
  { label: 'Certificats', value: '3+' },
];

/* ------------------------------------------------------------------ */
/*  About paragraphs                                                   */
/* ------------------------------------------------------------------ */

export const aboutParagraphs: AboutParagraph[] = [
  {
    text: 'Étudiant en ingénierie informatique à l\'ESISA (École Supérieure d\'Ingénierie en Sciences Appliquées) à Fès, je me forme aux fondamentaux du génie logiciel, des systèmes d\'information et du développement d\'applications modernes.',
  },
  {
    text: 'Je m\'intéresse particulièrement au développement web full-stack, à la conception de bases de données et aux architectures logicielles. J\'aime construire des solutions concrètes qui résolvent de vrais problèmes.',
  },
  {
    text: 'Curieux et autodidacte, je consacre une partie de mon temps à explorer de nouvelles technologies, suivre des formations en ligne et contribuer à des projets personnels qui me permettent de consolider mes compétences.',
  },
  {
    text: 'Mon objectif à court terme est de décrocher un stage en développement logiciel pour mettre en pratique mes connaissances et acquérir une expérience professionnelle concrète dans un environnement stimulant.',
  },
];

/* ------------------------------------------------------------------ */
/*  Technical skills                                                   */
/* ------------------------------------------------------------------ */

export const technicalSkills: SkillCategory[] = [
  {
    icon: 'code',
    category: 'Langages de Programmation',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'SQL'],
  },
  {
    icon: 'globe',
    category: 'Développement Web',
    skills: ['HTML5', 'CSS3', 'React', 'Astro', 'Node.js', 'Express'],
  },
  {
    icon: 'database',
    category: 'Bases de Données',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: 'wrench',
    category: 'Outils & DevOps',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Docker'],
  },
];

/* ------------------------------------------------------------------ */
/*  Soft skills (optional — set to [] to hide section)                 */
/* ------------------------------------------------------------------ */

export const softSkills: SoftSkill[] = [
  { icon: 'users', name: 'Travail d\'équipe', description: 'Collaboration efficace dans des projets académiques et personnels.' },
  { icon: 'lightbulb', name: 'Résolution de problèmes', description: 'Analyse méthodique et créative pour surmonter les défis techniques.' },
  { icon: 'clock', name: 'Gestion du temps', description: 'Organisation rigoureuse pour concilier études, projets et apprentissage.' },
  { icon: 'message-circle', name: 'Communication', description: 'Capacité à expliquer des concepts techniques de manière claire.' },
];

/* ------------------------------------------------------------------ */
/*  Education                                                          */
/* ------------------------------------------------------------------ */

export const education: Education[] = [
  {
    period: '2023 — Présent',
    degree: 'Cycle Ingénieur en Informatique',
    field: 'Génie Logiciel & Systèmes d\'Information',
    institution: 'ESISA — École Supérieure d\'Ingénierie en Sciences Appliquées',
    institutionUrl: 'https://esisa.ac.ma',
    description: 'Formation d\'ingénieur couvrant le développement logiciel, les bases de données, les réseaux, l\'intelligence artificielle et la gestion de projets IT.',
  },
  {
    period: '2021 — 2023',
    degree: 'Baccalauréat',
    field: 'Sciences Mathématiques',
    institution: 'Lycée, Fès',
    description: 'Obtention du baccalauréat en sciences mathématiques avec mention.',
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
    title: 'Portfolio Personnel',
    description: 'Site portfolio moderne développé avec Astro et déployé sur Vercel. Design sombre professionnel avec animations et responsive design.',
    tags: ['Astro', 'TypeScript', 'CSS3', 'Vercel'],
    url: 'https://portfolio-anas-boulif.vercel.app',
    github: 'https://github.com/Anas404tgg/portfolio',
  },
  {
    title: 'Application de Gestion de Tâches',
    description: 'Application web full-stack pour la gestion de tâches avec authentification, CRUD complet et interface utilisateur intuitive.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Anas404tgg',
  },
  {
    title: 'Système de Gestion de Bibliothèque',
    description: 'Application de gestion de bibliothèque avec système de prêt, catalogue de livres et gestion des adhérents.',
    tags: ['Java', 'MySQL', 'JDBC', 'Swing'],
  },
  {
    title: 'Site E-commerce',
    description: 'Plateforme e-commerce avec panier d\'achats, gestion de produits et système de paiement simulé.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    title: 'Jeu Snake en Python',
    description: 'Implémentation classique du jeu Snake avec interface graphique, score, niveaux de difficulté et mode pause.',
    tags: ['Python', 'Pygame', 'POO'],
  },
  {
    title: 'Dashboard Météo',
    description: 'Application web affichant les prévisions météo en temps réel à partir d\'une API publique, avec géolocalisation.',
    tags: ['JavaScript', 'API REST', 'HTML5', 'CSS3'],
  },
];

/* ------------------------------------------------------------------ */
/*  Social links                                                       */
/* ------------------------------------------------------------------ */

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/Anas404tgg', icon: 'github' },
  { label: 'Email', url: 'mailto:a.boulif@esisa.ac.ma', icon: 'mail' },
];

/* ------------------------------------------------------------------ */
/*  Dynamic navigation — auto-generated from active sections           */
/* ------------------------------------------------------------------ */

function buildNavItems(): NavItem[] {
  const items: NavItem[] = [
    { label: 'Accueil', href: '#hero', icon: 'home' },
    { label: 'À propos', href: '#about', icon: 'user' },
    { label: 'Compétences', href: '#skills', icon: 'cpu' },
    { label: 'Formation', href: '#education', icon: 'graduation-cap' },
  ];

  if (experiences.length > 0) {
    items.push({ label: 'Expérience', href: '#experience', icon: 'briefcase' });
  }

  if (publications.length > 0) {
    items.push({ label: 'Publications', href: '#publications', icon: 'book-open' });
  }

  if (certifications.length > 0) {
    items.push({ label: 'Certifications', href: '#certifications', icon: 'award' });
  }

  items.push({ label: 'Projets', href: '#projects', icon: 'folder-open' });
  items.push({ label: 'Contact', href: '#contact', icon: 'send' });

  return items;
}

export const navItems: NavItem[] = buildNavItems();
