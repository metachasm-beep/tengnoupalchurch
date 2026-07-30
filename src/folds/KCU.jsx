import React from 'react';
import { Calendar, UserCircle } from '@phosphor-icons/react';

export default function KCU({ content }) {
  return (
    <section id="kcu" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 w-full flex flex-col gap-8 md:gap-12 text-center items-center">
        
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-bone-50">
          {content?.title}
        </h2>
        <div className="w-full max-w-2xl text-bone-100 text-lg opacity-80 mt-8">
          <p>More information coming soon.</p>
        </div>
      </div>
    </section>
  );
}
