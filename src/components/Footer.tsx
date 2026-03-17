import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Footer = () => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer
      className="py-16 border-t border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-300 bg-[#f8f9fb] dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-auto rounded-xl flex items-center justify-center overflow-hidden bg-white border border-gray-200 shadow-sm p-1.5">
                <img
                  src="/logo.svg"
                  alt="Gajanand Enterprise Logo"
                  className="h-full w-auto block"
                  style={{ display: 'block', lineHeight: 0 }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Gajanand Enterprise</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Quality is Priority</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Specializing in premium curtain track system components
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-700 dark:text-gray-300 hover:text-gold transition-all duration-300 inline-block hover:translate-x-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Product Categories</h4>
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-base text-gray-700 dark:text-gray-300 hover:text-gold transition-all duration-300 inline-block hover:translate-x-1"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Contact</h4>
            <div className="text-base space-y-3 text-gray-700">
              <a
                href="mailto:anita.mrugesh@gmail.com"
                className="flex items-center font-semibold text-gold hover:text-gold/80 transition-colors"
              >
                <svg className="w-4 h-4 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                anita.mrugesh@gmail.com
              </a>
              <a
                href="tel:9825048955"
                className="flex items-center font-semibold text-gold hover:text-gold/80 transition-colors"
              >
                <svg className="w-4 h-4 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                9825048955 / 9925048955
              </a>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                B-701 Ocean Colina, Bh. Arjun Greens,<br />
                Nr. Vardan Tower, Pragatinagar, Naranpura,<br />
                Ahmedabad-380013
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gajanand Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
