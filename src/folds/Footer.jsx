import React from 'react';
import { MapPin } from '@phosphor-icons/react';

export default function Footer({ content }) {
  return (
    <footer className="h-[100dvh] w-full bg-forest-900 flex flex-col justify-between items-center text-bone-100 z-50 relative overflow-hidden pt-32 pb-8 md:pb-12">
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center bg-fixed pointer-events-none" 
        style={{ backgroundImage: `url('/assets/bg_project.png')` }} 
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow gap-8 md:gap-10 text-center px-6 w-full">
        <h2 className="font-serif text-4xl md:text-6xl text-bone-50 tracking-tight">Visit Us</h2>
        <div className="flex flex-col items-center gap-4 md:gap-6 text-base md:text-xl font-light">
          <p className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-amber-accent">
            <MapPin size={28} weight="fill" className="flex-shrink-0" />
            <span className="text-center md:text-left">{content?.address}</span>
          </p>
          <p className="opacity-80 max-w-md text-sm md:text-base leading-relaxed mt-2 md:mt-0">
            Join us for Sunday Services. All are welcome to worship, learn, and grow together in community.
          </p>
        </div>
        <button onClick={() => { const el = document.getElementById('nav-hero'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="mt-4 md:mt-8 border border-amber-accent/50 text-amber-accent hover:bg-amber-accent hover:text-forest-900 px-8 py-3 rounded-full font-medium transition-all hover:scale-105">
          Back to Top ⇧
        </button>
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 text-xs md:text-sm border-t border-forest-800 pt-6 md:pt-8 opacity-75 mt-auto">
        <p className="text-center md:text-left order-2 md:order-1">{content?.copyright}</p>
        <div className="flex gap-6 order-1 md:order-2">
          <button onClick={() => { const el = document.getElementById('nav-sermons'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors">Sermons</button>
          <button onClick={() => { const el = document.getElementById('nav-project'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors">Project</button>
        </div>
      </div>
    </footer>
  );
}
