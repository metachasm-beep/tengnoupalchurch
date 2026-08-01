import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpenText, Users, CalendarHeart, GlobeHemisphereWest, ImageSquare, X, UserCircle } from '@phosphor-icons/react';
import ScrollFloat from '../components/ui/ScrollFloat';
import { Dialog } from "@base-ui/react/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ImageModal from '../components/ImageModal';

const LeaderCard = ({ leader }) => (
  <div className="bg-white/5 p-4 md:p-5 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 border border-white/5 hover:bg-white/10 transition-colors text-center sm:text-left h-full shadow-lg backdrop-blur-md">
    {leader.img ? (
      <ImageModal src={leader.img} alt={leader.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full shadow-lg border-2 border-white/10 cursor-pointer hover:opacity-80 transition-opacity" />
    ) : (
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forest-900 rounded-full border-2 border-white/10 flex items-center justify-center shadow-lg">
        <UserCircle size={40} weight="light" className="text-amber-accent/50" />
      </div>
    )}
    <div className="flex flex-col flex-1 justify-center h-full">
      <span className="text-lg font-medium text-bone-50 leading-tight">{leader.name}</span>
      <span className="text-xs font-semibold text-amber-accent/80 tracking-wide mt-1 uppercase">{leader.role}</span>
    </div>
  </div>
);

const EventCard = ({ evt }) => (
  <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5 shadow-lg h-full flex flex-col backdrop-blur-md">
    <h4 className="font-serif text-xl md:text-2xl font-medium text-bone-50 mb-1 leading-snug line-clamp-2">
      {evt.title}
    </h4>
    {evt.date && <p className="text-amber-accent font-medium text-xs mb-4">{evt.date}</p>}
    
    <div className="flex flex-col gap-2 mt-auto">
      {evt.theme && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Theme</span> {evt.theme}</p>}
      {evt.speakers && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Speakers</span> {evt.speakers.join(', ')}</p>}
      {evt.officiator && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Officiator</span> {evt.officiator}</p>}
      {evt.director && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Director</span> {evt.director}</p>}
    </div>
  </div>
);

export default function Houbong({ content }) {
  const [radius, setRadius] = useState(250);
  
  useEffect(() => {
    const checkSize = () => {
      // Extremely tight layout for small phones, wider for desktop
      setRadius(window.innerWidth < 640 ? 130 : window.innerWidth < 1024 ? 200 : 280);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const nodes = [
    { id: 'history', label: 'History', icon: BookOpenText },
    { id: 'leaders', label: 'Leaders', icon: Users },
    { id: 'gms', label: 'GMS Mission', icon: GlobeHemisphereWest },
    { id: 'events', label: 'Events', icon: CalendarHeart },
    { id: 'gallery', label: 'Gallery', icon: ImageSquare },
  ];

  const getModalContent = (id) => {
    switch (id) {
      case 'history':
        return (
          <div className="space-y-4 text-bone-100/90 font-light leading-relaxed">
            {content?.history?.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        );
      case 'gms':
        return (
          <div className="space-y-4 text-bone-100/90 font-light leading-relaxed">
            {content?.gms?.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        );
      case 'leaders':
        return (
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-xs tracking-[0.2em] text-amber-accent uppercase font-medium border-b border-white/10 pb-4">
              Church Leaders (2025-2026)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content?.leaders?.map((leader, idx) => (
                <LeaderCard key={idx} leader={leader} />
              ))}
            </div>
          </div>
        );
      case 'events':
        return (
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-xs tracking-[0.2em] text-amber-accent uppercase font-medium border-b border-white/10 pb-4">
              Recent Events
            </h4>
            <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {content?.events?.map((evt, idx) => (
                  <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2">
                    <EventCard evt={evt} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        );
      case 'gallery':
        return (
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-xs tracking-[0.2em] text-amber-accent uppercase font-medium border-b border-white/10 pb-4">
              Gallery
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full">
                <ImageModal src="/assets/houbong_lamkai.webp" alt="Houbung lamkai" className="w-full h-auto rounded-xl shadow-lg object-cover" />
                <p className="mt-3 text-center text-bone-200/60 text-xs italic px-2">2025-2026 kum sunga Houngbung lamkai holeh Upa Ngapdet ho</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full">
                <ImageModal src="/assets/houbong_1.jpeg" alt="Event Image" className="w-full h-auto rounded-xl shadow-lg object-cover" />
                <p className="mt-3 text-center text-bone-200/60 text-xs italic px-2">Recent Events</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="houbong" className="min-h-[100dvh] w-full flex items-center justify-center bg-forest-900 text-bone-50 relative overflow-hidden py-10">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] bg-[radial-gradient(circle_at_center,rgba(212,128,28,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Giant floating text backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
        <ScrollFloat 
          animationDuration={1} 
          ease="back.inOut(2)" 
          scrollStart="top bottom+=20%" 
          scrollEnd="bottom top-=20%" 
          containerClassName="text-[12rem] md:text-[25rem] font-serif font-bold text-bone-50 tracking-tighter whitespace-nowrap" 
          textClassName="leading-none"
        >
          HOUBUNG
        </ScrollFloat>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        
        {/* Orbital Container */}
        <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center">
          
          {/* Central Hub */}
          <div className="absolute z-20 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full glass border border-amber-accent/30 shadow-[0_0_50px_rgba(212,128,28,0.15)] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-amber-accent/10 group-hover:bg-amber-accent/20 transition-colors" />
              <img src="/assets/houbong_1.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="" />
              <div className="relative z-10 font-serif text-xl md:text-3xl font-medium tracking-tight text-bone-50 drop-shadow-lg">T.C.C</div>
            </div>
            <h2 className="mt-6 font-serif text-2xl md:text-4xl font-medium tracking-tight text-bone-50 text-center max-w-[200px] md:max-w-none drop-shadow-md">
              {content?.title || "Tengnoupal Houbung"}
            </h2>
            <p className="mt-2 text-xs md:text-sm text-amber-accent/80 uppercase tracking-[0.2em] font-medium">Explore the Fold</p>
          </div>

          {/* Orbital Nodes */}
          {nodes.map((node, i) => {
            // Calculate orbital position
            const angle = (i * (360 / nodes.length)) - 90; // Start at top
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <Dialog.Root key={node.id}>
                <Dialog.Trigger asChild>
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, x, y }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20,
                      opacity: { delay: i * 0.1 },
                      scale: { delay: i * 0.1 }
                    }}
                    className="absolute z-30 flex flex-col items-center gap-2 md:gap-3 cursor-pointer group outline-none"
                    style={{ x: 0, y: 0 }} // Start at center for animation
                  >
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full glass border border-white/10 shadow-xl flex items-center justify-center bg-forest-800/80 group-hover:border-amber-accent/50 group-hover:bg-forest-800 transition-all group-hover:shadow-[0_0_30px_rgba(212,128,28,0.2)]">
                      <node.icon size={window.innerWidth < 640 ? 24 : 32} className="text-bone-100 group-hover:text-amber-accent transition-colors" weight="duotone" />
                    </div>
                    <span className="bg-forest-900/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-widest text-bone-50 border border-white/5 shadow-lg group-hover:text-amber-accent transition-colors whitespace-nowrap">
                      {node.label}
                    </span>
                  </motion.button>
                </Dialog.Trigger>
                
                <Dialog.Portal>
                  <Dialog.Backdrop className="fixed inset-0 isolate z-[90] bg-black/80 backdrop-blur-md duration-300 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
                  <Dialog.Popup className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl z-[100] flex flex-col glass-dark border border-white/10 rounded-[2rem] p-6 md:p-10 outline-none duration-300 data-open:animate-in data-open:zoom-in-95 data-open:fade-in-0 data-closed:animate-out data-closed:zoom-out-95 data-closed:fade-out-0 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-y-auto custom-scrollbar max-h-[85vh]">
                    <div className="flex justify-between items-center mb-8 shrink-0 border-b border-white/5 pb-4">
                      <h3 className="font-serif text-2xl md:text-3xl text-bone-50 flex items-center gap-3">
                        <node.icon size={32} className="text-amber-accent" weight="duotone" /> {node.label}
                      </h3>
                      <Dialog.Close className="bg-white/5 hover:bg-white/10 text-white rounded-full p-2.5 transition-colors outline-none border-none cursor-pointer">
                        <X size={20} weight="bold" />
                      </Dialog.Close>
                    </div>
                    <div className="w-full">
                      {getModalContent(node.id)}
                    </div>
                  </Dialog.Popup>
                </Dialog.Portal>
              </Dialog.Root>
            );
          })}

          {/* Decorative Orbital Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 border-dashed"
              style={{ width: radius * 2, height: radius * 2 }}
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
              style={{ width: radius * 2 + 40, height: radius * 2 + 40 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
