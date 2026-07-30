import React, { useState } from 'react';
import { X, List } from '@phosphor-icons/react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

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

        {/* Mobile FAB Menu */}
        <div className="md:hidden fixed top-4 right-4 sm:top-6 sm:right-6 z-[100] flex flex-col items-end">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-accent text-forest-900 rounded-full flex items-center justify-center shadow-2xl border border-white/10 z-[101]"
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="mt-4 bg-forest-900/95 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-2xl origin-top-right flex flex-col w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] max-w-[320px]"
              >
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <span className="text-amber-accent font-serif text-2xl">Menu</span>
                </div>
                <div className="grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
                  {navLinks.map((link, i) => (
                    <motion.button 
                      key={link.id}
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10, transition: { duration: 0.1 } }}
                      transition={{ delay: i * 0.04, type: "spring", stiffness: 300, damping: 20 }}
                      onClick={() => scrollTo(link.id)} 
                      className="text-center text-sm font-medium text-bone-100 hover:text-forest-900 hover:bg-amber-accent transition-all px-2 py-4 rounded-xl glass-dark border border-white/5 shadow-md flex items-center justify-center"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  transition={{ delay: navLinks.length * 0.04 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <Button onClick={() => scrollTo('nav-footer')} className="bg-amber-accent text-forest-900 rounded-xl font-bold hover:bg-amber-accent-hover w-full py-6 text-base shadow-lg">
                    Visit Us
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
