import React from 'react';
import BlurText from '../components/BlurText/BlurText';
import { MapPin } from '@phosphor-icons/react';
import heroBg from '../../public/assets/peace-heaven-green-fields.webp';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-20 bg-forest-900">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-amber-accent uppercase">
            <MapPin weight="bold" /> Tengnoupal, Manipur
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-bone-50">
            <BlurText 
              text="A place of worship, community, and grace." 
              delay={50} 
              className="block"
            />
          </h1>
          
          <p className="text-lg text-bone-100 max-w-[40ch] leading-relaxed">
            Welcome to Tengnoupal Christian Church. Join us in our journey of faith, love, and building a stronger community.
          </p>
          
          <div className="flex gap-4 pt-4">
            <button onClick={() => { const el = document.getElementById('nav-sermons'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="bg-amber-accent text-forest-900 px-6 py-3 rounded-full font-bold hover:bg-amber-accent-hover transition-colors hover:scale-[0.98]">
              Sunday Services
            </button>
            <button onClick={() => { const el = document.getElementById('nav-project'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="glass px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Our Vision
            </button>
          </div>
        </div>
        
        <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto pointer-events-none">
          <img 
            src="/assets/logo.svg" 
            alt="Tengnoupal Christian Church Logo" 
            className="w-full h-full object-contain opacity-60 scale-100 md:scale-[2] origin-center"
          />
        </div>
      </div>
    </section>
  );
}
