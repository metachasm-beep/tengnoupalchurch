import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

export default function PaginatedReader({ text, maxChars = 800 }) {
  const paragraphs = text?.split('\n\n').filter(Boolean) || [];
  const pages = [];
  let currentPage = [];
  let currentLength = 0;

  paragraphs.forEach((p) => {
    if (p.length > maxChars) {
      const words = p.split(' ');
      let currentChunk = [];
      let currentChunkLength = 0;
      
      words.forEach(w => {
        if (currentChunkLength + w.length + 1 > maxChars && currentChunk.length > 0) {
          if (currentPage.length > 0) {
            pages.push(currentPage);
            currentPage = [];
            currentLength = 0;
          }
          pages.push([currentChunk.join(' ')]);
          currentChunk = [w];
          currentChunkLength = w.length;
        } else {
          currentChunk.push(w);
          currentChunkLength += w.length + 1;
        }
      });
      if (currentChunk.length > 0) {
        if (currentLength + currentChunkLength > maxChars && currentPage.length > 0) {
          pages.push(currentPage);
          currentPage = [currentChunk.join(' ')];
          currentLength = currentChunkLength;
        } else {
          currentPage.push(currentChunk.join(' '));
          currentLength += currentChunkLength;
        }
      }
    } else {
      if (currentLength + p.length > maxChars && currentPage.length > 0) {
        pages.push(currentPage);
        currentPage = [p];
        currentLength = p.length;
      } else {
        currentPage.push(p);
        currentLength += p.length;
      }
    }
  });
  if (currentPage.length > 0) pages.push(currentPage);

  const [pageIdx, setPageIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setPageIdx((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = pages.length - 1;
      if (next >= pages.length) next = 0;
      return next;
    });
  };

  if (!pages.length) return null;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between pb-4">
      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 flex items-center z-20 pl-2">
        <button
          onClick={() => paginate(-1)}
          className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/10 cursor-pointer"
        >
          <CaretLeft size={24} weight="bold" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-20 pr-2">
        <button
          onClick={() => paginate(1)}
          className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/10 cursor-pointer"
        >
          <CaretRight size={24} weight="bold" />
        </button>
      </div>

      {/* Pages Container */}
      <div className="relative w-full h-full overflow-hidden px-14 py-4 md:py-8 flex-1 flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={pageIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full h-full flex items-center"
          >
            <div className="max-w-prose mx-auto space-y-6 w-full">
              {pages[pageIdx].map((para, i) => (
                <p key={i} className="leading-relaxed text-bone-100/95 text-base md:text-lg font-light tracking-wide">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 items-center justify-center z-20 mt-4 shrink-0">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > pageIdx ? 1 : -1);
              setPageIdx(i);
            }}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              i === pageIdx ? 'w-6 bg-amber-accent' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
