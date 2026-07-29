import React, { useMemo } from 'react';
import Aurora from './components/Aurora/Aurora';
import BlurText from './components/BlurText/BlurText';
import SpotlightCard from './components/SpotlightCard/SpotlightCard';
import Masonry from './components/Masonry/Masonry';
import data from './data.json';
import { MapPin, Calendar } from '@phosphor-icons/react';

// Dynamically import all gallery images
const galleryModules = import.meta.glob('/public/assets/gallery/*.{jpeg,jpg,png}', { eager: true });
const galleryImages = Object.keys(galleryModules).map((key, index) => {
  return { 
    id: index + 1, 
    img: key.replace('/public', ''),
    height: 400 + Math.random() * 400 // random height for masonry effect
  };
});

function App() {
  const { docx_content, pdf_content } = data;
  
  const renderCards = [
    { title: "Front View", desc: "Main entrance and facade" },
    { title: "Axiometric View", desc: "Overall structural perspective" },
    { title: "Sectional & Interior View", desc: "Inner sanctum layout" },
    { title: "Environment Rendering", desc: "Integration with surroundings" }
  ];

  return (
    <div className="min-h-[100dvh] bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 object-contain drop-shadow-md" />
            <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Tengnoupal Christian Church</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-900 dark:text-zinc-300">
            <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#sermons" className="hover:text-emerald-600 transition-colors">Sermons</a>
            <a href="#project" className="hover:text-emerald-600 transition-colors">Building Project</a>
            <a href="#gallery" className="hover:text-emerald-600 transition-colors">Gallery</a>
          </div>
          <button className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium hover:scale-[0.98] transition-transform">
            Visit Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
          <Aurora colorStops={['#10b981', '#059669', '#047857']} blend={0.8} amplitude={1.2} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
              <MapPin weight="bold" /> Tengnoupal, Manipur
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-zinc-900 dark:text-zinc-50">
              <BlurText 
                text="A place of worship, community, and grace." 
                delay={50} 
                className="block"
              />
            </h1>
            
            <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-[40ch] leading-relaxed">
              Welcome to Tengnoupal Christian Church. Join us in our journey of faith, love, and building a stronger community.
            </p>
            
            <div className="flex gap-4 pt-4">
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors hover:scale-[0.98]">
                Sunday Services
              </button>
              <button className="glass px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors">
                Our Vision
              </button>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 to-transparent rounded-3xl mix-blend-multiply dark:mix-blend-screen" />
            <img 
              src="/assets/logo.png" 
              alt="Tengnoupal Christian Church Logo" 
              className="w-full h-full object-contain drop-shadow-2xl p-12"
            />
          </div>
        </div>
      </section>

      {/* Sermon Section (Split Screen) */}
      <section id="sermons" className="py-32 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5 flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 dark:text-zinc-50">Latest Message</h2>
              <div className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  <Calendar weight="bold" /> Haggai 1:1-15 & Ezra 1-4
                </div>
                <h3 className="text-2xl font-medium text-zinc-900 dark:text-zinc-50 leading-snug">
                  Pathen intheng gelkhoh masat pendia kouna awgin
                </h3>
                <p className="leading-relaxed border-l-2 border-emerald-500 pl-4 italic">
                  "Vo kamite idia nangho in phatah tah a chenga, kei Houin asesa kijam ham?"
                </p>
              </div>
            </div>
            
            <div className="md:col-span-7 relative">
              <div className="glass-dark p-8 md:p-12 rounded-[2rem] h-[600px] overflow-y-auto custom-scrollbar shadow-xl bg-zinc-50/50 dark:bg-zinc-900/50">
                <div className="max-w-prose space-y-6">
                  {docx_content.split('\n\n').filter(Boolean).map((para, i) => (
                    <p key={i} className="leading-relaxed text-zinc-700 dark:text-zinc-300 text-lg">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Project */}
      <section id="project" className="py-32 bg-zinc-950 text-zinc-50 relative overflow-hidden">
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
            {renderCards.map((card, i) => (
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

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tighter text-zinc-900 dark:text-zinc-50">Community & Construction</h2>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 h-[800px] relative">
          <Masonry data={galleryImages.slice(0, 15)} items={galleryImages.slice(0, 15)} blurToFocus={false} />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-500">
        <p>© 2026 Tengnoupal Christian Church. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
