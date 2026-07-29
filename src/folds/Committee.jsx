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

export default function Committee() {
  return (
    <section id="committee" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col gap-12 md:gap-20">
        
        {/* History Text */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-amber-accent uppercase mb-6">
             Our Foundation (1989 & 2023)
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
            Building Our Foundation, <br className="hidden md:block"/> Generation to Generation.
          </h2>
          <div className="space-y-6 text-bone-100 text-base md:text-lg leading-relaxed border-l-2 border-amber-accent/50 pl-6 md:pl-8">
            <p className="italic font-serif text-lg md:text-xl text-bone-50 opacity-90">
              Achesa Pakai kum 1989 kum a amasa pen a dinga Tengnoupal Christian Church houin foundation stone ana kitung doh a dam leh bit kei a akisah doh nunga 30th December, 1997 a ana kilut nunga anichan na ading a houin sah nadingin, tukum 2023 in vel ni channa dingin houin sah pat ding thei a ium tah jeh un Chung Pathen thangvah na ipe uve.
            </p>
            <p className="text-sm md:text-base opacity-80 uppercase tracking-widest font-sans pt-2">
              Achesa 22nd January, 2023 nikho in anuiya amin hung kitah lang chengsi hi Church Building Committee ding in lhendoh ahi tauvin chuleh lhandoh na kin jong ana kinei tan ahi.
            </p>
          </div>
        </div>

        {/* Committee Grid */}
        <div>
          <h3 className="font-sans text-sm md:text-base tracking-[0.2em] text-bone-200 uppercase font-medium mb-8">
            Church Building Construction Committee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {members.map((member, i) => (
              <div key={i} className="glass p-5 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all border border-white/5 hover:border-amber-accent/30 group">
                <div className="w-12 h-12 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 text-amber-accent group-hover:scale-110 transition-transform">
                  <User weight="fill" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-bone-50 text-sm md:text-base">{member.name}</h4>
                  <p className="text-amber-accent/80 text-xs md:text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
