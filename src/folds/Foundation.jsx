import React, { useState } from 'react';
import { BookOpenText } from '@phosphor-icons/react';
import Modal from '../components/Modal';

export default function Foundation({ content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="foundation" className="min-h-[100dvh] w-full flex items-center justify-center bg-forest-900 text-bone-50 relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* History Text */}
        <div className="max-w-4xl mx-auto flex flex-col items-start md:items-stretch">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-amber-accent uppercase mb-6">
             {content?.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-6 md:mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: content?.title }} />
          
          {/* Desktop Content */}
          <div className="hidden md:block space-y-4 md:space-y-6 text-bone-100 text-lg leading-relaxed border-l-2 border-amber-accent/50 pl-8">
            <p className="italic font-serif text-xl text-bone-50 opacity-90">
              {content?.paragraphs[0]}
            </p>
            <p className="text-base opacity-80 uppercase tracking-widest font-sans pt-2">
              {content?.paragraphs[1]}
            </p>
          </div>

          {/* Mobile Snippet & CTA */}
          <div className="md:hidden space-y-4 text-bone-100 text-sm leading-relaxed border-l-2 border-amber-accent/50 pl-4 w-full">
            <p className="italic font-serif text-base text-bone-50 opacity-90 line-clamp-3">
              {content?.paragraphs[0]}
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 mt-4 bg-amber-accent text-forest-900 px-6 py-3 rounded-full font-bold w-full"
            >
              <BookOpenText weight="bold" size={20} /> Read Foundation History
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Our Foundation"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-800 text-amber-accent text-xs font-medium border border-white/5 mb-2">
            {content?.badge}
          </div>
          <p className="leading-relaxed text-bone-100 text-sm font-light tracking-wide italic">
            {content?.paragraphs[0]}
          </p>
          <p className="leading-relaxed text-bone-100 text-sm font-medium tracking-wide border-t border-white/10 pt-4">
            {content?.paragraphs[1]}
          </p>
        </div>
      </Modal>
    </section>
  );
}
