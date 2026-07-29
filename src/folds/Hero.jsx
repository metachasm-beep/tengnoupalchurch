import React from 'react';
import BlurText from '../components/BlurText/BlurText';
import { MapPin } from '@phosphor-icons/react';
import heroBg from '../../public/assets/peace-heaven-green-fields.webp';

export default function Hero({ content }) {
  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-20 bg-forest-900">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center gap-4 md:gap-6">
        <div className="flex flex-col items-center gap-3 md:gap-4 mb-2">
          <h2 className="font-sans text-sm md:text-base tracking-[0.2em] text-bone-200 uppercase font-medium">{content?.subtitle}</h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-amber-accent uppercase">
            <MapPin weight="bold" /> {content?.location}
          </div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-7xl font-medium tracking-tight leading-[1.1] text-bone-50">
          <BlurText 
            text={content?.headline || ""} 
            delay={50} 
            className="block"
          />
        </h1>
        
        <p className="text-base md:text-lg text-bone-100 max-w-[40ch] leading-relaxed mx-auto">
          {content?.description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
          <button onClick={() => { const el = document.getElementById('nav-sermons'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="bg-amber-accent text-forest-900 px-6 py-3.5 md:py-3 rounded-full font-bold hover:bg-amber-accent-hover transition-colors hover:scale-[0.98] w-full sm:w-auto text-sm md:text-base">
            Sunday Services
          </button>
          <button onClick={() => { const el = document.getElementById('nav-project'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="glass px-6 py-3.5 md:py-3 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-sm md:text-base">
            Our Vision
          </button>
        </div>
      </div>
    </section>
  );
}
