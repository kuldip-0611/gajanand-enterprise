import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import ProductImageCarousel from '../components/ProductImageCarousel';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900 pt-20">
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 gradient-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,77,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(201,162,77,0.1),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <Link
                to="/products"
                className="inline-flex items-center text-gold hover:text-white transition-colors mb-4 text-sm font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Products
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {product.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed"
          >
            {product.description}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">
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

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">
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

            {product.images.length > 0 && (
              <ProductImageCarousel
                images={product.images}
                productTitle={product.title}
                variants={itemVariants}
              />
            )}

            {product.operationOptions && product.operationOptions.length > 0 && (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gold/10 to-gold/5 dark:from-gold/20 dark:to-gold/10 rounded-3xl p-8 shadow-xl border-2 border-gold/30 lg:col-span-2"
              >
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">
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

            {product.bendingAvailable && product.bendingAvailable.length > 0 && (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gold/10 to-gold/5 dark:from-gold/20 dark:to-gold/10 rounded-3xl p-8 shadow-xl border-2 border-gold/30 lg:col-span-2"
              >
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">
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

          {product.accessories && product.accessories.length > 0 && (
            <motion.div variants={itemVariants} className="mt-12 lg:mt-16">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">
                  Accessories
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {product.accessories.map((acc) => (
                    <motion.div
                      key={acc.image}
                      variants={itemVariants}
                      whileHover={{ y: -2 }}
                      className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        <img
                          src={acc.image}
                          alt={acc.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="p-2.5 text-xs font-medium text-navy dark:text-white text-gray-700 dark:text-gray-300 text-center truncate">
                        {acc.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {product.exampleImages && product.exampleImages.length > 0 && (
            <motion.div variants={itemVariants} className="mt-12 lg:mt-16">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">
                  Reference Gallery
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
                  Product in use and real-world installations.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {product.exampleImages.map((src) => (
                    <motion.div
                      key={src}
                      variants={itemVariants}
                      whileHover={{ y: -2 }}
                      className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {product.id === 'bendable' && (
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gold/10 to-gold/5 dark:from-gold/20 dark:to-gold/10 rounded-3xl p-8 shadow-xl border-2 border-gold/30"
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

          <motion.div variants={itemVariants} className="pt-8 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="px-6 py-3 rounded-2xl gradient-gold text-navy font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Products
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-2xl border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
