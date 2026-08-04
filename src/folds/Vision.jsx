import React from 'react';
import { BookOpenText, Eye } from '@phosphor-icons/react';
import PaginatedReader from '../components/PaginatedReader';
export default function Vision({ content }) {
  return (
    <section id="vision" className="relative min-h-[100dvh] w-full flex items-center bg-forest-900 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed pointer-events-none opacity-30"
        style={{ backgroundImage: `url('/assets/bg_sermons.webp')` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-12 md:mt-0 py-4 md:py-0">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5 flex flex-col gap-2 md:gap-6">
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-widest uppercase text-bone-50 text-center md:text-left">Our Vision</h2>
            <div className="flex flex-col gap-2 md:gap-5 text-bone-100 items-center md:items-start text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 text-amber-accent text-xs md:text-sm font-medium self-center md:self-start shadow-sm border border-white/5">
                <Eye weight="bold" /> Church Vision & Mission
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-bone-50 leading-snug">
                Building a Foundation of Faith
              </h3>
              
              <div className="mt-1 md:mt-4 relative rounded-full overflow-hidden glass p-1.5 border border-white/5 w-24 h-24 md:w-40 md:h-40 self-center md:self-start shrink-0">
                <img 
                  src="/assets/houbong/vision/1.jpeg" 
                  alt="Our Vision" 
                  className="w-full h-full rounded-full shadow-lg object-cover object-top"
                />
              </div>

              {/* Mobile Text Container */}
              <div className="md:hidden w-full relative h-[280px] mt-1">
                <div className="glass-dark rounded-2xl h-full shadow-lg bg-forest-900/50 overflow-hidden relative border border-white/5">
                  <PaginatedReader text={content?.join('\n\n')} maxChars={280} />
                </div>
              </div>
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
