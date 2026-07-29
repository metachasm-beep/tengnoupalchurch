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
    <section id="committee" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col gap-6 md:gap-20">
        
        {/* History text moved to Foundation.jsx */}

        {/* Committee Grid */}
        <div className="mt-8 md:mt-0">
          <h3 className="font-sans text-xs md:text-base tracking-[0.2em] text-bone-200 uppercase font-medium mb-4 md:mb-8 text-center md:text-left">
            {content?.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
            {content?.members?.map((member, i) => (
              <div key={i} className="glass p-2.5 px-4 md:p-5 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 hover:bg-white/10 transition-all border border-white/5 hover:border-amber-accent/30 group">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 text-amber-accent group-hover:scale-110 transition-transform">
                  <User weight="fill" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-medium text-bone-50 text-[13px] md:text-base leading-tight">{member.name}</h4>
                  <p className="text-amber-accent/80 text-[10px] md:text-sm font-medium mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
