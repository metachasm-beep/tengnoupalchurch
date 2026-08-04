import React from 'react';
import BlurText from '../components/BlurText/BlurText';
import { MapPin } from '@phosphor-icons/react';
import heroBg from '../../public/assets/hero_bg.webp';
import { Button } from "@/components/ui/button";

export default function Hero({ content }) {
  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-20 bg-forest-900">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center gap-2 sm:gap-4 md:gap-6 mt-0 md:mt-[-40px]">
        <img 
          src="/assets/logo.webp" 
          alt="Tengnoupal Christian Church Logo" 
          className="h-16 sm:h-24 md:h-32 w-auto object-contain brightness-0 invert opacity-90 drop-shadow-lg mb-1 md:mb-2 shrink-0"
        />
        <div className="flex flex-col items-center gap-2 md:gap-4 mb-1 md:mb-2 shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-amber-accent uppercase">
            <MapPin weight="bold" /> {content?.location}
          </div>
        </div>
        
        <h1 className="font-serif text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-semibold tracking-widest uppercase leading-[1.1] text-bone-50 my-1 sm:my-2 md:my-4 drop-shadow-lg shrink-0">
          {content?.subtitle}
        </h1>
        
        <h2 className="font-sans text-xs sm:text-sm md:text-xl tracking-[0.1em] text-bone-200 uppercase font-medium mb-1 md:mb-4 shrink-0">
          <BlurText 
            text={content?.headline || ""} 
            delay={50} 
            className="block"
          />
        </h2>
        
        <p className="text-sm md:text-lg text-bone-100 max-w-[40ch] leading-snug md:leading-relaxed mx-auto">
          {content?.description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 pt-2 md:pt-4 w-full sm:w-auto shrink-0">
          <Button onClick={() => { const el = document.getElementById('nav-sermons'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="bg-amber-accent text-forest-900 px-6 py-4 md:py-6 rounded-full font-bold hover:bg-amber-accent-hover transition-colors hover:scale-[0.98] w-full sm:w-auto text-sm md:text-base h-auto">
            Sunday Services
          </Button>
          <Button onClick={() => { const el = document.getElementById('nav-vision'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="glass px-6 py-4 md:py-6 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-sm md:text-base text-bone-50 h-auto">
            Our Vision
          </Button>
        </div>
      </div>
    </section>
  );
}
