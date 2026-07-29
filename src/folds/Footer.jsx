import React from 'react';
import { MapPin, EnvelopeSimple, Phone } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer id="footer" className="min-h-[50vh] w-full flex flex-col justify-between border-t border-forest-800 text-bone-100 bg-forest-900 px-8 py-16 md:px-24">
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Brand & Motto */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img src="/assets/logo.svg" alt="TCC Logo" className="h-16 w-16 bg-bone-50 rounded-full p-1 shadow-md object-contain" />
            <h2 className="font-serif text-2xl font-bold tracking-tight text-bone-50 leading-tight">
              Tengnoupal<br/>Christian Church
            </h2>
          </div>
          <p className="text-amber-accent italic font-serif text-lg border-l-2 border-amber-accent pl-4">
            "You are the Light of the World"<br/>
            <span className="text-sm text-bone-200 opacity-80 not-italic font-sans">— Matthew 5:14</span>
          </p>
        </div>

        {/* Address */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-semibold text-bone-50">Location</h3>
          <div className="flex items-start gap-3">
            <MapPin size={24} weight="duotone" className="text-amber-accent shrink-0 mt-1" />
            <p className="leading-relaxed">
              P.O. Moreh, P.S. Tengnoupal<br/>
              Tengnoupal District<br/>
              Manipur - 795131
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-semibold text-bone-50">Quick Links</h3>
          <ul className="space-y-4">
            <li><button onClick={() => { const el = document.getElementById('nav-sermons'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors flex items-center min-h-[44px]">Sermons</button></li>
            <li><button onClick={() => { const el = document.getElementById('nav-project'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors flex items-center min-h-[44px]">Building Project</button></li>
            <li><button onClick={() => { const el = document.getElementById('nav-gallery'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors flex items-center min-h-[44px]">Photo Gallery</button></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-forest-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
        <p>© 2026 Tengnoupal Christian Church. All rights reserved.</p>
        <p>Manipur Synod</p>
      </div>

    </footer>
  );
}
