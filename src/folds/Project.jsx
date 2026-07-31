import React from 'react';
import { Link } from 'react-router-dom';
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
import { Hammer, Play } from '@phosphor-icons/react';
import { getConstructionImages, getProjectVideos } from '../stores/AssetStore';
import ImageModal from '../components/ImageModal';

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
                    <Link to="/project-committee" className="flex items-center justify-center gap-2 bg-forest-900/40 hover:bg-forest-900/60 border border-white/20 text-bone-50 px-6 py-3 rounded-full font-bold transition-colors">
                          <Hammer weight="bold" size={20} /> Committee
                        </Link>

                    {/* Construction Timeline Button */}
                    <Link to="/project-timeline" className="flex items-center justify-center gap-2 bg-amber-accent/10 hover:bg-amber-accent/20 border border-amber-accent/20 text-amber-accent px-6 py-3 rounded-full font-bold transition-colors">
                          <Hammer weight="bold" size={20} /> View Project Timeline
                        </Link>
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
