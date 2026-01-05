import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Product Image Carousel Component
const ProductImageCarousel = ({ images, productTitle, variants }: { images: string[]; productTitle: string; variants: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div
      variants={variants}
      className="lg:col-span-2"
    >
      <h3 className="text-2xl font-bold text-navy dark:text-white mb-6 flex items-center">
        <span className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center mr-4 text-navy font-bold">
          📸
        </span>
        Product Images
      </h3>
      <div className="relative group max-w-3xl mx-auto">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3] max-h-[500px] bg-gray-100 dark:bg-gray-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <img
                src={images[currentIndex]}
                alt={`${productTitle} - Image ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-navy dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-navy dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium z-10">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gold w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Products = () => {
  const products = [
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
        'Cord operation',
      ],
      images: [
        '/Roman Blinds/Regular Roman Blinds/Regular Section.jpg',
        '/Roman Blinds/Regular Roman Blinds/Regular Section (2).jpg',
        '/Roman Blinds/Regular Roman Blinds/Regular Section (3).jpg',
        '/Roman Blinds/Regular Roman Blinds/Mechanism Set.jpg',
        '/Roman Blinds/Regular Roman Blinds/Drum.jpg',
        '/Roman Blinds/Regular Roman Blinds/Chain.jpg',
        '/Roman Blinds/Regular Roman Blinds/Hex Rod 7MM.jpg',
        '/Roman Blinds/Regular Roman Blinds/White Coated Bracket.jpg',
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
        'Cord operation',
      ],
      images: [
        '/Roman Blinds/Tubeless Roman Blinds/Tubeless Section.jpg',
        '/Roman Blinds/Tubeless Roman Blinds/Tubeless Section (2).jpg',
        '/Roman Blinds/Tubeless Roman Blinds/Tubeless Section (3).jpg',
        '/Roman Blinds/Tubeless Roman Blinds/Tubeless Section (4).jpg',
        '/Roman Blinds/Tubeless Roman Blinds/Mechanism Set.jpg',
        '/Roman Blinds/Tubeless Roman Blinds/Device + Cone.jpg',
        '/Roman Blinds/Tubeless Roman Blinds/Device + Cone (2).jpg',
        '/Roman Blinds/Tubeless Roman Blinds/Square Rod 5mm .jpg',
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
        '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Simple/Japanese Track White.jpg',
        '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Simple/Japanese Track White (2).jpg',
        '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Simple/Japanese Track Brown.jpg',
        '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Simple/Japanese Track Wooden.jpg',
        '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Ripple/Japanese Track White.jpg',
        '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Ripple/Japanese Track White (2).jpg',
        '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Ripple/Japanese Track Brown.jpg',
        '/Curtain Tracks/Curtain Tracks- Japanese Track/Japanese Ripple/Japanese Track Wooden.jpg',
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
        '/Motors/AoK - AM 68 3 wire Tuya technology/AOK MOTOR AM68 3 Wire .jpeg',
        '/Motors/AoK - AM 68 3 wire Tuya technology/AOK MOTOR AM68 3 Wire.jpeg',
        '/Motors/AoK - AM 68 3 wire Tuya technology/AOK MOTOR AM68 3 Wire(2).jpeg',
        '/Motors/AoK AM 68 5 wire WiFi Technology/AM 68 5 Wire AOK.jpeg',
        '/Motors/AoK AM 68 5 wire WiFi Technology/AM 68 5 Wire AOK (2).jpeg',
        '/Motors/AoK AM 68 5 wire WiFi Technology/AM 68 5 Wire AOK (3).jpeg',
        '/Motors/Novo Motors/NOVO Motors (2).jpeg',
        '/Motors/Novo Motors/NOVO Motors (3).jpeg',
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
        '/bending-track-1.jpeg',
        '/bending-track-2.jpeg',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Header */}
      <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 gradient-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,77,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(201,162,77,0.1),transparent_50%)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Curtain Track & Blind Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Gajanand Enterprise supplies high-quality curtain track and blind system components, engineered for smooth operation, durability, and architectural flexibility. Our imported aluminium track systems are suitable for residential, commercial, and hospitality projects.
            </p>
            <p className="text-lg md:text-xl text-gold mt-4 font-semibold">
              All systems are available in custom cut sizes, with standard stock lengths up to 5.8 meters (≈19 feet).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-32">
          {products.map((product) => (
            <motion.section
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="scroll-mt-20"
            >
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">
                  {product.title}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Applications */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-2xl font-bold text-navy dark:text-white mb-6 flex items-center">
                    <span className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center mr-4 text-navy font-bold">
                      📍
                    </span>
                    Applications
                  </h3>
                  <ul className="space-y-3">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="text-gold mr-3 text-xl mt-1">•</span>
                        <span className="text-lg">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Features */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-2xl font-bold text-navy dark:text-white mb-6 flex items-center">
                    <span className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center mr-4 text-navy font-bold">
                      ⭐
                    </span>
                    Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="text-gold mr-3 text-xl mt-1">•</span>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Image Carousel */}
                {product.images && product.images.length > 0 && (
                  <ProductImageCarousel
                    images={product.images}
                    productTitle={product.title}
                    variants={itemVariants}
                  />
                )}

                {/* Operation Options */}
                {product.operationOptions && product.operationOptions.length > 0 && (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-gradient-to-br from-gold/10 to-gold/5 dark:from-gold/20 dark:to-gold/10 rounded-3xl p-8 shadow-xl border-2 border-gold/30 lg:col-span-2"
                  >
                    <h3 className="text-2xl font-bold text-navy dark:text-white mb-6 flex items-center">
                      <span className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center mr-4 text-navy font-bold">
                        ⚙️
                      </span>
                      Operation Options
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.operationOptions.map((option, i) => (
                        <div
                          key={i}
                          className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gold/20"
                        >
                          <span className="text-lg text-gray-700 dark:text-gray-300">{option}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Bending Available (for Bendable tracks) */}
                {product.bendingAvailable && product.bendingAvailable.length > 0 && (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-gradient-to-br from-gold/10 to-gold/5 dark:from-gold/20 dark:to-gold/10 rounded-3xl p-8 shadow-xl border-2 border-gold/30 lg:col-span-2"
                  >
                    <h3 className="text-2xl font-bold text-navy dark:text-white mb-6 flex items-center">
                      <span className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center mr-4 text-navy font-bold">
                        🔄
                      </span>
                      Bending Available In
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {product.bendingAvailable.map((type, i) => (
                        <div
                          key={i}
                          className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gold/20 text-center"
                        >
                          <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">{type}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Track Length Info (for Bendable tracks) */}
              {product.id === 'bendable' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 bg-gradient-to-br from-gold/10 to-gold/5 dark:from-gold/20 dark:to-gold/10 rounded-3xl p-8 shadow-xl border-2 border-gold/30"
                >
                  <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">Track Length:</h3>
                  <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span>Supplied in standard lengths up to <strong className="text-navy dark:text-white">5.8 meters (≈19 feet)</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-navy dark:text-white">Cut-to-size service available</strong></span>
                    </li>
                  </ul>
                </motion.div>
              )}
            </motion.section>
          ))}
        </div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-3xl font-bold text-navy dark:text-white mb-8 text-center">
            Quick Navigation
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {products.map((product) => (
              <motion.a
                key={product.id}
                href={`#${product.id}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-2xl gradient-gold text-navy font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {product.title.split(' ').slice(0, 2).join(' ')}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
