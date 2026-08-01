import React, { useState, useEffect } from 'react';
import { ChalkboardTeacher } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollFloat from '../components/ui/ScrollFloat';
import SpotlightCard from '../components/ui/SpotlightCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageModal from '../components/ImageModal';

export default function CE({ content }) {
  const cbsImages = [1, 2, 3, 4, 5].map(i => `/assets/cbs_${i}.webp`);

  const [currentCbs, setCurrentCbs] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCbs((prev) => (prev + 1) % allGalleryPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [allGalleryPhotos.length]);

  // Combine staff into a unified array
  const staffArray = [];
  if (content?.staff?.superintendent) {
    staffArray.push({
      name: content.staff.superintendent.name || content.staff.superintendent,
      img: content.staff.superintendent.img,
      role: 'Superintendent'
    });
  }
  if (content?.staff?.secretary) {
    staffArray.push({
      name: content.staff.secretary.name || content.staff.secretary,
      img: content.staff.secretary.img,
      role: 'Secretary'
    });
  }
  if (content?.staff?.teachers) {
    content.staff.teachers.forEach(t => {
      staffArray.push({
        name: t.name,
        img: t.img,
        role: 'Teaching Staff'
      });
    });
  }

  const StaffCard = ({ member, isDesktop = false }) => (
    <SpotlightCard 
      spotlightColor="rgba(255, 183, 77, 0.15)"
      className={`relative rounded-3xl overflow-hidden glass p-4 sm:p-5 border border-white/5 shadow-2xl bg-forest-800 flex flex-col items-center text-center group h-full ${isDesktop ? '' : 'min-h-[220px]'}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-amber-accent/50 group-hover:bg-amber-accent transition-colors"></div>
      
      {member.img ? (
        <ImageModal 
          src={member.img} 
          alt={member.name} 
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-3 sm:mb-4 border-2 border-white/10 shadow-lg"
        />
      ) : (
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-forest-900 rounded-full mb-3 sm:mb-4 border-2 border-white/10 shadow-lg flex items-center justify-center">
          <ChalkboardTeacher size={32} weight="fill" className="text-amber-accent/50" />
        </div>
      )}
      
      <h4 className="font-serif text-base sm:text-lg text-bone-50 font-medium leading-tight line-clamp-2">{member.name}</h4>
      <p className="text-amber-accent text-xs uppercase tracking-widest mt-1 sm:mt-2">{member.role}</p>
    </SpotlightCard>
  );

  return (
    <section id="ce" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-20 overflow-hidden">
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
          C.E
        </ScrollFloat>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full h-full flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-center">
        
        {/* Mobile Header */}
        <div className="w-full md:hidden flex items-center gap-4 mb-2">
          <img src="/assets/ce_logo.webp" alt="CE Logo" className="w-14 h-14 rounded-full object-cover border border-white/10 shadow-lg" />
          <h2 className="font-serif text-3xl font-medium tracking-tight text-bone-50">
            {content?.title}
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="w-full md:hidden flex flex-col gap-6 h-full justify-center">
          {/* Staff Carousel */}
          <div className="w-full">
            <h3 className="font-sans text-xs tracking-[0.2em] text-bone-200/70 uppercase font-medium mb-3 pl-2">Staff Members</h3>
            <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
              <CarouselContent className="-ml-2">
                {staffArray.map((member, idx) => (
                  <CarouselItem key={idx} className="pl-2 basis-[55%] sm:basis-[40%]">
                    <StaffCard member={member} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Gallery Carousel */}
          <div className="w-full">
            <h3 className="font-sans text-xs tracking-[0.2em] text-bone-200/70 uppercase font-medium mb-3 pl-2">Photographs</h3>
            <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
              <CarouselContent className="-ml-2">
                {allGalleryPhotos.map((photo, idx) => (
                  <CarouselItem key={idx} className="pl-2 basis-[85%] sm:basis-[60%]">
                    <div className="relative rounded-3xl overflow-hidden glass p-2 border border-white/5 h-[28vh] min-h-[200px]">
                      <img src={photo.src} alt={photo.caption} className="w-full h-full rounded-2xl shadow-lg object-cover" />
                      <div className="absolute inset-2 bg-gradient-to-t from-forest-900/90 via-transparent to-transparent pointer-events-none rounded-2xl" />
                      <p className="absolute bottom-6 left-6 text-xs font-medium text-bone-50 drop-shadow-md z-10">{photo.caption}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full flex-row gap-8 lg:gap-12 h-full max-h-[80vh] items-stretch">
          
          {/* Left Column: Staff */}
          <div className="w-[55%] flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 shrink-0">
              <img src="/assets/ce_logo.webp" alt="CE Logo" className="w-16 h-16 rounded-full object-cover border border-white/10 shadow-lg" />
              <div>
                <h2 className="font-serif text-4xl font-medium tracking-tight text-bone-50">
                  {content?.title}
                </h2>
                <p className="text-amber-accent/80 font-medium tracking-widest uppercase text-xs mt-1">Staff & Teachers</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 rounded-3xl pb-10">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {staffArray.map((member, idx) => (
                  <StaffCard key={idx} member={member} isDesktop={true} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Gallery */}
          <div className="w-[45%] flex flex-col h-full relative">
             <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 rounded-3xl flex flex-col gap-4 pb-10">
                {/* Single feature image (Animated Gallery) */}
                <div className="relative rounded-3xl overflow-hidden glass p-2 border border-white/5 h-[60vh] shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentCbs}
                      src={allGalleryPhotos[currentCbs]?.src}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-2xl object-cover"
                      alt={allGalleryPhotos[currentCbs]?.caption}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-2 bg-gradient-to-t from-forest-900/90 via-transparent to-transparent pointer-events-none rounded-2xl" />
                  <p className="absolute bottom-6 left-6 z-10 text-sm font-medium text-bone-50 drop-shadow-md">
                    {allGalleryPhotos[currentCbs]?.caption}
                  </p>
                  <div className="absolute bottom-6 right-6 z-10 flex gap-1.5 flex-wrap justify-end max-w-[50%]">
                    {allGalleryPhotos.map((_, i) => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentCbs ? 'bg-amber-accent' : 'bg-white/30'}`} />
                    ))}
                  </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
