import React, { useState, useEffect } from 'react';
import { ChalkboardTeacher, CaretLeft, CaretRight } from '@phosphor-icons/react';
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
  const cbsImages = content?.cbs_images || [];

  const allGalleryPhotos = [
    ...(content?.images?.map(img => ({ src: img, caption: 'CE Photo' })) || []),
    ...cbsImages.map(img => ({ src: img, caption: 'Chapang Bible School (CBS) 2025' }))
  ];

  const [currentCbs, setCurrentCbs] = useState(0);
  const [memberPage, setMemberPage] = useState(0);
  const MEMBERS_PER_PAGE = 9;

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
      className={`relative rounded-3xl overflow-hidden glass p-3 md:p-4 border border-white/5 shadow-2xl bg-forest-800 flex flex-col items-center text-center group h-full justify-center ${isDesktop ? 'min-h-[140px]' : 'min-h-[220px]'}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-amber-accent/50 group-hover:bg-amber-accent transition-colors z-20"></div>
      
      {member.img ? (
        <ImageModal 
          src={member.img} 
          alt={member.name}
          caption={`${member.name} - ${member.role}`}
          className={`w-20 h-20 md:w-24 md:h-24 object-cover rounded-full mb-2 md:mb-3 border-2 border-white/10 shadow-lg shrink-0 ${member.name?.includes('Seilenjam') ? 'object-[center_30%]' : 'object-top'}`}
        />
      ) : (
        <div className={`w-20 h-20 md:w-24 md:h-24 bg-forest-900 rounded-full mb-2 md:mb-3 border-2 border-white/10 shadow-lg flex items-center justify-center shrink-0`}>
          <ChalkboardTeacher size={isDesktop ? 40 : 48} weight="fill" className="text-amber-accent/50" />
        </div>
      )}
      
      <h4 className={`font-serif text-bone-50 font-medium leading-tight w-full ${isDesktop ? 'text-sm md:text-base' : 'text-base sm:text-lg'}`}>{member.name}</h4>
      <p className={`text-amber-accent uppercase tracking-widest ${isDesktop ? 'text-[10px] md:text-[11px] mt-1' : 'text-xs mt-1 sm:mt-2'}`}>{member.role}</p>
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
          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-widest uppercase text-bone-50">
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
                      <ImageModal src={photo.src} alt={photo.caption} caption={photo.caption} className="w-full h-full rounded-2xl shadow-lg object-cover" />
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
          
          {/* Left Column: Gallery */}
          <div className="w-[45%] flex flex-col h-full relative">
            <div className="flex items-center gap-4 mb-6 shrink-0">
              <img src="/assets/ce_logo.webp" alt="CE Logo" className="w-16 h-16 rounded-full object-cover border border-white/10 shadow-lg" />
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-widest uppercase text-bone-50">
                  {content?.title}
                </h2>
                <p className="text-amber-accent/80 font-medium tracking-widest uppercase text-xs mt-1">Staff & Teachers</p>
              </div>
            </div>
             <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 rounded-3xl flex flex-col gap-4 pb-10">
                <div className="relative rounded-3xl overflow-hidden glass p-2 border border-white/5 h-[60vh] shrink-0">
                  
                  {/* Navigation Buttons */}
                  <button 
                    onClick={() => setCurrentCbs(prev => (prev - 1 + allGalleryPhotos.length) % allGalleryPhotos.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/10 cursor-pointer"
                  >
                    <CaretLeft size={24} weight="bold" />
                  </button>
                  <button 
                    onClick={() => setCurrentCbs(prev => (prev + 1) % allGalleryPhotos.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/10 cursor-pointer"
                  >
                    <CaretRight size={24} weight="bold" />
                  </button>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentCbs}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] flex items-center justify-center bg-black/20 rounded-2xl"
                    >
                      <ImageModal 
                        src={allGalleryPhotos[currentCbs]?.src}
                        alt={allGalleryPhotos[currentCbs]?.caption}
                        caption={allGalleryPhotos[currentCbs]?.caption}
                        className="w-full h-full rounded-2xl object-contain object-center"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-2 bg-gradient-to-t from-forest-900/90 via-transparent to-transparent pointer-events-none rounded-2xl" />
                  <p className="absolute bottom-6 left-6 z-10 text-sm font-medium text-bone-50 drop-shadow-md pr-16">
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

          {/* Right Column: Staff */}
          <div className="w-[55%] flex flex-col h-full z-10 pl-4 lg:pl-8">

            <div className="flex-1 flex flex-col justify-between pr-4 pb-4">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {staffArray.slice(memberPage * MEMBERS_PER_PAGE, (memberPage + 1) * MEMBERS_PER_PAGE).map((member, idx) => (
                  <StaffCard key={idx} member={member} isDesktop={true} />
                ))}
              </div>
              
              {Math.ceil(staffArray.length / MEMBERS_PER_PAGE) > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button 
                    onClick={() => setMemberPage(prev => Math.max(0, prev - 1))}
                    disabled={memberPage === 0}
                    className="p-2 rounded-full bg-forest-800/80 text-bone-50 hover:bg-forest-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/10"
                  >
                    <CaretLeft size={20} weight="bold" />
                  </button>
                  <div className="flex gap-2">
                    {Array.from({ length: Math.ceil(staffArray.length / MEMBERS_PER_PAGE) }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-colors ${i === memberPage ? 'bg-amber-accent' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={() => setMemberPage(prev => Math.min(Math.ceil(staffArray.length / MEMBERS_PER_PAGE) - 1, prev + 1))}
                    disabled={memberPage === Math.ceil(staffArray.length / MEMBERS_PER_PAGE) - 1}
                    className="p-2 rounded-full bg-forest-800/80 text-bone-50 hover:bg-forest-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/10"
                  >
                    <CaretRight size={20} weight="bold" />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
