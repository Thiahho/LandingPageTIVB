export type ProjectType = "ecommerce" | "saas" | "internal" | "inmo";

export type ProjectStatus = "production" | "demo" | "new";

export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  type: ProjectType;
  status: ProjectStatus;
  status2?: ProjectStatus;
  features: string[];
  stack: string[];
  demoUrl?: string;
  adminDemoUrl?: string;
  priority?: number; // Menor número = mayor prioridad (1, 2, 3...)
};

export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: "store" | "chart" | "dashboard" | "cog";
};

export type ProcessStep = {
  id: number;
  title: string;
  description: string;
};

export type Package = {
  id: string;
  title: string;
  target: string;
  includes: string[];
  cta: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  business: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};
