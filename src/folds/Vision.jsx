import React from 'react';
import { Eye, BookOpenText } from '@phosphor-icons/react';
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20 md:mt-28 py-6 md:py-0 overflow-hidden">
        
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6 md:mb-6 w-full">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-widest uppercase text-bone-50 text-center">Our Vision</h2>
        </div>

        <div className="overflow-hidden pt-8 -mt-8">
          <div className="flex">
            <div className="flex-[0_0_100%] min-w-0 pr-4 md:pr-10">
              <div className="grid md:grid-cols-12 gap-8 md:gap-16">
                
                {/* Left Side: Metadata */}
                <div className="md:col-span-5 flex flex-col gap-3 md:gap-6 md:-translate-y-6">
                  <div className="flex flex-col gap-3 md:gap-5 text-bone-100">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 text-amber-accent text-xs md:text-sm font-medium self-start shadow-sm border border-white/5">
                      <Eye weight="bold" /> Church Vision & Mission
                    </div>
                    
                    <div className="mt-1 md:mt-4 relative rounded-2xl overflow-hidden glass p-1.5 border border-white/5 max-w-[120px] md:max-w-xs self-start flex flex-col items-center gap-2">
                      <img 
                        src="/assets/houbong/vision/1.jpeg" 
                        alt="Our Vision" 
                        className="w-full h-auto rounded-xl shadow-lg object-cover"
                      />
                    </div>

                    {/* Mobile Read Message Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="md:hidden flex items-center justify-center gap-2 mt-2 bg-amber-accent text-forest-900 px-6 py-2.5 rounded-full font-bold w-full text-sm">
                          <BookOpenText weight="bold" size={20} /> Read Full Vision
                        </button>
                      </DialogTrigger>
                      <DialogContent className="bg-forest-900 border-white/10 text-bone-50 w-[90vw] rounded-2xl max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-left text-2xl font-serif">Building a Foundation of Faith</DialogTitle>
                        </DialogHeader>
                        <div className="h-[70vh] flex flex-col mt-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-800 text-amber-accent text-xs font-medium border border-white/5 mb-4 w-fit shrink-0">
                            <Eye weight="bold" /> Church Vision & Mission
                          </div>
                          <div className="flex-1 relative overflow-hidden -mx-4 md:mx-0 flex flex-col">
                            <div className="flex-1 relative">
                              <PaginatedReader text={content?.join('\n\n')} maxChars={600} />
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                
                {/* Right Side: Desktop Text Container (Hidden on mobile) */}
                <div className="hidden md:block md:col-span-7 relative h-[70vh] min-h-[450px] max-h-[650px]">
                  <div className="glass-dark rounded-[2rem] h-full shadow-2xl bg-forest-900/50 overflow-hidden relative flex flex-col">
                    <div className="pt-10 px-14 pb-2 shrink-0 z-10 relative">
                      <h3 className="font-serif text-2xl md:text-4xl font-medium text-bone-50 leading-snug">
                        Building a Foundation of Faith
                      </h3>
                      <div className="w-12 h-1 bg-amber-accent mt-4 rounded-full opacity-50"></div>
                    </div>
                    <div className="flex-1 relative -mt-4">
                      <PaginatedReader text={content?.join('\n\n')} maxChars={900} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
