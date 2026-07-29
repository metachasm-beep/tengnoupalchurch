import React, { useState } from 'react';
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import { AnimatePresence, motion } from 'motion/react';
import { X } from '@phosphor-icons/react';

export default function Project({ renderCards }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Define bento grid spans for 4 items:
  // Item 0: Large square (2x2)
  // Item 1: Wide rectangle (2x1)
  // Item 2, 3: Small squares (1x1)
  const getBentoClasses = (i) => {
    switch (i) {
      case 0: return 'md:col-span-2 md:row-span-2 h-[400px] md:h-full';
      case 1: return 'md:col-span-2 h-[300px]';
      default: return 'md:col-span-1 h-[300px]';
    }
  };

  return (
    <section id="project" className="min-h-[100dvh] w-full flex flex-col justify-center bg-forest-900 text-bone-50 relative py-20 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/assets/bg_project.png')` }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-accent to-transparent opacity-50 z-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl mb-10 md:mb-16 mt-8 md:mt-0">
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-4 md:mb-6">The New Church Project</h2>
          <p className="text-bone-100 text-base md:text-lg leading-relaxed">
            We are embarking on a journey to build a new sanctuary for the Tengnoupal Christian Church. 
            Here are the proposed 3D renderings and structural perspectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[auto]">
          {renderCards?.map((card, i) => (
            <div key={i} className={`${getBentoClasses(i)}`} onClick={() => setSelectedImage(card)}>
              <SpotlightCard className="w-full h-full bg-forest-800 border-forest-700 p-0 overflow-hidden cursor-pointer shadow-lg" spotlightColor="rgba(212, 128, 28, 0.15)">
                <div className="absolute inset-0 z-0">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />
                </div>
                <div className="h-full flex flex-col justify-end z-10 relative p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-medium text-bone-50 mb-2">{card.title}</h3>
                  <p className="text-sm text-bone-100 opacity-90">{card.desc}</p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-900/90 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-12 md:right-12 text-bone-200 hover:text-amber-accent bg-forest-800/80 hover:bg-forest-700/80 p-3 rounded-full transition-colors cursor-pointer"
            >
               <X size={24} weight="bold" />
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              src={selectedImage.img} 
              alt="Full screen render" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
