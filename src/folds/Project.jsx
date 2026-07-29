import React from 'react';
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';

export default function Project({ renderCards }) {
  return (
    <section id="project" className="h-[100dvh] snap-start w-full flex items-center bg-zinc-950 text-zinc-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">The New Church Project</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We are embarking on a journey to build a new sanctuary for the Tengnoupal Christian Church. 
            Here are the proposed 3D renderings and structural perspectives.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderCards?.map((card, i) => (
            <SpotlightCard key={i} className="h-full bg-zinc-900/50 border-zinc-800" spotlightColor="rgba(16, 185, 129, 0.2)">
              <div className="h-full flex flex-col justify-between min-h-[160px] z-10 relative">
                <h3 className="text-xl font-medium text-zinc-50 mb-4">{card.title}</h3>
                <p className="text-sm text-zinc-400">{card.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
