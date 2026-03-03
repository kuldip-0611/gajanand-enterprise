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
    title: 'Square Track Systems',
    description: 'Square track systems are compact and efficient, designed for standard straight curtain installations. They provide reliable sliding performance and are ideal for everyday curtain applications.',
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
      '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Square Track Simple Assembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Square Track.jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/Square Track- Ripple/Square Track Ripple Assembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/Square Track- Ripple/Square Track.jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/Square Track-Mindi Runner/Square Track Mindi Assembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/Square Track-Mindi Runner/Square Track.jpeg',
    ],
    accessories: [
      { name: 'Acrylic Stick (Simple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Acrylic Stick.jpeg' },
      { name: 'Ceiling Bracket Brown (Simple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Ceiling Bracket Brown.jpeg' },
      { name: 'Ceiling Bracket Grey (Simple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Ceiling Bracket Grey.jpeg' },
      { name: 'Ceiling Bracket White (Simple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Ceiling Bracket White.jpeg' },
      { name: 'Double Wall Bracket', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Double Wall Bracket.jpeg' },
      { name: 'Fiber Stick (Simple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Fiber Stick.jpeg' },
      { name: 'Jointer (Simple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Jointer.jpeg' },
      { name: 'Row Runner', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Row Runner.jpeg' },
      { name: 'Runner', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Runner.jpeg' },
      { name: 'Single Wall Bracket', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Single Wall Bracket.jpeg' },
      { name: 'Square Track Endcap (Simple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Simple/Accesories/Square Track Endcap.jpeg' },
      { name: 'Acrylic Stick (Ripple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track- Ripple/Accesories/Acrylic Stick.jpeg' },
      { name: 'Ceiling Bracket Brown (Ripple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track- Ripple/Accesories/Ceiling Bracket Brown.jpeg' },
      { name: 'Ceiling Bracket Grey (Ripple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track- Ripple/Accesories/Ceiling Bracket Grey.jpeg' },
      { name: 'Ceiling Bracket White (Ripple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track- Ripple/Accesories/Ceiling Bracket White.jpeg' },
      { name: 'Fiber Stick (Ripple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track- Ripple/Accesories/Fiber Stick.jpeg' },
      { name: 'Hook', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track- Ripple/Accesories/Hook.jpeg' },
      { name: 'Ripplefold Carrier', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track- Ripple/Accesories/Ripplefold Carrier.jpeg' },
      { name: 'Square Track Endcap (Ripple)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track- Ripple/Accesories/Square Track Endcap.jpeg' },
      { name: 'Acrylic Stick (Mindi Runner)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Mindi Runner/Accesories/Acrylic Stick.jpeg' },
      { name: 'Ceiling Bracket Brown (Mindi Runner)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Mindi Runner/Accesories/Ceiling Bracket Brown.jpeg' },
      { name: 'Ceiling Bracket Grey (Mindi Runner)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Mindi Runner/Accesories/Ceiling Bracket Grey.jpeg' },
      { name: 'Ceiling Bracket White (Mindi Runner)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Mindi Runner/Accesories/Ceiling Bracket White.jpeg' },
      { name: 'Fiber Stick (Mindi Runner)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Mindi Runner/Accesories/Fiber Stick.jpeg' },
      { name: 'Jointer (Mindi Runner)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Mindi Runner/Accesories/Jointer.jpeg' },
      { name: 'Mindi Runner', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Mindi Runner/Accesories/Mindi Runner.jpg' },
      { name: 'Square Track Endcap (Mindi Runner)', image: '/Curtain Tracks/Curtain Tracks- Square/Square Track-Mindi Runner/Accesories/Square Track Endcap.jpeg' },
    ],
    exampleImages: [
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.26.57 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.26.58 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.26.58 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.26.59 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.26.59 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.27.08 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.27.08 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.27.08 PM (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.27.08 PM (3).jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.27.09 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Square/WhatsApp Image 2026-02-20 at 2.27.09 PM (1).jpeg',
    ],
  },
  {
    id: 'ds-type',
    title: 'Round Track Systems',
    description: 'Round track systems are designed for enhanced strength and stability. With a reinforced profile, these tracks are suitable for heavier curtains and wider spans while maintaining smooth operation.',
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
      '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Round Track Simple Assembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Round Track Simple Assembled (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Round Track.jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/Round Track- Ripple/Round Track Assembled Ripple.jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/Round Track- Ripple/Round Track.jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/Round Track Mindi Runner/Round Track Mindi Assembled.jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/Round Track Mindi Runner/Round Track.jpeg',
    ],
    accessories: [
      { name: 'Acrylic Stick', image: '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Accesories/Acrylic Stick.jpeg' },
      { name: 'Ceiling Bracket Brown', image: '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Accesories/Ceiling Bracket Brown.jpeg' },
      { name: 'Ceiling Bracket Grey', image: '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Accesories/Ceiling Bracket Grey.jpeg' },
      { name: 'Ceiling Bracket White', image: '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Accesories/Ceiling Bracket White.jpeg' },
      { name: 'Fiber Stick', image: '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Accesories/Fiber Stick.jpeg' },
      { name: 'Jointer', image: '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Accesories/Jointer.jpeg' },
      { name: 'Round Track Endcap', image: '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Accesories/Round Track Endcap.jpeg' },
      { name: 'Runner', image: '/Curtain Tracks/Curtain Tracks- Round/Round Track Simple/Accesories/Runner.jpeg' },
    ],
    exampleImages: [
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.26.44 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.26.45 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.26.45 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.26.45 PM (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.27.00 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.27.01 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.27.01 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.27.01 PM (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.27.02 PM.jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.27.02 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.27.03 PM (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.27.04 PM (1).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.27.04 PM (2).jpeg',
      '/Curtain Tracks/Curtain Tracks- Round/WhatsApp Image 2026-02-20 at 2.27.04 PM (3).jpeg',
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
      'Square Track Systems',
      'Round Track Systems',
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
