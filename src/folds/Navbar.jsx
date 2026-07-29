import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.webp" alt="Logo" className="w-10 h-10 object-contain drop-shadow-md" />
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Tengnoupal Christian Church</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-900 dark:text-zinc-300">
          <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
          <a href="#sermons" className="hover:text-emerald-600 transition-colors">Sermons</a>
          <a href="#project" className="hover:text-emerald-600 transition-colors">Building Project</a>
          <a href="#gallery" className="hover:text-emerald-600 transition-colors">Gallery</a>
        </div>
        <button className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium hover:scale-[0.98] transition-transform">
          Visit Us
        </button>
      </div>
    </nav>
  );
}
