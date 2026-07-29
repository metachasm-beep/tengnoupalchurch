import React from 'react';
import { MapPin, EnvelopeSimple, Phone } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer id="footer" className="min-h-[50vh] w-full flex flex-col justify-between border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-950 px-8 py-16 md:px-24">
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Brand & Motto */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img src="/assets/logo.webp" alt="TCC Logo" className="h-16 w-16 bg-white rounded-full p-1 shadow-md object-contain" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Tengnoupal<br/>Christian Church
            </h2>
          </div>
          <p className="text-emerald-600 dark:text-emerald-400 italic font-serif text-lg border-l-2 border-emerald-500 pl-4">
            "You are the Light of the World"<br/>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 not-italic">— Matthew 5:14</span>
          </p>
        </div>

        {/* Address */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Location</h3>
          <div className="flex items-start gap-3">
            <MapPin size={24} weight="duotone" className="text-emerald-500 shrink-0 mt-1" />
            <p className="leading-relaxed">
              P.O. Moreh, P.S. Tengnoupal<br/>
              Tengnoupal District<br/>
              Manipur - 795131
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Quick Links</h3>
          <ul className="space-y-2">
            <li><button onClick={() => document.getElementById('sermons')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-500 transition-colors">Sermons</button></li>
            <li><button onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-500 transition-colors">Building Project</button></li>
            <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-500 transition-colors">Photo Gallery</button></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-zinc-200 dark:border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© 2026 Tengnoupal Christian Church. All rights reserved.</p>
        <p>Manipur Synod</p>
      </div>

    </footer>
  );
}
