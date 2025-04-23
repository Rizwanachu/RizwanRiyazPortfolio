import { Project, Product, Skill } from './types';

// Portfolio projects
export const projects: Project[] = [
  {
    id: 1,
    title: 'Elmo Blog Website',
    description: 'A blog website built using AI with clean design and content organization.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'AI Website Builder, Hocoos',
    categories: ['Web Design', 'Content Creation'],
    tags: ['Blog', 'AI'],
    link: 'https://elmo9671.hocoos.com/'
  },
  {
    id: 2,
    title: 'Eleanora E-commerce Store',
    description: 'An e-commerce platform built with AI featuring product listings and checkout functionality.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'AI Website Builder, Hocoos',
    categories: ['Web Design'],
    tags: ['E-commerce', 'AI'],
    link: 'https://eleanora4431.hocoos.com/'
  },
  {
    id: 3,
    title: 'Glam Gustoz Official Store',
    description: 'A custom e-commerce store built using Replit featuring product collections.',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'HTML, CSS, JavaScript, Replit',
    categories: ['Web Design', 'Digital Marketing'],
    tags: ['E-commerce', 'Replit'],
    link: 'https://glamgustozofficial.netlify.app/'
  },
  {
    id: 4,
    title: 'Glam Gustoz Store',
    description: 'An online shop with custom design and product listings for digital products.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'HTML, CSS, JavaScript, Replit',
    categories: ['Web Design', 'Digital Marketing'],
    tags: ['E-commerce', 'Replit'],
    link: 'https://glamgustoz.netlify.app/'
  },
  {
    id: 5,
    title: 'Triangle House',
    description: 'An e-commerce store built with Ecwid featuring product collections and secure checkout.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    technologies: 'Ecwid, E-commerce Tools',
    categories: ['Web Design', 'Digital Marketing'],
    tags: ['E-commerce', 'Ecwid'],
    link: 'https://trianglehouse.company.site/'
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
