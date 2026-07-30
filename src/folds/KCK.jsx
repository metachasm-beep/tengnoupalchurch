import React from 'react';
import { UsersThree, BookOpenText, Users } from '@phosphor-icons/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function KCK({ content }) {
  return (
    <section id="kck" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
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
              <TabsTrigger value="history" className="flex-1 rounded-full data-[state=active]:bg-amber-accent data-[state=active]:text-forest-900">
                <BookOpenText className="mr-2" /> History
              </TabsTrigger>
              <TabsTrigger value="leadership" className="flex-1 rounded-full data-[state=active]:bg-amber-accent data-[state=active]:text-forest-900">
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
                <div className="glass p-5 rounded-2xl border border-white/5 flex-1 overflow-y-auto max-h-[60vh] custom-scrollbar">
                  <h3 className="font-sans text-xs tracking-[0.2em] text-amber-accent uppercase font-medium mb-4 text-center">2025-2026 kum sunga Lamkai ho</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Lamkai</h4>
                      <ul className="space-y-2">
                        {content?.lamkai?.map((m, i) => (
                          <li key={i} className="flex flex-col bg-white/5 p-2 rounded-lg">
                            <span className="text-sm font-medium">{m.name}</span>
                            <span className="text-[10px] text-amber-accent/80">{m.role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Lhacha</h4>
                      <ul className="space-y-2">
                        {content?.lhacha?.map((m, i) => (
                          <li key={i} className="flex flex-col bg-white/5 p-2 rounded-lg">
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
            <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5">
              <img 
                src="/assets/kck_image.webp" 
                alt="Kuki Christian Khangthah" 
                className="w-full h-auto max-h-[250px] rounded-xl shadow-lg object-cover"
              />
            </div>

            <div className="glass p-6 rounded-2xl border border-white/5 flex-1 overflow-y-auto max-h-[40vh] custom-scrollbar">
              <h3 className="font-sans text-xs tracking-[0.2em] text-amber-accent uppercase font-medium mb-4 text-center">2025-2026 kum sunga Lamkai ho</h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Lamkai</h4>
                  <ul className="space-y-2">
                    {content?.lamkai?.map((m, i) => (
                      <li key={i} className="flex flex-col bg-white/5 p-2 rounded-lg">
                        <span className="text-sm font-medium">{m.name}</span>
                        <span className="text-[10px] text-amber-accent/80">{m.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Lhacha</h4>
                  <ul className="space-y-2">
                    {content?.lhacha?.map((m, i) => (
                      <li key={i} className="flex flex-col bg-white/5 p-2 rounded-lg">
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
