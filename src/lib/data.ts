import { Project, Product, Skill } from './types';

// Portfolio projects
export const projects: Project[] = [
  {
    id: 1,
    title: 'Aeuro Aviators',
    description: 'A professional aviation-focused platform featuring advanced digital infrastructure and clean design.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'React, Tailwind, Framer Motion',
    categories: ['Web Design', 'Digital Marketing'],
    tags: ['Aviation', 'Premium'],
    link: 'https://aeuroaviators.netlify.app'
  },
  {
    id: 2,
    title: 'Glam Gustoz',
    description: 'Official premium digital hub for the Glam Gustoz brand, featuring integrated e-commerce capabilities.',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'React, Node.js, Cloudflare',
    categories: ['Web Design', 'Digital Marketing'],
    tags: ['E-commerce', 'Brand'],
    link: 'https://glamgustoz.com'
  },
  {
    id: 3,
    title: 'Spendory Track',
    description: 'A high-performance financial tracking utility designed for structural efficiency and user precision.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'Full-stack Development, Analytics',
    categories: ['Web Design'],
    tags: ['FinTech', 'Tool'],
    link: 'https://spendorytrack.com'
  }
];

// Technical skills
export const technicalSkills: Skill[] = [
  { name: 'Web Design', percentage: 95 },
  { name: 'SEO', percentage: 90 },
  { name: 'WordPress', percentage: 95 },
  { name: 'WooCommerce', percentage: 90 },
  { name: 'Google Ads', percentage: 85 },
  { name: 'Google Analytics', percentage: 80 }
];

// Soft skills
export const softSkills = [
  { name: 'Active Listening', icon: 'fas fa-headphones' },
  { name: 'Drawing', icon: 'fas fa-pencil-alt' },
  { name: 'Communication', icon: 'fas fa-comments' },
  { name: 'Teamwork', icon: 'fas fa-users' },
  { name: 'Organization', icon: 'fas fa-tasks' },
  { name: 'Problem Solving', icon: 'fas fa-lightbulb' }
];

// Featured products
export const featuredProducts: Product[] = [
  {
    name: 'Abstract Art T-Shirt',
    store: 'Available on Redbubble',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Floral Phone Case',
    store: 'Available on TeePublic',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Geometric Mug',
    store: 'Available on Redbubble',
    price: '$15.99',
    image: 'https://images.unsplash.com/photo-1584269655525-c2738f0db0b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Minimalist Tote Bag',
    store: 'Available on TeePublic',
    price: '$22.99',
    image: 'https://images.unsplash.com/photo-1618436537328-f8cc89de813b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];
