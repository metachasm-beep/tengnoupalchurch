import React from 'react';
import { MapPin } from '@phosphor-icons/react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Footer({ content }) {
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`, {
      description: text,
      position: 'bottom-center'
    });
  };

  return (
    <footer className="h-[100dvh] w-full bg-forest-900 flex flex-col justify-between items-center text-bone-100 z-50 relative overflow-hidden pt-32 pb-8 md:pb-12">
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center bg-fixed pointer-events-none" 
        style={{ backgroundImage: `url('/assets/bg_project.webp')` }} 
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow gap-8 md:gap-10 text-center px-6 w-full">
        <h2 className="font-serif text-3xl md:text-5xl text-bone-50 tracking-widest uppercase">Visit Us</h2>
        <div className="flex flex-col items-center gap-4 md:gap-6 text-base md:text-xl font-light">
          <p className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-amber-accent">
            <MapPin size={28} weight="fill" className="flex-shrink-0" />
            <span className="text-center md:text-left">{content?.address}</span>
          </p>
          {(content?.email || content?.phone) && (
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm md:text-lg text-bone-200">
              {content?.email && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={() => handleCopy(content.email, 'Email')} 
                      className="hover:text-amber-accent transition-colors"
                    >
                      {content.email}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-forest-800 text-bone-50 border-white/10">
                    <p>Click to copy</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {content?.phone && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={() => handleCopy(`+91 ${content.phone}`, 'Phone number')} 
                      className="hover:text-amber-accent transition-colors"
                    >
                      +91 {content.phone}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-forest-800 text-bone-50 border-white/10">
                    <p>Click to copy</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          )}
          <p className="opacity-80 max-w-md text-sm md:text-base leading-relaxed mt-2 md:mt-0">
            Join us for Sunday Services. All are welcome to worship, learn, and grow together in community.
          </p>
        </div>
        <Button onClick={() => { const el = document.getElementById('nav-hero'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="mt-4 md:mt-8 border border-amber-accent/50 text-amber-accent hover:bg-amber-accent hover:text-forest-900 px-8 py-6 rounded-full font-medium transition-all hover:scale-105 bg-transparent">
          Back to Top ⇧
        </Button>
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 text-xs md:text-sm border-t border-forest-800 pt-6 md:pt-8 opacity-75 mt-auto">
        <p className="text-center md:text-left order-2 md:order-1">{content?.copyright}</p>
        <div className="flex gap-6 order-1 md:order-2">
          <button onClick={() => { const el = document.getElementById('nav-sermons'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors">Sermons</button>
          <button onClick={() => { const el = document.getElementById('nav-project'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-amber-accent transition-colors">Project</button>
        </div>
      </div>
    </footer>
  );
}
