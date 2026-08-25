export interface ExperienceEntry {
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
  current: boolean;
  bullets: string[];
  tech: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectSection {
  heading: string;
  icon?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  dateLabel?: string;
  summary: string;
  description: string[];
  sections?: ProjectSection[];
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  tech: string[];
  cover?: string;
  gallery?: string[];
  video?: string;
  links: ProjectLink[];
  fromCv: boolean;
  placeholder?: boolean;
}

export interface Achievement {
  title: string;
  event: string;
  result: string;
  year: string;
  icon: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  start: string;
  end: string;
  honors: string[];
}
