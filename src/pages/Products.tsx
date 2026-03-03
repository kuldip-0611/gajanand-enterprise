import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ImageModal from '../components/ImageModal';

const PRODUCTS_HERO_ROTATE_MS = 3500;
const productsHeroImages = Array.from(
  new Set(products.flatMap((p) => p.exampleImages ?? []))
);

const Products = () => {
  const [modalImage, setModalImage] = useState<{ src: string; caption: string } | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    if (productsHeroImages.length <= 1) return;
    const id = setInterval(
      () => setHeroIndex((i) => (i + 1) % productsHeroImages.length),
      PRODUCTS_HERO_ROTATE_MS
    );
    return () => clearInterval(id);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900 pt-20">
      <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {productsHeroImages.length > 0 ? (
            <AnimatePresence initial={false}>
              <motion.img
                key={productsHeroImages[heroIndex]}
                src={productsHeroImages[heroIndex]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                aria-hidden
              />
            </AnimatePresence>
          ) : null}
        </div>
        <div className="absolute inset-0 bg-navy/65" aria-hidden />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,77,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(201,162,77,0.1),transparent_50%)]" />
        </div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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

      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link to={`/products/${product.id}`}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-gold/30 transition-all duration-300 flex flex-col"
                >
                  {product.images[0] && (
                    <div
                      className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100 dark:bg-gray-700 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setModalImage({ src: product.images[0], caption: product.title });
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          e.stopPropagation();
                          setModalImage({ src: product.images[0], caption: product.title });
                        }
                      }}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-navy dark:text-white mb-3 line-clamp-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 flex-1 line-clamp-3 mb-6">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center text-gold font-semibold group-hover:translate-x-1 transition-transform">
                    View details
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ImageModal
        src={modalImage?.src ?? null}
        alt={modalImage?.caption}
        caption={modalImage?.caption}
        isOpen={modalImage !== null}
        onClose={() => setModalImage(null)}
      />
    </div>
  );
};

export default Products;
