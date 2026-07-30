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
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold tracking-tight text-bone-50 text-sm md:text-base hidden md:block">Tengnoupal Christian Church</span>
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
        <div className="md:hidden flex items-center w-full justify-end">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-bone-50 hover:bg-white/10">
                <List size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-forest-900 border-white/10 text-bone-50 w-[300px] sm:w-[400px] p-8">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-bone-50 text-left pl-2">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-4">
                {navLinks.map(link => (
                  <button 
                    key={link.id} 
                    onClick={() => scrollTo(link.id)} 
                    className="text-left text-lg font-medium text-bone-100 hover:text-amber-accent transition-colors pb-2 border-b border-white/5 pl-2"
                  >
                    {link.name}
                  </button>
                ))}
                <Button onClick={() => scrollTo('nav-footer')} className="bg-amber-accent text-forest-900 rounded-full font-bold hover:bg-amber-accent-hover mt-4 w-full">
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
