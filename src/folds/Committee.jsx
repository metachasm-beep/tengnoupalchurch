import React from 'react';
import { User } from '@phosphor-icons/react';

const members = [
  { name: 'Mr. S. Tongthang Haokip', role: 'Chairman' },
  { name: 'Mr. Ph Lunkhogin Mate', role: 'Secretary' },
  { name: 'Mr. Upa T. Seikholet Baite', role: 'Member' },
  { name: 'Mr. Ph Jangkholet Mate', role: 'Member' },
  { name: 'Mr. S. Jamkhokhai Mate', role: 'Member' },
  { name: 'Mr. Ch Ngamson Mate', role: 'Member' },
  { name: 'Mr. H. Jamkhogin Mate', role: 'Member' },
  { name: 'Mr. T. Hemkholen Baite', role: 'Member' },
  { name: 'Mr. H. Daniel Thangtinlen Mate', role: 'Member' },
];

export default function Committee({ content }) {
  return (
    <section id="committee" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col gap-12 md:gap-20">
        
        {/* History text moved to Foundation.jsx */}

        {/* Committee Grid */}
        <div>
          <h3 className="font-sans text-sm md:text-base tracking-[0.2em] text-bone-200 uppercase font-medium mb-4 md:mb-8">
            {content?.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 overflow-y-auto max-h-[65vh] md:max-h-none pr-2 pb-8 md:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {content?.members?.map((member, i) => (
              <div key={i} className="glass p-4 md:p-5 rounded-2xl flex items-center gap-3 md:gap-4 hover:bg-white/10 transition-all border border-white/5 hover:border-amber-accent/30 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 text-amber-accent group-hover:scale-110 transition-transform">
                  <User weight="fill" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-bone-50 text-xs md:text-base">{member.name}</h4>
                  <p className="text-amber-accent/80 text-[10px] md:text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
