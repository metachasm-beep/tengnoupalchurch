import React from 'react';
import { User, UsersThree } from '@phosphor-icons/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function Committee({ content }) {
  return (
    <section id="committee" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col gap-6 md:gap-20">
        
        <div className="mt-8 md:mt-0">
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-bone-50 mb-6 md:mb-12 text-center md:text-left font-medium">
            {content?.title}
          </h2>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
            {content?.members?.map((member, i) => (
              <Card key={i} className="bg-white/5 p-2.5 px-4 md:p-5 rounded-xl md:rounded-2xl border border-white/5 hover:border-amber-accent/30 group hover:bg-white/10 transition-all backdrop-blur-md shadow-lg text-bone-50">
                <CardContent className="p-0 flex items-center gap-3 md:gap-4 w-full">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 text-amber-accent group-hover:scale-110 transition-transform">
                    <User weight="fill" className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <CardTitle className="font-medium text-bone-50 text-[13px] md:text-base leading-tight">{member.name}</CardTitle>
                    <CardDescription className="text-amber-accent/80 text-[10px] md:text-sm font-medium mt-0.5">{member.role}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex flex-col gap-3">
            {content?.members?.slice(0, 2).map((member, i) => (
              <Card key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 text-bone-50 backdrop-blur-md shadow-lg">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 text-amber-accent">
                    <User weight="fill" className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <CardTitle className="font-medium text-bone-50 text-sm leading-tight">{member.name}</CardTitle>
                    <CardDescription className="text-amber-accent/80 text-xs font-medium mt-0.5">{member.role}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center justify-center gap-2 mt-4 bg-amber-accent text-forest-900 px-6 py-3 rounded-full font-bold w-full">
                  <UsersThree weight="bold" size={20} /> View Full Committee
                </button>
              </DialogTrigger>
              <DialogContent className="bg-forest-900 border-white/10 text-bone-50 w-[90vw] rounded-2xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-left text-2xl font-serif">{content?.title}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-3 mt-4">
                  {content?.members?.map((member, i) => (
                    <Card key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 text-bone-50 backdrop-blur-md">
                      <CardContent className="p-0 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 text-amber-accent">
                          <User weight="fill" className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <CardTitle className="font-medium text-bone-50 text-sm leading-tight">{member.name}</CardTitle>
                          <CardDescription className="text-amber-accent/80 text-xs font-medium mt-0.5">{member.role}</CardDescription>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
