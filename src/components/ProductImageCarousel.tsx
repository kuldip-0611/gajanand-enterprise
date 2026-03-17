import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useState } from 'react';
import ImageModal from './ImageModal';

interface ProductImageCarouselProps {
  images: string[];
  productTitle: string;
  variants?: Variants;
}

const ProductImageCarousel = ({ images, productTitle, variants }: ProductImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const [modalIndex, setModalIndex] = useState(0);

  return (
    <motion.div variants={variants} className="lg:col-span-2">
      <div className="relative group max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3] max-h-[500px] bg-gray-100 dark:bg-gray-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => {
                setModalIndex(currentIndex);
                setModalSrc(images[currentIndex]);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setModalIndex(currentIndex);
                  setModalSrc(images[currentIndex]);
                }
              }}
            >
              <img
                src={images[currentIndex]}
                alt={`${productTitle} - Image ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
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
          {images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium z-10">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
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
      <ImageModal
        src={modalSrc}
        alt={`${productTitle} - Image ${modalIndex + 1}`}
        caption={`${productTitle}`}
        isOpen={modalSrc !== null}
        onClose={() => setModalSrc(null)}
        images={images}
        currentIndex={modalIndex}
        onIndexChange={(i) => setModalIndex(i)}
      />
    </motion.div>
  );
};

export default ProductImageCarousel;
