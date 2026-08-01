import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import ScrollVelocity from '../components/ui/ScrollVelocity';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Foundation({ content }) {
  return (
    <section id="foundation" className="min-h-[100dvh] w-full flex items-center justify-center bg-forest-900 text-bone-50 relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden h-full">
        <ScrollVelocity 
          texts={["ESTABLISHED 1974"]} 
          velocity={50} 
          className="text-8xl md:text-[12rem] font-serif font-bold text-amber-accent whitespace-nowrap" 
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-0 md:px-6 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-start md:items-stretch w-full">
          
          {/* Desktop Content (Title + Text) */}
          <div className="hidden md:flex flex-col items-start w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-amber-accent uppercase mb-6">
               {content?.badge}
            </div>
            <h2 className="font-serif text-5xl font-medium tracking-tight mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: content?.title }} />
            
            <div className="space-y-6 text-bone-100 text-lg leading-relaxed border-l-2 border-amber-accent/50 pl-8">
              <p className="italic font-serif text-xl text-bone-50 opacity-90">
                {content?.paragraphs[0]}
              </p>
              <p className="text-base opacity-80 uppercase tracking-widest font-sans pt-2">
                {content?.paragraphs[1]}
              </p>
            </div>
          </div>

          {/* Mobile Swipeable Storybook */}
          <div className="md:hidden w-full">
            <Carousel opts={{ align: "center", dragFree: true }} className="w-full">
              <CarouselContent className="-ml-4 px-6 pb-8">
                
                {/* Intro Card */}
                <CarouselItem className="pl-4 basis-[85%] max-w-[340px]">
                  <div className="glass p-8 rounded-[2rem] h-full min-h-[380px] flex flex-col justify-center gap-6 relative overflow-hidden border border-white/10 shadow-2xl">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-accent/20 rounded-full blur-[50px] pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/50 text-[10px] font-semibold tracking-widest text-amber-accent uppercase w-fit border border-white/5 mb-6 backdrop-blur-md">
                        {content?.badge}
                      </div>
                      <h3 className="font-serif text-4xl font-medium tracking-tight text-bone-50 leading-[1.1]" dangerouslySetInnerHTML={{ __html: content?.title }} />
                    </div>
                    
                    <div className="mt-auto pt-6 flex items-center gap-2 text-amber-accent text-xs font-bold uppercase tracking-[0.2em] relative z-10">
                      Swipe to Read <ArrowRight size={16} weight="bold" className="animate-pulse" />
                    </div>
                  </div>
                </CarouselItem>

                {/* Story Cards */}
                {content?.paragraphs?.map((para, i) => (
                  <CarouselItem key={i} className="pl-4 basis-[85%] max-w-[340px]">
                    <div className="glass-dark p-8 rounded-[2rem] h-full min-h-[380px] flex flex-col relative overflow-hidden border border-white/5 shadow-xl">
                      <div className="absolute top-4 right-6 text-7xl font-serif text-white-[0.02] font-bold leading-none select-none pointer-events-none">
                        0{i + 1}
                      </div>
                      
                      <div className="relative z-10 h-full flex flex-col justify-center">
                        <p className={`leading-[1.8] text-bone-100/90 ${i === 0 ? 'italic font-serif text-lg text-bone-50 drop-shadow-sm' : 'font-light tracking-wide text-sm'}`}>
                          {para}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
                
              </CarouselContent>
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  );
}
