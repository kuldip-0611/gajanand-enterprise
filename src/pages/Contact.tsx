import { useState } from 'react';
import { motion } from 'framer-motion';
import type { FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone.replace(/\D/g, ''));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Format email subject and body
    const subject = encodeURIComponent(`Contact Form Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello,\n\nYou have received a new contact form submission:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nThis message was sent from the Gajanand Enterprise website contact form.`
    );

    // Create Gmail compose URL (works in Chrome and opens Gmail)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=anita.mrugesh@gmail.com&su=${subject}&body=${body}`;
    
    // Also create mailto link as fallback
    const mailtoLink = `mailto:anita.mrugesh@gmail.com?subject=${subject}&body=${body}`;

    // Try to open Gmail first, fallback to mailto
    try {
      // Open Gmail in a new window/tab
      window.open(gmailUrl, '_blank');
      
      // Show success message and reset form
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      // Fallback to mailto if Gmail fails
      window.location.href = mailtoLink;
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'anita.mrugesh@gmail.com',
      href: 'mailto:anita.mrugesh@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '9825048955 / 9925048955',
      href: 'tel:9825048955',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Address',
      value: (
        <>
          B-701, Ocean Colina Flats, Nr. Vardan Tower,<br />
          B/h. Anjan Greens, Prahladnagar,<br />
          Ahmedabad-380013<br />
          <br />
          B-101 Sector-5, Nirmanagar,<br />
          Ahmedabad-382481
        </>
      ),
      href: null,
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Get in touch with us for inquiries about our products and services
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4 sm:mb-6">
                  Get in Touch
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  We'd love to hear from you. Reach out to us through any of the
                  following channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 gradient-gold rounded-2xl flex items-center justify-center text-navy shadow-lg">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-navy dark:text-white mb-2 text-base sm:text-lg">
                          {info.label}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-700 dark:text-gray-300 hover:text-gold transition-colors text-sm sm:text-base md:text-lg break-words overflow-wrap-anywhere"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg break-words">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8">
                Send us a Message
              </h2>

          

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900 border-2 border-red-400 dark:border-red-600 rounded-2xl"
                >
                  <p className="text-red-800 dark:text-red-200 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    There was an error. Please try again or contact us directly.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                  { id: 'phone', label: 'Phone', type: 'tel', placeholder: '10-digit phone number' },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-semibold text-navy dark:text-white mb-2"
                    >
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 ${
                        errors[field.id]
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:border-gold'
                      } bg-white dark:bg-gray-700 text-navy dark:text-white focus:outline-none focus:ring-4 focus:ring-gold/20`}
                      placeholder={field.placeholder}
                    />
                    {errors[field.id] && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-500"
                      >
                        {errors[field.id]}
                      </motion.p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy dark:text-white mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:border-gold'
                    } bg-white dark:bg-gray-700 text-navy dark:text-white focus:outline-none focus:ring-4 focus:ring-gold/20 resize-none`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-500"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
