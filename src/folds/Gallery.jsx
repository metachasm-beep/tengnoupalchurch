import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CaretLeft, CaretRight, X } from '@phosphor-icons/react';

export default function Gallery({ galleryImages }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 6);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(galleryImages.length / itemsPerPage);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentImages = galleryImages.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="gallery" className="h-[100dvh] w-full flex flex-col items-center justify-center bg-forest-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/assets/bg_gallery.png')` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-4 md:mb-8 text-center flex-shrink-0">
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-bone-50">Community & Construction</h2>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-2 md:px-6 relative w-full flex-1 flex flex-col items-center justify-center">
        {/* Navigation Arrows */}
        <button onClick={handlePrev} className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-forest-900/70 hover:bg-forest-900 text-bone-50 rounded-full backdrop-blur-md transition-colors shadow-lg">
          <CaretLeft size={24} weight="bold" />
        </button>
        <button onClick={handleNext} className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-forest-900/70 hover:bg-forest-900 text-bone-50 rounded-full backdrop-blur-md transition-colors shadow-lg">
          <CaretRight size={24} weight="bold" />
        </button>

        <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 px-12 md:px-24 content-center"
            >
              {currentImages.map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative group cursor-pointer overflow-hidden rounded-xl bg-forest-700 shadow-md aspect-[4/3]"
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.img} alt={`Gallery image ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/20 transition-colors duration-300" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 mt-4 md:mt-8 z-20">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i !== currentPage) {
                  setDirection(i > currentPage ? 1 : -1);
                  setCurrentPage(i);
                }
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${currentPage === i ? 'bg-amber-accent w-6' : 'bg-bone-200/50 hover:bg-bone-200'}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-900/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-12 md:right-12 text-bone-200 hover:text-amber-accent bg-forest-800/80 hover:bg-forest-700/80 p-3 rounded-full transition-colors cursor-pointer z-10"
            >
               <X size={24} weight="bold" />
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              src={selectedImage.img} 
              alt="Full screen" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
