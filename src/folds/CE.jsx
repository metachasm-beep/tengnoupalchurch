import React, { useState, useEffect } from 'react';
import { CaretLeft, CaretRight, ChalkboardTeacher } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';

export default function CE({ content }) {
  const [currentCbs, setCurrentCbs] = useState(0);
  const cbsImages = [1, 2, 3, 4, 5].map(i => `/assets/cbs_${i}.jpeg`);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCbs((prev) => (prev + 1) % cbsImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="ce" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col md:flex-row gap-8 md:gap-12 items-start h-full">
        
        {/* Left Column: Staff & Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 h-full">
          <div className="flex items-center gap-4">
            <img src="/assets/ce_logo.jpeg" alt="CE Logo" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-white/10 shadow-lg" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-bone-50">
              {content?.title}
            </h2>
          </div>

          <div className="glass p-5 md:p-8 rounded-2xl border border-white/5 flex-1 flex flex-col gap-6 max-h-[50vh] md:max-h-[60vh] overflow-y-auto custom-scrollbar">
            
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent">
                  <ChalkboardTeacher size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold">{content?.staff?.superintendent}</h4>
                  <p className="text-xs md:text-sm text-amber-accent/80 font-medium">Superintendent</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent">
                  <ChalkboardTeacher size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold">{content?.staff?.secretary}</h4>
                  <p className="text-xs md:text-sm text-amber-accent/80 font-medium">Secretary</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] text-bone-200 uppercase font-medium mb-4">Teaching Staff</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content?.staff?.teachers?.map((teacher, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-amber-accent/50" />
                    <span className="text-sm text-bone-100">{teacher}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Images */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 h-full justify-center">
          
          <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5">
            <img 
              src="/assets/ce_oja_ho.jpeg" 
              alt="CE Oja ho" 
              className="w-full h-[25vh] md:h-[30vh] rounded-xl shadow-lg object-cover"
            />
            <p className="absolute bottom-4 left-4 glass px-3 py-1 text-xs md:text-sm font-medium rounded-full">CE Oja ho</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 h-[30vh] md:h-[35vh]">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentCbs}
                src={cbsImages[currentCbs]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-xl object-cover"
                alt="Chapang Bible School 2025"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent pointer-events-none rounded-2xl" />
            <p className="absolute bottom-4 left-4 z-10 px-3 py-1 text-xs md:text-sm font-medium text-bone-50 drop-shadow-md">
              Chapang Bible School (CBS) 2025
            </p>
            <div className="absolute bottom-4 right-4 z-10 flex gap-1">
              {cbsImages.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentCbs ? 'bg-amber-accent' : 'bg-white/30'}`} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
