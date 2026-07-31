import React from 'react';
import { Sparkle, BookOpenText } from '@phosphor-icons/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageModal from '../components/ImageModal';
import ScrollFloat from '../components/ui/ScrollFloat';

export default function KCN({ content }) {
  return (
    <section id="kcn" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-5 pointer-events-none z-0">
        <ScrollFloat 
          animationDuration={1} 
          ease="back.inOut(2)" 
          scrollStart="top bottom+=20%" 
          scrollEnd="bottom top-=20%" 
          containerClassName="text-[12rem] md:text-[25rem] font-serif font-bold text-bone-50 tracking-tighter whitespace-nowrap" 
          textClassName="leading-none"
        >
          K.C.N
        </ScrollFloat>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 w-full flex flex-col gap-8 md:gap-12 text-center items-center">
        
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center text-amber-accent mb-2">
          <Sparkle size={32} weight="fill" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-bone-50">
          {content?.title}
        </h2>
        
        {/* Desktop View */}
        <div className="hidden md:block w-full max-w-2xl text-left">
          <Accordion type="single" collapsible className="w-full">
            {content?.history?.map((para, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-white/10">
                <AccordionTrigger className="text-bone-50 hover:text-amber-accent font-serif text-lg">
                  {i === 0 ? "Overview" : para.split(' ').slice(0, 4).join(' ') + "..."}
                </AccordionTrigger>
                <AccordionContent className="text-bone-100/90 text-base leading-relaxed font-light">
                  {para}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4 px-2 w-full max-w-2xl">
          {content?.history?.slice(0, 2).map((para, i) => (
            <div key={i} className="glass p-4 rounded-xl text-left border border-white/5">
              <p className="text-bone-100/90 text-sm leading-relaxed font-light line-clamp-2">
                {para}
              </p>
            </div>
          ))}
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center justify-center gap-2 mt-4 bg-amber-accent text-forest-900 px-6 py-3 rounded-full font-bold w-full">
                <BookOpenText weight="bold" size={20} /> Read Full History
              </button>
            </DialogTrigger>
            <DialogContent className="bg-forest-900 border-white/10 text-bone-50 w-[90vw] rounded-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-left text-2xl font-serif">{content?.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  {content?.history?.map((para, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b-white/10">
                      <AccordionTrigger className="text-bone-50 hover:text-amber-accent text-sm text-left">
                        {i === 0 ? "Overview" : para.split(' ').slice(0, 4).join(' ') + "..."}
                      </AccordionTrigger>
                      <AccordionContent className="text-bone-100/90 text-sm leading-relaxed font-light">
                        {para}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="w-full max-w-2xl mt-4 grid grid-cols-2 gap-4">
          <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full">
            <ImageModal 
              src="/assets/kcn_1.webp" 
              alt="KCN Activity" 
              className="w-full h-40 md:h-56 object-cover rounded-xl shadow-lg" 
            />
          </div>

          <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full">
            <ImageModal 
              src="/assets/kcn_2.webp" 
              alt="KCN Activity" 
              className="w-full h-40 md:h-56 object-cover rounded-xl shadow-lg" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
