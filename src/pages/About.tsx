import { motion } from 'framer-motion';

const About = () => {
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

  const specializations = [
    {
      title: 'Aluminium Curtain Tracks',
      description: 'High-quality imported aluminium track systems for smooth and durable operation',
    },
    {
      title: 'Blind Systems',
      description: 'Comprehensive blind system solutions for various interior applications',
    },
    {
      title: 'Motorized Tracks',
      description: 'Automated curtain track systems for modern smart homes and commercial spaces',
    },
    {
      title: 'Architectural Track Solutions',
      description: 'Custom solutions for straight, curved, and geometric installations',
    },
  ];

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
              About Gajanand Enterprise
            </h1>
            <p className="text-2xl md:text-3xl text-gold font-semibold">Quality is Priority</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Company History */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8">
              Our Journey
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Gajanand Enterprise has been active in the curtain track systems and window component industry since <span className="text-gold font-semibold">2000</span>, developing strong technical expertise and in-depth market knowledge. Since <span className="text-gold font-semibold">2011</span>, we have specialised in the import and supply of precision-engineered curtain track systems and related components, known for consistent quality and reliable performance.
              </p>
              <p>
                We cater to the requirements of interior professionals, installers, and project-based applications across residential and commercial spaces.
              </p>
            </div>
          </motion.section>

          {/* Specialization */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8">
              Our Specialization
            </h2>
            <div className="bg-white dark:bg-gray-800 border-l-4 border-gold rounded-r-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                We specialize in importing <span className="text-gold font-semibold">aluminium curtain tracks</span>, <span className="text-gold font-semibold">blind systems</span>, <span className="text-gold font-semibold">motorized tracks</span>, and <span className="text-gold font-semibold">architectural track solutions</span>, offering consistent quality and customized cut-size services.
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Our product range is designed to support <span className="text-gold font-semibold">straight, curved, and geometric installations</span> with smooth and durable operation.
              </p>
            </div>
          </motion.section>

          {/* Product Specialization Grid */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8">
              Product Range
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {specializations.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="gradient-navy text-white p-8 rounded-3xl shadow-xl"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gold">{item.title}</h3>
                  <p className="text-lg leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Reputation & Values */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gold/10 to-gold/5 dark:from-gold/20 dark:to-gold/10 rounded-3xl p-8 md:p-12 border-2 border-gold/30 shadow-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8">
              Our Reputation
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
              Over the years, Gajanand Enterprise has built a reputation as a <span className="text-gold font-semibold">dependable component supplier</span>, emphasizing:
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { title: 'Technical Suitability', icon: '⚙️' },
                { title: 'Long-term Performance', icon: '⏱️' },
                { title: 'Efficient Supply Support', icon: '📦' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-3xl">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-navy dark:text-white text-xl">{item.title}</h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Custom Services */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8">
              Custom Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex-shrink-0 w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <span className="text-navy font-bold text-2xl">✂️</span>
                </div>
                <h3 className="text-2xl font-semibold text-navy dark:text-white mb-3">
                  Custom Cut-Size Services
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  All systems are available in custom cut sizes, with standard stock lengths up to <span className="text-gold font-semibold">5.8 meters (≈19 feet)</span>.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex-shrink-0 w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <span className="text-navy font-bold text-2xl">🏗️</span>
                </div>
                <h3 className="text-2xl font-semibold text-navy dark:text-white mb-3">
                  Installation Support
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  We support <span className="text-gold font-semibold">straight, curved, and geometric installations</span> with technical guidance and reliable components.
                </p>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
