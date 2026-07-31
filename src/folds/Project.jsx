import React, { useState, useMemo } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Hammer, Play } from '@phosphor-icons/react';
import { getConstructionImages, getProjectVideos } from '../stores/AssetStore';
import ImageModal from '../components/ImageModal';

function TimelineView({ timeline }) {
  const years = useMemo(() => {
    if (!timeline) return [];
    const yearSet = new Set();
    timeline.forEach(t => {
      if (t.date === 'General Progress' || t.date === 'Notice' || t.date.includes('General') || t.date.includes('Notice')) {
         yearSet.add('General');
         t.year = 'General';
      } else {
         const match = t.date.match(/\d{4}/);
         if (match) {
           yearSet.add(match[0]);
           t.year = match[0];
         } else {
           yearSet.add('General');
           t.year = 'General';
         }
      }
    });
    return Array.from(yearSet).sort((a, b) => a === 'General' ? 1 : b === 'General' ? -1 : a - b);
  }, [timeline]);

  const [activeYear, setActiveYear] = useState(years[0] || 'General');

  const events = useMemo(() => {
    return (timeline || []).filter(t => t.year === activeYear);
  }, [timeline, activeYear]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-4 border-b border-white/10 pb-4 mb-6 overflow-x-auto shrink-0">
        {years.map(year => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-6 py-2 rounded-full font-serif transition-colors whitespace-nowrap ${
              activeYear === year 
                ? 'bg-amber-accent text-forest-900 font-bold shadow-[0_0_15px_rgba(255,183,77,0.3)]' 
                : 'bg-white/5 text-bone-200 hover:bg-white/10'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-[400px]">
        {events.length > 0 ? (
          <Carousel opts={{ align: "start", loop: false }} className="w-full h-full">
            <CarouselContent className="-ml-4 h-full">
              {events.map((event, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                  <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl p-6">
                    <span className="text-amber-accent font-bold tracking-wider uppercase text-xs mb-2 block">{event.date}</span>
                    <h3 className="font-serif text-lg font-medium text-bone-50 mb-4 flex-1">{event.caption}</h3>
                    
                    {/* Event Images / Videos Carousel */}
                    {(event.images?.length > 0 || event.videos?.length > 0) && (
                      <div className="w-full mt-auto glass p-2 rounded-2xl border border-white/5 shadow-xl bg-black/20">
                        <Carousel opts={{ align: "start", loop: true }} className="w-full">
                          <CarouselContent className="-ml-2">
                            {event.videos?.map((vid, vIdx) => (
                              <CarouselItem key={`v-${vIdx}`} className="pl-2 basis-full">
                                <video src={vid} controls className="w-full h-48 object-cover rounded-xl border border-white/5 bg-black" />
                              </CarouselItem>
                            ))}
                            {event.images?.map((img, iIdx) => (
                              <CarouselItem key={iIdx} className="pl-2 basis-full">
                                <ImageModal 
                                  src={img} 
                                  alt={event.caption} 
                                  className="w-full h-48 object-cover rounded-xl border border-white/5" 
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          {(event.images?.length + (event.videos?.length || 0)) > 1 && (
                            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
                              <CarouselPrevious className="relative static translate-x-0 translate-y-0 h-8 w-8 bg-forest-900/50 border-none pointer-events-auto hover:bg-amber-accent hover:text-forest-900" />
                              <CarouselNext className="relative static translate-x-0 translate-y-0 h-8 w-8 bg-forest-900/50 border-none pointer-events-auto hover:bg-amber-accent hover:text-forest-900" />
                            </div>
                          )}
                        </Carousel>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {events.length > 3 && (
              <div className="flex justify-center gap-4 mt-6">
                <CarouselPrevious className="relative static translate-x-0 translate-y-0 bg-white/5 border-white/10 hover:bg-amber-accent hover:text-forest-900" />
                <CarouselNext className="relative static translate-x-0 translate-y-0 bg-white/5 border-white/10 hover:bg-amber-accent hover:text-forest-900" />
              </div>
            )}
          </Carousel>
        ) : (
          <div className="flex items-center justify-center h-full text-bone-200/50 font-serif text-xl">
            No events found for {activeYear}.
          </div>
        )}
      </div>
    </div>
  );
}

export default function Project({ content, renderCards }) {
  const constructionImages = getConstructionImages();
  const projectVideos = getProjectVideos();
  
  // Basic column split for masonry (same logic used in Gallery)
  const columns = { col1: [], col2: [], col3: [] };
  constructionImages.forEach((image, i) => {
    if (i % 3 === 0) columns.col1.push(image);
    else if (i % 3 === 1) columns.col2.push(image);
    else columns.col3.push(image);
  });
  return (
    <section id="project" className="relative h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full relative z-10"
      >
        <CarouselContent className="h-[100dvh] m-0">
          
          {/* Slide 1: Text Intro */}
          <CarouselItem className="h-full flex items-center justify-center p-6 md:p-16 flex-shrink-0 pl-0">
            <Card className="max-w-3xl w-full flex flex-col gap-6 md:gap-8 bg-forest-800/50 p-8 md:p-12 rounded-3xl border-white/5 shadow-2xl relative overflow-hidden group backdrop-blur-md text-bone-50">
              <CardContent className="p-0 z-10 flex flex-col gap-6 md:gap-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight relative z-10 text-bone-50 leading-[1.1]">
                  {content?.title}
                </h2>
                <p className="text-bone-100/90 text-lg md:text-xl leading-relaxed relative z-10 font-light max-w-2xl">
                  {content?.description}
                </p>
                
                <div className="mt-8 relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                  <p className="text-sm tracking-widest uppercase text-amber-accent font-semibold flex items-center gap-4">
                    <span>Swipe to view renders</span>
                    <span className="w-12 h-[1px] bg-amber-accent/50"></span>
                    <span className="animate-pulse">→</span>
                  </p>
                  
                  <div className="md:ml-auto flex flex-col sm:flex-row gap-4">
                    {/* Watch Videos Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center justify-center gap-2 bg-forest-900/40 hover:bg-forest-900/60 border border-white/20 text-bone-50 px-6 py-3 rounded-full font-bold transition-colors">
                          <Play weight="bold" size={20} /> Watch Video Updates
                        </button>
                      </DialogTrigger>
                      <DialogContent className="bg-forest-900 border-white/10 text-bone-50 max-w-5xl w-[95vw] h-[80vh] rounded-3xl overflow-hidden flex flex-col p-0">
                        <DialogHeader className="p-6 pb-2">
                          <DialogTitle className="text-left text-2xl md:text-3xl font-serif text-amber-accent">Video Updates</DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 w-full relative">
                          <Carousel opts={{ align: "center", loop: true }} className="w-full h-full pb-16">
                            <CarouselContent className="h-full">
                              {projectVideos.map((video) => (
                                <CarouselItem key={video.id} className="h-full flex flex-col items-center justify-center p-4">
                                  <div className="w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <video 
                                      src={video.url} 
                                      controls 
                                      className="w-full h-full object-contain"
                                      preload="metadata"
                                    />
                                  </div>
                                  <p className="mt-4 text-bone-100 font-medium text-center px-4">{video.title}</p>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
                              <CarouselPrevious className="relative static translate-x-0 translate-y-0 h-10 w-10 bg-forest-800 border-white/10 text-bone-50 hover:bg-amber-accent hover:text-forest-900" />
                              <CarouselNext className="relative static translate-x-0 translate-y-0 h-10 w-10 bg-forest-800 border-white/10 text-bone-50 hover:bg-amber-accent hover:text-forest-900" />
                            </div>
                          </Carousel>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Church Building Committee Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center justify-center gap-2 bg-forest-900/40 hover:bg-forest-900/60 border border-white/20 text-bone-50 px-6 py-3 rounded-full font-bold transition-colors">
                          <Hammer weight="bold" size={20} /> Committee
                        </button>
                      </DialogTrigger>
                      <DialogContent className="bg-forest-900 border-white/10 text-bone-50 max-w-5xl w-[95vw] h-[80vh] rounded-3xl overflow-y-auto">
                        <DialogHeader className="p-6 pb-2">
                          <DialogTitle className="text-left text-2xl md:text-3xl font-serif text-amber-accent">Church Building Committee</DialogTitle>
                        </DialogHeader>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          {content?.committee?.map((member, idx) => (
                            <div key={idx} className="relative rounded-2xl overflow-hidden glass p-4 border border-white/5 shadow-xl bg-forest-800 flex flex-col items-center text-center">
                              {member.img ? (
                                <ImageModal 
                                  src={member.img} 
                                  alt={member.name} 
                                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-4 border-4 border-white/10"
                                />
                              ) : (
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-forest-900 rounded-full mb-4 border-4 border-white/10 flex items-center justify-center">
                                  <span className="text-4xl text-amber-accent/50 font-serif">{member.name.charAt(4)}</span>
                                </div>
                              )}
                              <h4 className="font-serif text-base md:text-lg text-bone-50 font-medium">{member.name}</h4>
                              <p className="text-amber-accent/80 text-xs md:text-sm uppercase tracking-wider mt-1">{member.role}</p>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Construction Timeline Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center justify-center gap-2 bg-amber-accent/10 hover:bg-amber-accent/20 border border-amber-accent/20 text-amber-accent px-6 py-3 rounded-full font-bold transition-colors">
                          <Hammer weight="bold" size={20} /> View Project Timeline
                        </button>
                      </DialogTrigger>
                      <DialogContent className="bg-forest-900 border-white/10 text-bone-50 max-w-7xl w-[95vw] h-[90vh] rounded-3xl overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-left text-2xl md:text-4xl font-serif text-amber-accent mb-4">Construction Timeline</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 pb-12 relative flex-1 min-h-0">
                          <TimelineView timeline={content?.timeline} />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          
          {/* Slide 2+: Renders */}
          {renderCards?.map((card, i) => (
            <CarouselItem key={i} className="h-full flex-shrink-0 pl-0">
              <div className="relative w-full h-full group bg-black flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-forest-900/90 via-forest-900/10 to-transparent z-10 pointer-events-none" />
                <ImageModal 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-[100dvh] object-cover relative z-0 transition-transform duration-[10s] group-hover:scale-105" 
                />
                <div className="absolute top-0 left-0 w-full p-8 md:p-16 pt-24 md:pt-24 flex flex-col items-center text-center z-20 pointer-events-none">
                  <h3 className="font-serif text-3xl md:text-5xl font-medium text-bone-50 mb-3 drop-shadow-xl">{card.title}</h3>
                  <p className="text-base md:text-xl text-bone-100 drop-shadow-lg">{card.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
          
        </CarouselContent>
        
        <div className="absolute bottom-12 right-24 md:bottom-16 md:right-32 flex gap-4 z-50">
          <CarouselPrevious className="relative static translate-x-0 translate-y-0 h-12 w-12 bg-forest-800/80 border-white/10 text-bone-50 hover:bg-amber-accent hover:text-forest-900 backdrop-blur transition-all" />
          <CarouselNext className="relative static translate-x-0 translate-y-0 h-12 w-12 bg-forest-800/80 border-white/10 text-bone-50 hover:bg-amber-accent hover:text-forest-900 backdrop-blur transition-all" />
        </div>
      </Carousel>
    </section>
  );
}
