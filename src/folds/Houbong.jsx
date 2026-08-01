import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpenText, Users, CalendarHeart, GlobeHemisphereWest, ImageSquare, X, UserCircle } from '@phosphor-icons/react';
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
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    { id: 'history', number: '01', label: 'History', bg: '/assets/houbong_1.jpeg', filter: 'hue-rotate-15' },
    { id: 'leaders', number: '02', label: 'Leaders', bg: '/assets/houbong_lamkai.webp', filter: 'grayscale-[20%]' },
    { id: 'gms', number: '03', label: 'GMS Mission', bg: '/assets/houbong_1.jpeg', filter: 'sepia-[50%] hue-rotate-180' },
    { id: 'events', number: '04', label: 'Events', bg: '/assets/houbong_1.jpeg', filter: 'hue-rotate-[220deg]' },
    { id: 'gallery', number: '05', label: 'Gallery', bg: '/assets/houbong_lamkai.webp', filter: 'contrast-125 saturate-150' },
  ];

  const getModalContent = (id) => {
    switch (id) {
      case 'history':
        return (
          <div className="space-y-4 text-bone-100/90 font-light leading-relaxed text-base md:text-lg">
            {content?.history?.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        );
      case 'gms':
        return (
          <div className="space-y-4 text-bone-100/90 font-light leading-relaxed text-base md:text-lg">
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
    <section id="houbong" className="min-h-[100dvh] w-full bg-forest-900 text-bone-50 relative overflow-hidden flex flex-col justify-center">
      
      {/* Background Images Crossfade */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            key={hoveredNode.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <img 
              src={hoveredNode.bg} 
              alt="" 
              className={`w-full h-full object-cover mix-blend-luminosity opacity-30 ${hoveredNode.filter}`} 
            />
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,21,14,1)_80%)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Default Base Background */}
      <div className="absolute inset-0 z-[-1] bg-forest-900" />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-amber-accent/5 to-transparent pointer-events-none z-0" />

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full h-full flex flex-col lg:flex-row justify-between items-start lg:items-center py-20 lg:py-0">
        
        {/* Left Side: Title */}
        <div className="w-full lg:w-1/3 flex flex-col mb-16 lg:mb-0">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-bone-50 leading-none drop-shadow-xl">
            {content?.title || "Tengnoupal\nHoubung"}
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-amber-accent/50" />
            <p className="text-xs tracking-[0.3em] uppercase text-amber-accent font-semibold">Explore The Fold</p>
          </div>
        </div>

        {/* Right Side: Editorial List */}
        <div className="w-full lg:w-2/3 flex flex-col items-start lg:items-end gap-2 lg:gap-4">
          {nodes.map((node, i) => (
            <Dialog.Root key={node.id}>
              <Dialog.Trigger asChild>
                <div 
                  className="group cursor-pointer flex items-baseline gap-4 md:gap-8 outline-none border-b lg:border-b-0 border-white/10 lg:border-transparent w-full lg:w-auto pb-4 lg:pb-0"
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onTouchStart={() => setHoveredNode(node)}
                >
                  <span className="font-sans text-sm md:text-xl font-light text-bone-200/50 group-hover:text-amber-accent transition-colors duration-500">
                    {node.number}
                  </span>
                  <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-bone-100/70 group-hover:text-bone-50 transition-all duration-500 transform group-hover:translate-x-4 lg:group-hover:-translate-x-6 origin-right italic group-hover:not-italic">
                    {node.label}
                  </h3>
                </div>
              </Dialog.Trigger>
              
              <Dialog.Portal>
                <Dialog.Backdrop className="fixed inset-0 isolate z-[90] bg-black/80 backdrop-blur-md duration-300 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
                <Dialog.Popup className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl z-[100] flex flex-col glass-dark border border-white/10 rounded-[2rem] p-6 md:p-10 outline-none duration-300 data-open:animate-in data-open:zoom-in-95 data-open:fade-in-0 data-closed:animate-out data-closed:zoom-out-95 data-closed:fade-out-0 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-y-auto custom-scrollbar max-h-[85vh]">
                  <div className="flex justify-between items-center mb-8 shrink-0 border-b border-white/5 pb-4">
                    <h3 className="font-serif text-2xl md:text-4xl text-bone-50 flex items-center gap-4">
                      <span className="text-amber-accent/50 font-sans text-sm tracking-[0.2em]">{node.number}</span>
                      {node.label}
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
          ))}
        </div>

      </div>
    </section>
  );
}
