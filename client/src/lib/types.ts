export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string;
  categories: FilterCategory[];
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Product {
  name: string;
  store: string;
  price: string;
  image: string;
}

export type FilterCategory = 'All' | 'Web Design' | 'Digital Marketing' | 'Content Creation';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
