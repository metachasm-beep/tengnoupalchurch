import React from 'react';
import { useScrollState } from './ScrollProvider';

import Magnet from './ui/Magnet';

export const sections = [
  { id: 'nav-hero', label: 'Welcome' },
  { id: 'nav-sermons', label: 'Sermons' },
  { id: 'nav-project', label: 'Project' },
  { id: 'nav-foundation', label: 'History' },
  { id: 'nav-houbong', label: 'Houbung' },
  { id: 'nav-ce', label: 'CE' },
  { id: 'nav-kck', label: 'KCK' },
  { id: 'nav-kcn', label: 'KCN' },
  { id: 'nav-kcu', label: 'KCU' },
  { id: 'nav-gallery', label: 'Gallery' },
  { id: 'nav-footer', label: 'Visit Us' },
];

export default function NavDots() {
  const { activeSection } = useScrollState();
  const [showActiveLabel, setShowActiveLabel] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    setShowActiveLabel(true);
    const timer = setTimeout(() => {
      setShowActiveLabel(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 pointer-events-auto">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <Magnet
            key={id}
            disabled={isMobile}
            padding={30}
            magnetStrength={3}
            wrapperClassName="group relative flex items-center justify-center w-4 md:w-6"
            innerClassName="flex items-center justify-center"
          >
            <button
              onClick={() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label={`Scroll to ${label}`}
              className="flex items-center justify-center relative w-full h-full p-2"
            >
              {/* Tooltip */}
              <span 
                className={`absolute right-8 md:right-10 px-2 py-1 rounded bg-forest-900/90 backdrop-blur-sm text-bone-100 text-xs whitespace-nowrap transition-all duration-300 pointer-events-none border border-forest-800
                  ${isActive && showActiveLabel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}
                `}
              >
                {label}
              </span>
              
              {/* Dot */}
              <div 
                className={`rounded-full transition-all duration-300 flex-shrink-0 ${
                  isActive 
                    ? 'bg-amber-accent w-2 h-8 md:w-2.5 md:h-10' 
                    : 'bg-white/30 hover:bg-white/60 w-2 h-2 md:w-2.5 md:h-2.5'
                }`}
              />
            </button>
          </Magnet>
        );
      })}
    </div>
  );
}
