import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-forest-800 text-bone-100 bg-forest-900/90 backdrop-blur-md px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm z-50">
      <p>© 2026 Tengnoupal Christian Church. All rights reserved.</p>
      <div className="flex gap-6">
        <button onClick={() => { const el = document.getElementById('nav-sermons'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors">Sermons</button>
        <button onClick={() => { const el = document.getElementById('nav-project'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors">Project</button>
        <button onClick={() => { const el = document.getElementById('nav-hero'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors">Top ⇧</button>
      </div>
    </footer>
  );
}
