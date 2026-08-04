import React from 'react';
import { BookOpenText, Eye } from '@phosphor-icons/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PaginatedReader from '../components/PaginatedReader';

export default function Vision({ content }) {
  return (
    <section id="vision" className="relative min-h-[100dvh] w-full flex items-center bg-forest-900 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed pointer-events-none opacity-30"
        style={{ backgroundImage: `url('/assets/bg_sermons.webp')` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-24 md:mt-0 py-12 md:py-0">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-widest uppercase text-bone-50">Our Vision</h2>
            <div className="flex flex-col gap-4 md:gap-5 text-bone-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 text-amber-accent text-xs md:text-sm font-medium self-start shadow-sm border border-white/5">
                <Eye weight="bold" /> Church Vision & Mission
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-bone-50 leading-snug">
                Building a Foundation of Faith
              </h3>
              
              <div className="mt-2 md:mt-4 relative rounded-2xl overflow-hidden glass p-2 border border-white/5 max-w-[200px] md:max-w-xs self-start">
                <img 
                  src="/assets/houbong/vision/1.jpeg" 
                  alt="Our Vision" 
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>

              {/* Mobile Read Message Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="md:hidden flex items-center justify-center gap-2 mt-4 bg-amber-accent text-forest-900 px-6 py-3 rounded-full font-bold w-full">
                    <BookOpenText weight="bold" size={20} /> Read Our Vision
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-forest-900 border-white/10 text-bone-50 w-[90vw] rounded-2xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-left text-2xl font-serif">Our Vision</DialogTitle>
                  </DialogHeader>
                  <div className="h-[70vh] flex flex-col mt-4">
                    <div className="flex-1 relative overflow-hidden -mx-4 md:mx-0">
                      <PaginatedReader text={content?.join('\n\n')} maxChars={550} />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Desktop Text Container (Hidden on mobile) */}
          <div className="hidden md:block md:col-span-7 relative h-[720px] translate-y-[10%]">
            <div className="glass-dark rounded-[2rem] h-full shadow-2xl bg-forest-900/50 overflow-hidden relative">
              <PaginatedReader text={content?.join('\n\n')} maxChars={550} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
