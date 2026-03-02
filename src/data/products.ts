export interface ProductAccessory {
  name: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  applications: string[];
  features: string[];
  operationOptions?: string[];
  bendingAvailable?: string[];
  images: string[];
  accessories?: ProductAccessory[];
  exampleImages?: string[];
}

export const products: Product[] = [
  {
    id: 'regular-roman-blind',
    title: 'Regular Roman Blind Systems',
    description: 'Regular Roman blind systems are designed to deliver structured folds and controlled fabric movement. The track profiles ensure smooth lifting and stable operation, making them ideal for elegant interior spaces.',
    applications: [
      'Residential interiors',
      'Hospitality projects',
      'Offices and boutique spaces',
    ],
    features: [
      'Smooth and balanced operation',
      'High-grade aluminium profile',
      'Clean and minimal design',
      'Traditional drum mechanism',
    ],
    operationOptions: [
      'Chain operation',
    ],
    images: [
      '/Roman Blinds/Regular Roman Blinds/Regular Roman Section.jpeg',
      '/Roman Blinds/Regular Roman Blinds/7mm Hex Rod.jpeg',
      '/Roman Blinds/Regular Roman Blinds/Accesories/Chain.jpeg',
      '/Roman Blinds/Regular Roman Blinds/Accesories/Components for regular roman.jpeg',
      '/Roman Blinds/Regular Roman Blinds/Accesories/Polyster Cord 1.0mm (2).jpg',
    ],
    accessories: [
      { name: 'Chain', image: '/Roman Blinds/Regular Roman Blinds/Accesories/Chain.jpeg' },
      { name: 'Components for regular roman', image: '/Roman Blinds/Regular Roman Blinds/Accesories/Components for regular roman.jpeg' },
      { name: 'Polyster Cord 1.0mm', image: '/Roman Blinds/Regular Roman Blinds/Accesories/Polyster Cord 1.0mm (2).jpg' },
    ],
    exampleImages: [
      '/Roman Blinds/WhatsApp Image 2026-02-20 at 2.26.44 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-20 at 2.27.03 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.27 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.28 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.28 PM (1).jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.29 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.29 PM (1).jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.30 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.30 PM (1).jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-25 at 8.12.09 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-25 at 8.12.09 PM (1).jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-25 at 8.12.10 PM.jpeg',
    ],
  },
  {
    id: 'tubeless-roman-blind',
    title: 'Tubeless Roman Blind Systems',
    description: 'Tubeless Roman blind systems offer a modern alternative with a streamlined design. These systems provide the same elegant structured folds without the traditional drum mechanism, offering a cleaner aesthetic.',
    applications: [
      'Residential interiors',
      'Hospitality projects',
      'Offices and boutique spaces',
      'Modern minimalist designs',
    ],
    features: [
      'Smooth and balanced operation',
      'High-grade aluminium profile',
      'Clean and minimal design',
      'Device and cone mechanism',
    ],
    operationOptions: [
      'Chain operation',
    ],
    images: [
      '/Roman Blinds/Tubeless Roman Blinds/Tubeless Roman Section.jpeg',
      '/Roman Blinds/Tubeless Roman Blinds/Square Rod 5mm .jpg',
      '/Roman Blinds/Tubeless Roman Blinds/Accesories/Mechanism Set.jpeg',
      '/Roman Blinds/Tubeless Roman Blinds/Accesories/Tubeless Components.jpeg',
      '/Roman Blinds/Tubeless Roman Blinds/Accesories/Chain.jpeg',
      '/Roman Blinds/Tubeless Roman Blinds/Accesories/Polyster Cord 1.2mm (2).jpg',
    ],
    accessories: [
      { name: 'Chain', image: '/Roman Blinds/Tubeless Roman Blinds/Accesories/Chain.jpeg' },
      { name: 'Mechanism Set', image: '/Roman Blinds/Tubeless Roman Blinds/Accesories/Mechanism Set.jpeg' },
      { name: 'Polyster Cord 1.2mm', image: '/Roman Blinds/Tubeless Roman Blinds/Accesories/Polyster Cord 1.2mm (2).jpg' },
      { name: 'Tubeless Components', image: '/Roman Blinds/Tubeless Roman Blinds/Accesories/Tubeless Components.jpeg' },
    ],
    exampleImages: [
      '/Roman Blinds/WhatsApp Image 2026-02-20 at 2.26.44 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.27 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.28 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.29 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-24 at 9.47.30 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-25 at 8.12.09 PM.jpeg',
      '/Roman Blinds/WhatsApp Image 2026-02-25 at 8.12.10 PM.jpeg',
    ],
  },
  {
    id: 'ks-type',
    title: 'KS Type Curtain Tracks',
    description: 'KS Type tracks are compact and efficient, designed for standard straight curtain installations. They provide reliable sliding performance and are ideal for everyday curtain applications.',
    applications: [
      'Residential Interiors',
      'Large windows',
      'Heavy fabric curtains',
      'Offices and light commercial spaces',
    ],
    features: [
      'Slim aluminium profile',
      'Smooth runner movement',
    ],
    operationOptions: [
      'Simple Row Runner',
      'Ripplefold Carrier System',
    ],
    images: [
      '/Curtain Tracks/Curtain Tracks- KS/KS-Simple/KS Simple Assembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- KS/KS - Ripple/KS Ripple Assembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- KS/KS - Ripple/KS Mindi Runner/KS MindiAssembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- KS/KS-Simple/KS Track.jpg',
      '/Curtain Tracks/Curtain Tracks- KS/KS-Simple/KS Track (2).jpg',
      '/Curtain Tracks/Curtain Tracks- KS/KS-Simple/KS Track (3).jpg',
      '/Curtain Tracks/Curtain Tracks- KS/KS - Ripple/KS Track.jpg',
      '/Curtain Tracks/Curtain Tracks- KS/KS - Ripple/KS Track (2).jpg',
    ],
  },
  {
    id: 'ds-type',
    title: 'DS Type Curtain Tracks',
    description: 'DS Type tracks are designed for enhanced strength and stability. With a reinforced profile, these tracks are suitable for heavier curtains and wider spans while maintaining smooth operation.',
    applications: [
      'Large windows',
      'Residential Interiors',
      'Hotels and commercial interiors',
      'Heavy fabric curtains',
    ],
    features: [
      'Slim aluminium profile',
      'Smooth and silent movement',
    ],
    operationOptions: [
      'Simple Row Runner',
      'Ripplefold Carrier System',
    ],
    images: [
      '/Curtain Tracks/Curtain Tracks- DS/DS Simple/DS Simple Assembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- DS/DS Simple/DS Simple Assembled (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- DS/DS - Ripple/DS Ripple Assembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- DS/DS - Ripple/DS Assembled Ripple.jpeg',
      '/Curtain Tracks/Curtain Tracks- DS/DS - Ripple/DS Mindi Runner/DS Mindi Assembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- DS/DS Simple/DS Track.jpg',
      '/Curtain Tracks/Curtain Tracks- DS/DS Simple/DS Track (2).jpg',
      '/Curtain Tracks/Curtain Tracks- DS/DS - Ripple/DS Track.jpg',
    ],
  },
  {
    id: 'japanese',
    title: 'Japanese Curtain Track Systems',
    description: 'Japanese curtain track systems are specially designed to offer a modern and minimal aesthetic while ensuring precise alignment and smooth movement.',
    applications: [
      'Large glass façades',
      'Room partitions',
      'Modern residential and commercial interiors',
    ],
    features: [
      'Clean and contemporary look',
      'Smooth operation',
    ],
    operationOptions: [
      'Simple Row Runner',
      'Ripplefold Carrier System',
    ],
    images: [
      '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Simple/Japanese Track White.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Ripple/Japanese Track White.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Ripple/WhatsApp Image 2026-01-02 at 9.18.27 AM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.26.56 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.05 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.07 PM.jpeg',
    ],
    accessories: [
      { name: 'Acrylic Stick', image: '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Simple/Accesories/Acrylic Stick.jpeg' },
      { name: 'Fiber Stick', image: '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Simple/Accesories/Fiber Stick.jpeg' },
      { name: 'Japanese Track Endcap', image: '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Simple/Accesories/Japanese Track Endcap(with Logo).jpeg' },
      { name: 'Japanese Ceiling Bracket', image: '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Simple/Accesories/Japnaese Ceiling Bracket.jpeg' },
      { name: 'Runner', image: '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Simple/Accesories/Runner.jpeg' },
      { name: 'Ripplefold Carrier', image: '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Ripple/Accesories/Ripplefold Carrier.jpeg' },
    ],
    exampleImages: [
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.26.56 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.26.56 PM (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.26.57 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.26.57 PM (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.00 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.04 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.05 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.05 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.05 PM (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.06 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.06 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.06 PM (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.07 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.07 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/WhatsApp Image 2026-02-20 at 2.27.07 PM (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Ripple/WhatsApp Image 2026-01-02 at 9.18.27 AM.jpeg',
    ],
  },
  {
    id: 'motorized',
    title: 'Motorized Curtain Tracks',
    description: 'Motorized curtain tracks provide effortless operation through automated control systems. These tracks are ideal for smart homes, luxury interiors, and commercial environments where convenience and precision are essential.',
    applications: [
      'Smart homes',
      'Hotels and conference rooms',
      'Premium residential projects',
    ],
    features: [
      'Smooth and silent motor operation',
      'Supports long and heavy curtains',
      'Compatible with automation systems',
      'Reliable performance for daily use',
    ],
    operationOptions: [],
    images: [
      '/Motorized Tracks/Motorized Track.jpeg',
    ],
    accessories: [
      { name: 'Black Belt', image: '/Motorized Tracks/Motorized Accessories/Black Belt.jpeg' },
      { name: 'Ceiling', image: '/Motorized Tracks/Motorized Accessories/Ceiling.jpeg' },
      { name: 'Grey Belt', image: '/Motorized Tracks/Motorized Accessories/Grey Belt.jpeg' },
      { name: 'Middle Master Carrier', image: '/Motorized Tracks/Motorized Accessories/Middle Master Carrier.jpeg' },
      { name: 'Ripple Runner', image: '/Motorized Tracks/Motorized Accessories/Ripple Runner.jpeg' },
      { name: 'Simple Runner', image: '/Motorized Tracks/Motorized Accessories/Simple Runner.jpeg' },
    ],
  },
  {
    id: 'bendable',
    title: 'Bendable & Geometric Curtain Tracks (Up to 360°)',
    description: 'Bendable curtain track systems are engineered to follow custom architectural layouts. These tracks can be shaped into precise curves and geometric angles, including continuous bends up to 360°, without affecting curtain movement.',
    applications: [
      'Bay windows',
      'Curved walls',
      'Circular and architectural layouts',
    ],
    features: [
      'Supports complex curves and angles',
      'Bendable up to 360°',
      'Smooth operation on curved paths',
      'Available for manual and motorized systems',
    ],
    operationOptions: [],
    bendingAvailable: [
      'Motorized Curtain Tracks',
      'KS Curtain Tracks',
      'Japanese Curtain Tracks',
    ],
    images: [
      '/Bending Tracks/Bending Track Image.jpeg',
      '/Bending Tracks/Bending Track Image1.jpeg',
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
