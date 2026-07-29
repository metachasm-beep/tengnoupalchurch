import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function FoldWrapper({ children }) {
  const ref = useRef(null);
  
  // Outgoing phase: when this fold is at the top and the next fold is sliding over it
  const { scrollYProgress: outgoing } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Incoming phase: when this fold is sliding up from the bottom of the screen to the top
  const { scrollYProgress: incoming } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  });

  const filter = useTransform(() => {
    const inc = incoming.get(); // 0 to 1
    const out = outgoing.get(); // 0 to 1
    
    // incoming blur: starts at 20px, goes to 0px
    const blurInc = (1 - inc) * 20;
    // outgoing blur: starts at 0px, goes to 20px
    const blurOut = out * 20;
    
    return `blur(${blurInc + blurOut}px)`;
  });

  const opacity = useTransform(outgoing, [0, 1], [1, 0.4]);

  return (
    <div ref={ref} className="h-[100dvh] w-full sticky top-0 snap-start overflow-hidden">
      <motion.div 
        style={{ filter, opacity }} 
        className="w-full h-full origin-top bg-zinc-950"
      >
        {children}
      </motion.div>
    </div>
  );
}
