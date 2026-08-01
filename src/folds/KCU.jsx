import React from 'react';
import { Calendar, UserCircle } from '@phosphor-icons/react';
import ScrollFloat from '../components/ui/ScrollFloat';

export default function KCU({ content }) {
  return (
    <section id="kcu" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
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
          K.C.U
        </ScrollFloat>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 w-full flex flex-col gap-8 md:gap-12 text-center items-center">
        
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-bone-50">
          {content?.title}
        </h2>
        <div className="w-full max-w-2xl text-bone-100/90 text-sm md:text-base opacity-90 mt-4 md:mt-8 text-left space-y-4">
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-4 shadow-xl">
            {content?.history?.map((para, i) => (
              <p key={i} className="leading-relaxed font-light">
                {para}
              </p>
            ))}
          </div>
        </div>

          {content?.committee && (
            <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 mt-8 shadow-xl w-full text-left">
              <h3 className="text-2xl font-serif text-amber-accent mb-6 text-center">2025-2026 Committee</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm tracking-[0.2em] uppercase text-bone-200/50 mb-4 font-semibold">Leaders</h4>
                  <div className="space-y-4">
                    {content.committee.leaders?.map((leader, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-bone-50 font-medium">{leader.name}</span>
                        <span className="text-sm text-amber-accent/80">{leader.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm tracking-[0.2em] uppercase text-bone-200/50 mb-4 font-semibold">Members</h4>
                  <div className="space-y-2">
                    {content.committee.members?.map((member, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/50"></div>
                        <span className="text-bone-100">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {content.committee.lhacha?.length > 0 && (
                <div className="mt-6 border-t border-white/10 pt-6">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-bone-200/50 mb-4 font-semibold text-center">Lhacha</h4>
                  <div className="flex justify-center gap-4 flex-wrap">
                    {content.committee.lhacha.map((l, i) => (
                      <span key={i} className="bg-white/5 px-4 py-2 rounded-full text-sm font-medium border border-white/10">{l.name}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

      </div>
    </section>
  );
}
