import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.webp" alt="Logo" className="w-12 h-12 object-contain bg-white rounded-full p-0.5 shadow-md" />
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Tengnoupal Christian Church</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-900 dark:text-zinc-300">
          <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-600 transition-colors">Home</button>
          <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-600 transition-colors">About</button>
          <button onClick={() => document.getElementById('sermons')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-600 transition-colors">Sermons</button>
          <button onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-600 transition-colors">Building Project</button>
          <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-600 transition-colors">Gallery</button>
        </div>
        <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })} className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium hover:scale-[0.98] transition-transform">
          Visit Us
        </button>
      </div>
    </nav>
  );
}
