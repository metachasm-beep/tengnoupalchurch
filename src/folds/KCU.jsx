import React from 'react';
import { Calendar, UserCircle } from '@phosphor-icons/react';
import ScrollFloat from '../components/ui/ScrollFloat';

export default function KCU({ content }) {
  return (
    <section id="kcu" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-5 pointer-events-none z-0">
        <ScrollFloat 
          animationDuration={1} 
          ease="back.inOut(2)" 
          scrollStart="top bottom+=20%" 
          scrollEnd="bottom top-=20%" 
          containerClassName="text-[12rem] md:text-[25rem] font-serif font-bold text-bone-50 tracking-tighter whitespace-nowrap" 
          textClassName="leading-none"
        >
          K.C.U
        </ScrollFloat>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 w-full flex flex-col gap-8 md:gap-12 text-center items-center">
        
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-bone-50">
          {content?.title}
        </h2>
        <div className="w-full max-w-2xl text-bone-100/90 text-sm md:text-base opacity-90 mt-4 md:mt-8 text-left space-y-4">
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-4 shadow-xl">
            {content?.history?.map((para, i) => (
              <p key={i} className="leading-relaxed font-light">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
