
export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  color: string;
  path: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export enum SectionType {
  Hero = 'hero',
  Workshops = 'workshops',
  DJ = 'dj',
  Dances = 'dances',
  Gallery = 'gallery',
  Coaching = 'coaching',
  About = 'about',
  Contact = 'contact'
}
