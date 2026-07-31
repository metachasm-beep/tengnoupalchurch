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
          <CarouselItem className="h-full flex items-center justify-center p-4 sm:p-6 md:p-16 flex-shrink-0 pl-0">
            <Card className="max-w-3xl w-full flex flex-col gap-5 sm:gap-6 md:gap-8 bg-forest-800/50 p-6 md:p-12 rounded-3xl border-white/5 shadow-2xl relative overflow-hidden group backdrop-blur-md text-bone-50">
              <CardContent className="p-0 z-10 flex flex-col gap-6 md:gap-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight relative z-10 text-bone-50 leading-[1.1]">
                  {content?.title}
                </h2>
                <p className="text-bone-100/90 text-base sm:text-lg md:text-xl leading-relaxed relative z-10 font-light max-w-2xl">
                  {content?.description}
                </p>
                
                <div className="mt-8 relative z-10 flex flex-col items-start gap-6 w-full">
                  
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Link to="/project-committee" className="flex-1 group flex flex-col items-start justify-center gap-2 bg-forest-900/60 hover:bg-forest-900/80 border border-white/10 hover:border-amber-accent/50 p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-300">
                      <div className="flex items-center gap-3 text-amber-accent mb-2">
                        <Hammer weight="bold" size={24} className="group-hover:rotate-12 transition-transform" />
                        <span className="font-serif text-xl font-medium">The Committee</span>
                      </div>
                      <p className="text-bone-200/70 text-sm font-light">Meet the dedicated team leading our church building project.</p>
                    </Link>

                    <Link to="/project-timeline" className="flex-1 group flex flex-col items-start justify-center gap-2 bg-amber-accent/10 hover:bg-amber-accent/20 border border-amber-accent/20 hover:border-amber-accent/50 p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-300">
                      <div className="flex items-center gap-3 text-amber-accent mb-2">
                        <Play weight="bold" size={24} className="group-hover:translate-x-1 transition-transform" />
                        <span className="font-serif text-xl font-medium">Construction Timeline</span>
                      </div>
                      <p className="text-bone-200/70 text-sm font-light">Track our progress with photos, videos, and milestones.</p>
                    </Link>
                  </div>

                  <p className="text-sm tracking-widest uppercase text-amber-accent/70 font-semibold flex items-center gap-4 mt-4">
                    <span>Swipe to view 3D renders</span>
                    <span className="w-12 h-[1px] bg-amber-accent/30"></span>
                    <span className="animate-pulse">→</span>
                  </p>
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
                <div className="absolute top-0 left-0 w-full p-6 sm:p-8 md:p-16 pt-20 sm:pt-24 flex flex-col items-center text-center z-20 pointer-events-none">
                  <h3 className="font-serif text-3xl md:text-5xl font-medium text-bone-50 mb-3 drop-shadow-xl">{card.title}</h3>
                  <p className="text-base md:text-xl text-bone-100 drop-shadow-lg">{card.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
          
        </CarouselContent>
        
        <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-16 md:bottom-16 md:right-32 flex gap-3 sm:gap-4 z-50">
          <CarouselPrevious className="relative static translate-x-0 translate-y-0 h-12 w-12 bg-forest-800/80 border-white/10 text-bone-50 hover:bg-amber-accent hover:text-forest-900 backdrop-blur transition-all" />
          <CarouselNext className="relative static translate-x-0 translate-y-0 h-12 w-12 bg-forest-800/80 border-white/10 text-bone-50 hover:bg-amber-accent hover:text-forest-900 backdrop-blur transition-all" />
        </div>
      </Carousel>
    </section>
  );
}
