import React from 'react';
import { Leaf } from '@phosphor-icons/react';

export default function GMS({ content }) {
  return (
    <section id="gms" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/60 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 w-full flex flex-col gap-8 md:gap-12 text-center items-center">
        
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center text-amber-accent mb-2">
          <Leaf size={32} weight="fill" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-bone-50">
          {content?.title}
        </h2>
        
        <div className="space-y-6 md:space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar px-2 md:px-8">
          {content?.history?.map((para, i) => (
            <p key={i} className="text-bone-100 text-base md:text-xl leading-relaxed font-light text-left md:text-center">
              {para}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}
