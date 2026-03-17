import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';

function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) => {
    const title = p.title.toLowerCase();
    const desc = (p.description || '').toLowerCase();
    const features = (p.features || []).join(' ').toLowerCase();
    const applications = (p.applications || []).join(' ').toLowerCase();
    return title.includes(q) || desc.includes(q) || features.includes(q) || applications.includes(q);
  });
}

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const productsMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        productsMenuRef.current &&
        !productsMenuRef.current.contains(e.target as Node) &&
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setProductsMenuOpen(false);
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = useMemo(
    () => (searchQuery.trim() ? searchProducts(searchQuery).slice(0, 8) : []),
    [searchQuery]
  );
  const showSearchResults = searchFocused && (searchQuery.trim() !== '' || searchResults.length > 0);

  const isActive = (path: string) => location.pathname === path;
  const isProductsActive = location.pathname.startsWith('/products');
  const isHomePage = location.pathname === '/';
  const useLightHeaderText = isHomePage && !scrolled && !isMobileMenuOpen;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleSearchSelect = (productId: string) => {
    navigate(`/products/${productId}`);
    setSearchQuery('');
    setSearchFocused(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || isMobileMenuOpen
          ? 'glass dark:glass-dark shadow-xl border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="h-10 md:h-11 rounded-xl flex items-center justify-center shadow-lg overflow-hidden bg-white dark:bg-gray-800 p-1.5"
            >
              <img
                src="/logo.svg"
                alt="Gajanand Enterprise Logo"
                className="h-full w-auto block"
                style={{ display: 'block', lineHeight: 0 }}
              />
            </motion.div>
            <div>
              <h1
                className={`text-lg font-bold group-hover:text-gold transition-colors ${
                  useLightHeaderText ? 'text-white' : 'text-navy dark:text-white'
                }`}
              >
                Gajanand Enterprise
              </h1>
              <p className={`text-xs font-medium ${useLightHeaderText ? 'text-gold' : 'text-gray-600 dark:text-gray-400'}`}>
                Quality is Priority
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2 rounded-xl transition-all duration-300"
              >
                <motion.span
                  className={`block text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-gold'
                      : useLightHeaderText
                        ? 'text-white hover:text-gold'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gold'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.span>
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold/10 rounded-xl border border-gold/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}

            <div
              ref={productsMenuRef}
              className="relative"
              onMouseEnter={() => setProductsMenuOpen(true)}
              onMouseLeave={() => setProductsMenuOpen(false)}
            >
              <Link
                to="/products"
                className="relative flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all duration-300"
              >
                {isProductsActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold/10 rounded-xl border border-gold/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span
                  className={`relative z-10 text-sm font-medium ${
                    isProductsActive
                      ? 'text-gold'
                      : useLightHeaderText
                        ? 'text-white hover:text-gold'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gold'
                  }`}
                >
                  Products
                </span>
                <svg
                  className={`relative z-10 w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                    useLightHeaderText ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                  } ${productsMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <AnimatePresence>
                {productsMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-[110]"
                  >
                    <div className="w-[min(380px,calc(100vw-2rem))] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-600 overflow-hidden">
                      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 whitespace-nowrap">
                          All product types
                        </span>
                      </div>
                      <div className="p-3 max-h-[65vh] overflow-y-auto">
                        <ul className="grid grid-cols-1 gap-0.5 list-none">
                          {products.map((p) => (
                            <li key={p.id}>
                              <Link
                                to={`/products/${p.id}`}
                                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-navy dark:text-white hover:bg-gold/10 hover:text-gold transition-colors text-left line-clamp-2"
                              >
                                {p.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center space-x-3">
            <div ref={searchRef} className="hidden md:block relative w-52 lg:w-64">
              <div
                className={`flex items-center rounded-xl border transition-colors ${
                  useLightHeaderText && !scrolled && !isMobileMenuOpen
                    ? 'bg-white/10 border-white/30'
                    : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-600'
                }`}
              >
                <svg
                  className={`w-5 h-5 ml-3 flex-shrink-0 ${
                    useLightHeaderText && !scrolled && !isMobileMenuOpen
                      ? 'text-white/80'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 180)}
                  className={`flex-1 py-2.5 pr-3 bg-transparent border-0 text-sm outline-none ${
                    useLightHeaderText && !scrolled && !isMobileMenuOpen
                      ? 'text-white placeholder:text-white/70'
                      : 'text-navy dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500'
                  }`}
                  aria-label="Search products"
                />
              </div>

              <AnimatePresence>
                {showSearchResults && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 max-h-80 overflow-y-auto z-50"
                  >
                    {searchResults.length === 0 ? (
                      <p className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">No products match your search.</p>
                    ) : (
                      searchResults.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handleSearchSelect(p.id)}
                          className="w-full text-left px-4 py-2.5 text-sm text-navy dark:text-white hover:bg-gold/10 transition-colors"
                        >
                          <span className="font-medium">{p.title}</span>
                        </button>
                      ))
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl ${
                useLightHeaderText ? 'bg-white/10 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <motion.span
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                  className="block h-0.5 w-6 bg-current"
                />
                <motion.span animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} className="block h-0.5 w-6 bg-current" />
                <motion.span
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                  className="block h-0.5 w-6 bg-current"
                />
              </div>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-200 dark:border-gray-700 mt-4"
            >
              <div className="py-4 space-y-2">
                <div className="px-4 pb-2">
                  <div className="flex items-center rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
                    <svg className="w-5 h-5 ml-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="search"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      className="flex-1 py-3 pr-3 bg-transparent border-0 text-sm text-navy dark:text-white outline-none placeholder:text-gray-400"
                      aria-label="Search products"
                    />
                  </div>
                  <AnimatePresence>
                    {searchQuery.trim() && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 max-h-48 overflow-y-auto"
                      >
                        {searchProducts(searchQuery).slice(0, 6).length === 0 ? (
                          <p className="px-4 py-3 text-sm text-gray-500">No products match.</p>
                        ) : (
                          searchProducts(searchQuery).slice(0, 6).map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => handleSearchSelect(p.id)}
                              className="w-full text-left px-4 py-3 text-sm font-medium text-navy dark:text-white hover:bg-gold/10"
                            >
                              {p.title}
                            </button>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition-all ${
                        isActive(item.path)
                          ? 'text-gold bg-gold/10 border-l-4 border-gold font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen((o) => !o)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                      isProductsActive
                        ? 'text-gold bg-gold/10 border-l-4 border-gold font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span>Products</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 border-l-2 border-gray-200 dark:border-gray-700 ml-4 my-1"
                      >
                        {products.map((p) => (
                          <Link
                            key={p.id}
                            to={`/products/${p.id}`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileProductsOpen(false);
                            }}
                            className="block py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-gold"
                          >
                            {p.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
