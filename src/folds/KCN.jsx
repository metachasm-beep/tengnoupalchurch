import React, { useState } from 'react';
import { Sparkle, BookOpenText } from '@phosphor-icons/react';
import Modal from '../components/Modal';

export default function KCN({ content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="kcn" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/60 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 w-full flex flex-col gap-8 md:gap-12 text-center items-center">
        
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center text-amber-accent mb-2">
          <Sparkle size={32} weight="fill" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-bone-50">
          {content?.title}
        </h2>
        
        {/* Desktop View */}
        <div className="hidden md:block space-y-6 overflow-y-auto custom-scrollbar px-8 w-full max-w-2xl">
          {content?.history?.map((para, i) => (
            <div key={i} className="glass p-4 rounded-xl text-left border border-white/5 hover:bg-white/5 transition-colors">
              <p className="text-bone-100/90 text-base leading-relaxed font-light">
                {para}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4 px-2 w-full max-w-2xl">
          {content?.history?.slice(0, 2).map((para, i) => (
            <div key={i} className="glass p-4 rounded-xl text-left border border-white/5">
              <p className="text-bone-100/90 text-sm leading-relaxed font-light line-clamp-2">
                {para}
              </p>
            </div>
          ))}
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 mt-4 bg-amber-accent text-forest-900 px-6 py-3 rounded-full font-bold w-full"
          >
            <BookOpenText weight="bold" size={20} /> Read Full History
          </button>
        </div>

      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={content?.title}
      >
        <div className="space-y-4">
          {content?.history?.map((para, i) => (
            <div key={i} className="bg-white/5 p-4 rounded-xl text-left border border-white/10">
              <p className="text-bone-100 text-sm leading-relaxed font-light">
                {para}
              </p>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}
