import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const RAW_DIR = 'F:/Gigin/Raw/Building Project';
const PUBLIC_TIMELINE_DIR = 'F:/Gigin/kuki-christian-church/public/assets/timeline/event_root';
const DATA_FILE = 'F:/Gigin/kuki-christian-church/src/data.json';

if (!fs.existsSync(PUBLIC_TIMELINE_DIR)) {
  fs.mkdirSync(PUBLIC_TIMELINE_DIR, { recursive: true });
}

async function processRootFiles() {
  const files = fs.readdirSync(RAW_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isFile())
    .map(dirent => dirent.name);

  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

  const newEvents = [];
  const generalImages = [];
  const generalVideos = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const sourcePath = path.join(RAW_DIR, file);
    
    let isVideo = false;
    let isImage = false;

    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      isImage = true;
    } else if (['.mp4', '.mov', '.avi', '.mkv'].includes(ext)) {
      isVideo = true;
    } else {
      continue;
    }

    const basename = path.basename(file, ext);
    let targetFilename = file;
    let targetPath = path.join(PUBLIC_TIMELINE_DIR, targetFilename);
    let webpUrl = `/assets/timeline/event_root/${targetFilename}`;

    if (isImage) {
      targetFilename = `${basename}.webp`;
      targetPath = path.join(PUBLIC_TIMELINE_DIR, targetFilename);
      webpUrl = `/assets/timeline/event_root/${targetFilename}`;
      if (!fs.existsSync(targetPath)) {
        try {
          await sharp(sourcePath).webp({ quality: 80 }).toFile(targetPath);
        } catch(e) {
          console.error('Failed', file);
          continue;
        }
      }
    } else if (isVideo) {
      if (!fs.existsSync(targetPath)) {
        fs.copyFileSync(sourcePath, targetPath);
      }
    }

    // Categorize based on filename
    if (file.includes('January 25 2026')) {
      newEvents.push({
        id: 'root_0',
        caption: 'Update',
        date: '25 Jan 2026',
        images: isImage ? [webpUrl] : [],
        videos: isVideo ? [webpUrl] : []
      });
    } else if (file.includes('Notice 6 Apr 2023')) {
      newEvents.push({
        id: 'root_1',
        caption: 'Notice',
        date: '6 Apr 2023',
        images: isImage ? [webpUrl] : [],
        videos: isVideo ? [webpUrl] : []
      });
    } else if (file.includes('Notice Nisim 15 Feb 2023')) {
      newEvents.push({
        id: 'root_2',
        caption: 'Notice',
        date: '15 Feb 2023',
        images: isImage ? [webpUrl] : [],
        videos: isVideo ? [webpUrl] : []
      });
    } else {
      // General WhatsApp image/video dump
      if (isImage) generalImages.push(webpUrl);
      if (isVideo) generalVideos.push(webpUrl);
    }
  }

  // Merge into data.json
  const generalEvent = data.project.timeline.find(t => t.date === 'General Progress');
  if (generalEvent) {
    if (generalImages.length) generalEvent.images = [...new Set([...generalEvent.images, ...generalImages])];
    if (generalVideos.length) generalEvent.videos = [...new Set([...(generalEvent.videos || []), ...generalVideos])];
  }

  data.project.timeline.push(...newEvents);

  // Re-sort the timeline based on date
  const parseDate = (dateStr) => {
    if (dateStr === "General Progress") return new Date('2099-01-01').getTime();
    if (dateStr === "Feb 2026") return new Date('2026-02-01').getTime();
    if (dateStr === "3-7 Feb 2026") return new Date('2026-02-03').getTime();
    if (dateStr.includes(',')) {
      return new Date(dateStr.split(',')[0].trim()).getTime();
    }
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return 0;
    return d.getTime();
  };

  data.project.timeline.sort((a, b) => parseDate(a.date) - parseDate(b.date));

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  console.log('Root files processed and integrated.');
}

processRootFiles().catch(console.error);
