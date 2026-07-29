import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function FoldWrapper({ children }) {
  const ref = useRef(null);
  
  // Track this element's position relative to the viewport.
  // We start animating when its top reaches the top of the viewport ("start start")
  // and finish when its bottom reaches the top of the viewport ("end start")
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // When scrolling past this fold, scale it down slightly, fade it out, and round the top corners
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);

  return (
    <div ref={ref} className="h-[100dvh] w-full sticky top-0 snap-start overflow-hidden">
      <motion.div 
        style={{ scale, opacity, borderRadius }} 
        className="w-full h-full origin-top bg-zinc-950"
      >
        {children}
      </motion.div>
    </div>
  );
}
