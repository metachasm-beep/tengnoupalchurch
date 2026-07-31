import React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { X } from '@phosphor-icons/react';
import * as DialogPrimitive from "@radix-ui/react-dialog";

export default function ImageModal({ src, alt, className }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img 
          src={src} 
          alt={alt} 
          className={`cursor-zoom-in transition-transform duration-300 hover:scale-[1.02] ${className}`} 
          loading="lazy" 
        />
      </DialogTrigger>
      <DialogContent className="max-w-[100vw] max-h-[100dvh] w-screen h-[100dvh] p-0 bg-black/95 border-none shadow-none flex items-center justify-center sm:rounded-none z-[100]">
        <DialogHeader className="sr-only">
            <DialogTitle>{alt || "Image preview"}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full h-full flex items-center justify-center p-2 md:p-8">
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm" 
            />
            <DialogPrimitive.Close className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur transition-colors z-[110]">
                <X size={24} weight="bold" />
                <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
        </div>
      </DialogContent>
    </Dialog>
  );
}
