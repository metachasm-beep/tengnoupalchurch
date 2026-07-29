import React from 'react';
import { MapPin } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-forest-800 text-bone-100 bg-forest-900/90 backdrop-blur-md px-6 py-4 pb-8 md:pb-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm z-50">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
        <p>© 2026 Tengnoupal Christian Church.</p>
        <p className="flex items-center justify-center gap-1 opacity-75">
          <MapPin size={16} weight="fill" className="text-amber-accent" />
          P.O. Moreh, P.S. Tengnoupal, Manipur - 795131
        </p>
      </div>
      <div className="flex gap-6">
        <button onClick={() => { const el = document.getElementById('nav-sermons'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors">Sermons</button>
        <button onClick={() => { const el = document.getElementById('nav-project'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors">Project</button>
        <button onClick={() => { const el = document.getElementById('nav-hero'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors">Top ⇧</button>
      </div>
    </footer>
  );
}
