import React from 'react';
import { UsersThree, BookOpenText, Users } from '@phosphor-icons/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getKCKImages } from '../stores/AssetStore';

import ImageModal from '../components/ImageModal';
import ScrollFloat from '../components/ui/ScrollFloat';

export default function KCK({ content }) {
  const kckImages = getKCKImages();
  
  return (
    <section id="kck" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
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
          K.C.K
        </ScrollFloat>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col gap-6 md:gap-12 items-start">
        
        {/* Mobile Header */}
        <div className="w-full md:hidden flex flex-col gap-4">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-bone-50 text-center">
            {content?.title}
          </h2>
        </div>

        {/* Mobile Tabs Wrapper */}
        <div className="w-full md:hidden">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="w-full bg-white/5 border border-white/10 rounded-full mb-6">
              <TabsTrigger value="history" className="flex-1 rounded-full text-bone-100 data-[state=active]:bg-amber-accent data-[state=active]:text-forest-900">
                <BookOpenText className="mr-2" /> History
              </TabsTrigger>
              <TabsTrigger value="leadership" className="flex-1 rounded-full text-bone-100 data-[state=active]:bg-amber-accent data-[state=active]:text-forest-900">
                <Users className="mr-2" /> Leadership
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="history">
              <div className="w-full flex-col gap-6 flex">
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {content?.history?.map((para, i) => (
                    <p key={i} className="text-bone-100/90 text-sm leading-relaxed font-light bg-white/5 p-4 rounded-xl border border-white/5">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="leadership">
              <div className="w-full flex-col gap-6 flex h-full">
                <div className="glass p-3 sm:p-4 rounded-2xl border border-white/5 flex-1">
                  <h3 className="font-sans text-xs tracking-[0.2em] text-amber-accent uppercase font-medium mb-3 sm:mb-4 text-center">2025-2026 kum sunga Lamkai ho</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 sm:gap-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Lamkai</h4>
                      <ul className="space-y-1">
                        {content?.lamkai?.map((m, i) => (
                          <li key={i} className="flex flex-col bg-white/5 p-1.5 px-2 rounded-lg">
                            <span className="text-sm font-medium">{m.name}</span>
                            <span className="text-[10px] text-amber-accent/80">{m.role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Lhacha</h4>
                      <ul className="space-y-1">
                        {content?.lhacha?.map((m, i) => (
                          <li key={i} className="flex flex-col bg-white/5 p-1.5 px-2 rounded-lg">
                            <span className="text-sm font-medium">{m.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="sm:col-span-2">
                      <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Committee</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {content?.committee?.map((m, i) => (
                          <li key={i} className="flex items-center gap-2 p-1.5 hover:bg-white/5 rounded-lg transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/50" />
                            <span className="text-xs">{m.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full flex-row gap-8 lg:gap-12 items-start h-full">
          <div className="w-5/12 flex-col gap-6 flex order-1">
            <h2 className="font-serif text-4xl font-medium tracking-tight text-bone-50">
              {content?.title}
            </h2>
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {content?.history?.map((para, i) => (
                <p key={i} className="text-bone-100/90 text-sm leading-relaxed font-light">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="w-7/12 flex-col gap-6 flex order-2 h-full">
            <div className="relative rounded-2xl overflow-hidden glass p-4 border border-white/5">
              <Carousel 
                opts={{ align: "start", loop: true }}
                className="w-full relative"
              >
                <CarouselContent className="-ml-2">
                  {kckImages.map((image) => (
                    <CarouselItem key={image.id} className="pl-2 basis-full">
                      <ImageModal 
                        src={image.img} 
                        alt="Kuki Christian Khangthah" 
                        className="w-full h-[250px] rounded-xl shadow-lg object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {kckImages.length > 1 && (
                  <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
                    <CarouselPrevious className="relative static translate-x-0 translate-y-0 h-8 w-8 bg-forest-900/50 border-none pointer-events-auto hover:bg-amber-accent hover:text-forest-900" />
                    <CarouselNext className="relative static translate-x-0 translate-y-0 h-8 w-8 bg-forest-900/50 border-none pointer-events-auto hover:bg-amber-accent hover:text-forest-900" />
                  </div>
                )}
              </Carousel>
            </div>

            <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5 flex-1">
              <h3 className="font-sans text-xs tracking-[0.2em] text-amber-accent uppercase font-medium mb-4 text-center">2025-2026 kum sunga Lamkai ho</h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Lamkai</h4>
                  <ul className="space-y-1">
                    {content?.lamkai?.map((m, i) => (
                      <li key={i} className="flex flex-col bg-white/5 p-1.5 px-2 rounded-lg">
                        <span className="text-sm font-medium">{m.name}</span>
                        <span className="text-[10px] text-amber-accent/80">{m.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Lhacha</h4>
                  <ul className="space-y-1">
                    {content?.lhacha?.map((m, i) => (
                      <li key={i} className="flex flex-col bg-white/5 p-1.5 px-2 rounded-lg">
                        <span className="text-sm font-medium">{m.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2">
                  <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Committee</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {content?.committee?.map((m, i) => (
                      <li key={i} className="flex items-center gap-2 p-1.5 hover:bg-white/5 rounded-lg transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/50" />
                        <span className="text-sm">{m.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
