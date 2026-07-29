import React, { createContext, useContext, useEffect, useState } from 'react';

const ScrollContext = createContext({ activeSection: '' });

export const useScrollState = () => useContext(ScrollContext);

export default function ScrollProvider({ children, sectionIds }) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    // Only observe after mount and ensuring elements exist
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // trigger when at least 50% of the section is visible
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <ScrollContext.Provider value={{ activeSection }}>
      {children}
    </ScrollContext.Provider>
  );
}
