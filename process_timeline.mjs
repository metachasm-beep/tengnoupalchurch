import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const RAW_DIR = 'F:/Gigin/Raw/Building Project';
const PUBLIC_TIMELINE_DIR = 'F:/Gigin/kuki-christian-church/public/assets/timeline';
const DATA_FILE = 'F:/Gigin/kuki-christian-church/src/data.json';

if (!fs.existsSync(PUBLIC_TIMELINE_DIR)) {
  fs.mkdirSync(PUBLIC_TIMELINE_DIR, { recursive: true });
}

async function processTimeline() {
  const folders = fs.readdirSync(RAW_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const timelineData = [];

  for (let i = 0; i < folders.length; i++) {
    const folderName = folders[i];
    const sourceFolder = path.join(RAW_DIR, folderName);
    
    // Create a URL-safe folder name for public/assets/timeline
    const safeFolderName = `event_${i}`;
    const targetFolder = path.join(PUBLIC_TIMELINE_DIR, safeFolderName);
    
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }

    const files = fs.readdirSync(sourceFolder);
    const images = [];
    const videos = [];

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const sourcePath = path.join(sourceFolder, file);

      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const targetFilename = `${path.basename(file, ext)}.webp`;
        const targetPath = path.join(targetFolder, targetFilename);
        const webpUrl = `/assets/timeline/${safeFolderName}/${targetFilename}`;
        
        try {
          if (!fs.existsSync(targetPath)) {
            await sharp(sourcePath)
              .webp({ quality: 80 })
              .toFile(targetPath);
          }
          images.push(webpUrl);
        } catch (e) {
          console.error(`Failed to convert ${sourcePath}:`, e);
        }
      } else if (['.mp4', '.mov', '.avi', '.mkv'].includes(ext)) {
        const targetPath = path.join(targetFolder, file);
        const videoUrl = `/assets/timeline/${safeFolderName}/${file}`;
        if (!fs.existsSync(targetPath)) {
            fs.copyFileSync(sourcePath, targetPath);
        }
        videos.push(videoUrl);
      }
    }

    timelineData.push({
      id: safeFolderName,
      originalFolder: folderName,
      caption: folderName,
      date: "", // To be filled in manually or later
      images,
      videos
    });
    console.log(`Processed ${folderName}: ${images.length} images, ${videos.length} videos`);
  }

  // We write the timeline JSON data to a separate file first so we can manually review it
  // and insert it into data.json later.
  fs.writeFileSync(
    'F:/Gigin/kuki-christian-church/timeline_raw.json', 
    JSON.stringify(timelineData, null, 2)
  );
  
  console.log('Done! Generated timeline_raw.json');
}

processTimeline().catch(console.error);
