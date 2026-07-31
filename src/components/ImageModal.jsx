import React from 'react';
import { Dialog } from "@base-ui/react/dialog";
import { X } from '@phosphor-icons/react';

export default function ImageModal({ src, alt, className, style }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger 
        render={
          <img 
            src={src} 
            alt={alt} 
            className={`cursor-zoom-in transition-transform duration-300 hover:scale-[1.02] ${className}`} 
            style={style}
            loading="lazy" 
          />
        } 
      />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 isolate z-[90] bg-black/95 duration-200 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <Dialog.Popup className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8 outline-none duration-200 data-open:animate-in data-open:zoom-in-95 data-open:fade-in-0 data-closed:animate-out data-closed:zoom-out-95 data-closed:fade-out-0">
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm" 
          />
          <Dialog.Close className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur transition-colors z-[110] outline-none border-none cursor-pointer">
              <X size={24} weight="bold" />
              <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
