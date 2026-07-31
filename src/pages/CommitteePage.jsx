import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ImageModal from '../components/ImageModal';
import data from '../data.json';

export default function CommitteePage() {
  const committee = data.project?.committee || [];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-forest-900 text-bone-50 p-6 md:p-12 selection:bg-amber-accent selection:text-forest-900 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-amber-accent mb-2">Church Building Committee</h1>
            <p className="text-bone-200/70">The dedicated team leading our New Church Construction Project</p>
          </div>
          <Link to="/#nav-project" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-bone-50 px-6 py-3 rounded-full font-bold transition-colors w-fit border border-white/10">
            <ArrowLeft size={20} /> Back to Project
          </Link>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {committee.map((member, idx) => (
            <div key={idx} className="relative rounded-3xl overflow-hidden glass p-6 border border-white/5 shadow-2xl bg-forest-800 flex flex-col items-center text-center group">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-accent/50 group-hover:bg-amber-accent transition-colors"></div>
              
              {member.img ? (
                <ImageModal 
                  src={member.img} 
                  alt={member.name} 
                  className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full mb-6 border-4 border-white/10 shadow-xl"
                />
              ) : (
                <div className="w-40 h-40 md:w-48 md:h-48 bg-forest-900 rounded-full mb-6 border-4 border-white/10 shadow-xl flex items-center justify-center">
                  <span className="text-5xl text-amber-accent/30 font-serif">{member.name.charAt(4)}</span>
                </div>
              )}
              
              <h4 className="font-serif text-xl md:text-2xl text-bone-50 font-medium leading-tight">{member.name}</h4>
              <p className="text-amber-accent text-sm uppercase tracking-widest mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
