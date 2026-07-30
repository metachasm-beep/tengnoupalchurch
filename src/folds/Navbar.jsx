import React, { useState } from 'react';
import { Cross, List } from '@phosphor-icons/react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'nav-hero' },
    { name: 'Sermons', id: 'nav-sermons' },
    { name: 'Project', id: 'nav-project' },
    { name: 'Houbung', id: 'nav-houbong' },
    { name: 'CE', id: 'nav-ce' },
    { name: 'KCK', id: 'nav-kck' },
    { name: 'KCN', id: 'nav-kcn' },
    { name: 'KCU', id: 'nav-kcu' },
    { name: 'Gallery', id: 'nav-gallery' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 md:glass bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-end md:justify-between">
        
        {/* Desktop Logo */}
        <div className="hidden md:flex items-center gap-4">
          <span className="font-semibold tracking-tight text-bone-50 text-base">Tengnoupal Christian Church</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-bone-100">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="hover:text-amber-accent transition-colors">
              {link.name}
            </button>
          ))}
          <Button onClick={() => scrollTo('nav-footer')} className="bg-amber-accent text-forest-900 rounded-full font-bold hover:bg-amber-accent-hover transition-all">
            Visit Us
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center pt-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-bone-50 bg-forest-900/50 hover:bg-forest-800 backdrop-blur-md border border-white/10 rounded-full h-12 w-12 shadow-lg">
                <List size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-forest-900/95 backdrop-blur-xl border-l border-white/10 text-bone-50 w-[300px] sm:w-[400px] p-8 flex flex-col shadow-2xl">
              <SheetHeader className="mb-8 border-b border-white/10 pb-6 text-left">
                <SheetTitle className="text-amber-accent font-serif text-2xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="grid grid-cols-2 gap-2 flex-grow overflow-y-auto custom-scrollbar pr-2 mt-2">
                {navLinks.map(link => (
                  <button 
                    key={link.id} 
                    onClick={() => scrollTo(link.id)} 
                    className="text-center text-sm sm:text-base font-medium text-bone-100 hover:text-forest-900 hover:bg-amber-accent transition-all px-2 py-4 rounded-xl glass-dark border border-white/5 shadow-md flex items-center justify-center"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <Button onClick={() => scrollTo('nav-footer')} className="bg-amber-accent text-forest-900 rounded-xl font-bold hover:bg-amber-accent-hover w-full py-6 text-lg shadow-lg">
                  Visit Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
