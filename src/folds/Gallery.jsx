import React, { useState } from 'react';
import Masonry from '../components/Masonry/Masonry';
import { AnimatePresence, motion } from 'motion/react';
import { X } from '@phosphor-icons/react';

export default function Gallery({ galleryImages }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="w-full flex flex-col justify-center bg-zinc-50 dark:bg-zinc-950 py-32">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-semibold tracking-tighter text-zinc-900 dark:text-zinc-50">Community & Construction</h2>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative w-full">
        <Masonry 
          data={galleryImages} 
          items={galleryImages} 
          blurToFocus={false} 
          onImageClick={(item) => setSelectedImage(item)}
        />
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-12 md:right-12 text-zinc-300 hover:text-white bg-zinc-800/50 hover:bg-zinc-700/80 p-3 rounded-full transition-colors cursor-pointer"
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
