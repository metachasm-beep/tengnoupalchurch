import React from 'react';
import { Cross } from '@phosphor-icons/react';

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass hidden md:block">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold tracking-tight text-bone-50">Tengnoupal Christian Church</span>
        </div>
        <div className="hidden md:flex flex-wrap items-center justify-center gap-3 lg:gap-6 text-xs lg:text-sm font-medium text-bone-100">
          <button onClick={() => scrollTo('nav-hero')} className="hover:text-amber-accent transition-colors">Home</button>
          <button onClick={() => scrollTo('nav-sermons')} className="hover:text-amber-accent transition-colors">Sermons</button>
          <button onClick={() => scrollTo('nav-project')} className="hover:text-amber-accent transition-colors">Project</button>
          <button onClick={() => scrollTo('nav-houbong')} className="hover:text-amber-accent transition-colors">Houbung</button>
          <button onClick={() => scrollTo('nav-ce')} className="hover:text-amber-accent transition-colors">CE</button>
          <button onClick={() => scrollTo('nav-kck')} className="hover:text-amber-accent transition-colors">KCK</button>
          <button onClick={() => scrollTo('nav-kcn')} className="hover:text-amber-accent transition-colors">KCN</button>
          <button onClick={() => scrollTo('nav-kcu')} className="hover:text-amber-accent transition-colors">KCU</button>
          <button onClick={() => scrollTo('nav-gallery')} className="hover:text-amber-accent transition-colors">Gallery</button>
        </div>
        <button onClick={() => scrollTo('nav-footer')} className="bg-amber-accent text-forest-900 px-5 py-2.5 rounded-full text-sm font-bold hover:scale-[0.98] hover:bg-amber-accent-hover transition-all">
          Visit Us
        </button>
      </div>
    </nav>
  );
}
