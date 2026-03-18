import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import ProductImageCarousel from '../components/ProductImageCarousel';
import ImageModal from '../components/ImageModal';

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

const JAPANESE_BROWN_IMAGE =
  '/Curtain Tracks/Curtain Tracks- Japanese Track/jAPANESE BROWN.jpeg';
const JAPANESE_WOOD_IMAGE =
  '/Curtain Tracks/Curtain Tracks- Japanese Track/jAPANESE WODDEN.jpeg';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const [modalImage, setModalImage] = useState<{ src: string; caption?: string } | null>(null);

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
                {product.id !== 'japanese' && product.operationOptionImages && product.operationOptionImages.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                    {product.operationOptionImages.map((opt) => (
                      <motion.div
                        key={opt.image}
                        variants={itemVariants}
                        whileHover={{ y: -2 }}
                        className="rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setModalImage({ src: opt.image, caption: opt.name })}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setModalImage({ src: opt.image, caption: opt.name })}
                      >
                        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900/30 border-b border-gray-100 dark:border-gray-700">
                          <p className="text-sm font-semibold text-navy dark:text-white text-center leading-snug line-clamp-2">
                            {opt.name}
                          </p>
                        </div>
                        <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                          <img
                            src={opt.image}
                            alt={opt.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                {(product.id === 'japanese' || !product.operationOptionImages || product.operationOptionImages.length === 0) && (
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
                )}
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
                      className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setModalImage({ src: acc.image, caption: acc.name })}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setModalImage({ src: acc.image, caption: acc.name })}
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
                  Our Installations
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {product.exampleImages.map((src) => (
                    <motion.div
                      key={src}
                      variants={itemVariants}
                      whileHover={{ y: -2 }}
                      className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setModalImage({ src })}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setModalImage({ src })}
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

          {['japanese'].includes(product.id) && (
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">Available in:</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setModalImage({
                      src: JAPANESE_BROWN_IMAGE,
                      caption: 'Japanese track — Brown',
                    })
                  }
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 border border-transparent hover:border-gold/40 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span
                    className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 shadow-inner shrink-0"
                    style={{ backgroundColor: '#5c4033' }}
                    aria-hidden
                  />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Brown</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setModalImage({
                      src: JAPANESE_WOOD_IMAGE,
                      caption: 'Japanese track — Wood color',
                    })
                  }
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 border border-transparent hover:border-gold/40 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span
                    className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 shadow-inner shrink-0"
                    style={{ backgroundColor: '#c4a35a' }}
                    aria-hidden
                  />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Wood Color</span>
                </button>
              </div>
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
              Get Quote
            </Link>
            <a
              href={`https://wa.me/919825048955?text=${encodeURIComponent(`Hi, I have an inquiry about ${product.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-[#25D366] text-white font-semibold shadow-lg hover:bg-[#20bd5a] transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Inquiry
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-2xl border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <ImageModal
        src={modalImage?.src ?? null}
        caption={modalImage?.caption}
        isOpen={modalImage !== null}
        onClose={() => setModalImage(null)}
      />
    </div>
  );
};

export default ProductDetail;
