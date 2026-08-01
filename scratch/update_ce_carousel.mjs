import fs from 'fs';
const path = 'F:\\Gigin\\kuki-christian-church\\src\\folds\\CE.jsx';
let content = fs.readFileSync(path, 'utf8');

// Replace everything from the top down to the staff array
content = content.replace(
  /const \[currentCbs, setCurrentCbs\] = useState\(0\);\s*const cbsImages = \[1, 2, 3, 4, 5\]\.map\(i => `\/assets\/cbs_\$\{i\}\.webp`\);\s*useEffect\(\(\) => \{\s*const timer = setInterval\(\(\) => \{\s*setCurrentCbs\(\(prev\) => \(prev \+ 1\) % cbsImages\.length\);\s*\}, 4000\);\s*return \(\) => clearInterval\(timer\);\s*\}, \[cbsImages\.length\]\);/,
  `const cbsImages = [1, 2, 3, 4, 5].map(i => \`/assets/cbs_\${i}.webp\`);
  
  const allGalleryPhotos = [
    ...(content?.images?.map(img => ({ src: img, caption: 'CE Photo' })) || []),
    ...cbsImages.map(img => ({ src: img, caption: 'Chapang Bible School (CBS) 2025' }))
  ];

  const [currentCbs, setCurrentCbs] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCbs((prev) => (prev + 1) % allGalleryPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [allGalleryPhotos.length]);`
);

// Remove the old allGalleryPhotos definition
content = content.replace(
  /\s*const allGalleryPhotos = \[\s*\.\.\.\(content\?\.images\?\.map\(img => \(\{ src: img, caption: 'CE Photo' \}\)\) \|\| \[\]\),\s*\.\.\.cbsImages\.map\(img => \(\{ src: img, caption: 'Chapang Bible School \(CBS\) 2025' \}\)\)\s*\];/g,
  ''
);

// Update Desktop Gallery Section
content = content.replace(
  /\{\/\* Single feature image \(Animated CBS\) \*\/\}\s*<div className="relative rounded-3xl overflow-hidden glass p-2 border border-white\/5 h-\[40vh\] shrink-0">([\s\S]*?)<\/div>\s*\{\/\* Other static images \*\/\}\s*<div className="grid grid-cols-2 gap-4">\s*\{content\?\.images\?\.map\(\(img, idx\) => \(\s*<div key=\{idx\} className="relative rounded-3xl overflow-hidden glass p-2 border border-white\/5 aspect-square">\s*<ImageModal src=\{img\} alt="CE Photo" className="w-full h-full rounded-2xl shadow-lg object-cover" \/>\s*<\/div>\s*\)\)\}\s*<\/div>/,
  `{/* Single feature image (Animated Gallery) */}
                <div className="relative rounded-3xl overflow-hidden glass p-2 border border-white/5 h-[60vh] shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentCbs}
                      src={allGalleryPhotos[currentCbs]?.src}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-2xl object-cover"
                      alt={allGalleryPhotos[currentCbs]?.caption}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-2 bg-gradient-to-t from-forest-900/90 via-transparent to-transparent pointer-events-none rounded-2xl" />
                  <p className="absolute bottom-6 left-6 z-10 text-sm font-medium text-bone-50 drop-shadow-md">
                    {allGalleryPhotos[currentCbs]?.caption}
                  </p>
                  <div className="absolute bottom-6 right-6 z-10 flex gap-1.5 flex-wrap justify-end max-w-[50%]">
                    {allGalleryPhotos.map((_, i) => (
                      <div key={i} className={\`w-1.5 h-1.5 rounded-full transition-colors \${i === currentCbs ? 'bg-amber-accent' : 'bg-white/30'}\`} />
                    ))}
                  </div>
                </div>`
);

fs.writeFileSync(path, content);
console.log('Done modifying CE.jsx');
