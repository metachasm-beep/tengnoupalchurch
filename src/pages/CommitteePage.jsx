import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ImageModal from '../components/ImageModal';
import SpotlightCard from '../components/ui/SpotlightCard';
import data from '../data.json';

export default function CommitteePage() {
  const committee = data.project?.committee || [];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-forest-900 text-bone-50 p-4 sm:p-6 md:p-12 selection:bg-amber-accent selection:text-forest-900 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-amber-accent mb-2">Church Building Committee</h1>
            <p className="text-bone-200/70">The dedicated team leading our New Church Construction Project</p>
          </div>
          <Link to="/#nav-project" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-bone-50 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-bold transition-colors w-fit border border-white/10">
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" /> Back to Project
          </Link>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {committee.map((member, idx) => (
              <SpotlightCard key={idx} className="relative rounded-3xl overflow-hidden glass p-4 border border-white/5 shadow-2xl bg-forest-800 flex flex-col items-center justify-center text-center group min-h-[180px]" spotlightColor="rgba(255, 183, 77, 0.15)">
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-accent/50 group-hover:bg-amber-accent transition-colors"></div>
                
                {member.img ? (
                  <ImageModal 
                    src={member.img} 
                    alt={member.name} 
                    caption={`${member.name} - ${member.role}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full mb-3 md:mb-4 border-2 border-white/10 shadow-xl shrink-0"
                    style={member.name === 'Mr. Ph. Lunkhogin Mate' ? { objectPosition: 'center 20%' } : {}}
                  />
                ) : (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-forest-900 rounded-full mb-3 md:mb-4 border-2 border-white/10 shadow-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl sm:text-3xl text-amber-accent/30 font-serif">{member.name.charAt(4)}</span>
                  </div>
                )}
                
                <h4 className="font-serif text-sm md:text-base text-bone-50 font-medium leading-tight line-clamp-2">{member.name}</h4>
                <p className="text-amber-accent text-[10px] md:text-xs uppercase tracking-widest mt-1 md:mt-2">{member.role}</p>
              </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}
