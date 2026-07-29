import sharp from 'sharp';
import path from 'path';

async function extractLogo() {
  const input = path.resolve('F:/Gigin/Raw/PHOTO-2026-07-28-16-23-14.jpg.jpeg');
  const output = path.resolve('F:/Gigin/kuki-christian-church/public/assets/logo-extracted.webp');
  
  // Extract top-left quadrant (approximate for the crest logo)
  // Let's get the metadata to know the exact dimensions
  const metadata = await sharp(input).metadata();
  
  // The logo is roughly the top 20% and left 25%.
  // Looking at the image, it's roughly 300x300 pixels in a 1080x1920 image?
  // Let's do a crop
  const width = Math.floor(metadata.width * 0.25);
  const height = Math.floor(metadata.height * 0.20);
  
  await sharp(input)
    .extract({ left: 30, top: 30, width: 280, height: 280 }) // educated guess based on letterheads
    .webp({ quality: 90 })
    .toFile(output);
    
  console.log('Logo extracted to ' + output);
}

extractLogo().catch(console.error);
