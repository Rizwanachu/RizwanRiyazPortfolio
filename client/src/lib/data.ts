import { Project, Product, Skill } from './types';

// Portfolio projects
export const projects: Project[] = [
  {
    id: 1,
    title: 'Fashion E-commerce Website',
    description: 'A responsive e-commerce website built with WordPress and WooCommerce.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'WordPress, WooCommerce',
    categories: ['Web Design'],
    tags: ['WordPress', 'E-commerce'],
    link: '#'
  },
  {
    id: 2,
    title: 'Product Launch Campaign',
    description: 'A comprehensive digital marketing strategy for a new product launch.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'Social Media, Content Strategy',
    categories: ['Digital Marketing'],
    tags: ['Marketing', 'Social Media'],
    link: '#'
  },
  {
    id: 3,
    title: 'Lifestyle Blog Website',
    description: 'A minimalist blog design with focus on content readability.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'WordPress, Content Creation',
    categories: ['Web Design', 'Content Creation'],
    tags: ['WordPress', 'Content'],
    link: '#'
  }
];

// Technical skills
export const technicalSkills: Skill[] = [
  { name: 'WordPress', percentage: 95 },
  { name: 'Microsoft Word', percentage: 90 },
  { name: 'Microsoft Excel', percentage: 85 },
  { name: 'Python', percentage: 75 },
  { name: 'Digital Marketing', percentage: 80 }
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
