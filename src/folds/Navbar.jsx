import React from 'react';

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.svg" alt="Logo" className="w-12 h-12 object-contain bg-bone-50 rounded-full p-1 shadow-md" />
          <span className="font-semibold tracking-tight text-bone-50">Tengnoupal Christian Church</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-bone-100">
          <button onClick={() => scrollTo('nav-hero')} className="hover:text-amber-accent transition-colors">Home</button>
          <button onClick={() => scrollTo('nav-hero')} className="hover:text-amber-accent transition-colors">About</button>
          <button onClick={() => scrollTo('nav-sermons')} className="hover:text-amber-accent transition-colors">Sermons</button>
          <button onClick={() => scrollTo('nav-project')} className="hover:text-amber-accent transition-colors">Building Project</button>
          <button onClick={() => scrollTo('nav-gallery')} className="hover:text-amber-accent transition-colors">Gallery</button>
        </div>
        <button onClick={() => scrollTo('nav-footer')} className="bg-amber-accent text-forest-900 px-5 py-2.5 rounded-full text-sm font-bold hover:scale-[0.98] hover:bg-amber-accent-hover transition-all">
          Visit Us
        </button>
      </div>
    </nav>
  );
}
