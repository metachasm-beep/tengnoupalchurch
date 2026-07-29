import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function convert() {
  const file = path.resolve('./public/assets/peace-heaven-green-fields.jpg');
  const out = path.resolve('./public/assets/peace-heaven-green-fields.webp');
  
  await sharp(file).webp({ quality: 80 }).toFile(out);
  fs.unlinkSync(file);
  console.log('Converted hero bg to webp');
}

convert().catch(console.error);
