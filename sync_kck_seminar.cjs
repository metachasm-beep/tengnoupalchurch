const fs = require('fs');
const path = require('path');
const sourceDir = 'F:/Gigin/Raw/KCK/KCK, Tengnoupal Gambih Synod KCK Nikho cum Seminar 7-9 Nov 2026';
const destDir = './public/assets/kck';
const dataFile = './src/data.json';

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
let data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const caption = 'Kuki Christian Khangthah, Tengnoupal Gambih, Synod KCK Nikho cum Seminar, Duration 07 - 09 November, 2026, Venue : Tengnoupal';
const ts = Date.now();

if (!data.kck.gallery) {
    data.kck.gallery = [];
}

let count = 1;
for (const file of files) {
    const ext = path.extname(file);
    const destName = `kck_seminar_2026_${ts}_${count}${ext}`;
    fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, destName));
    data.kck.gallery.push({
        img: `/assets/kck/${destName}`,
        caption: caption
    });
    count++;
}

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Successfully synced ' + files.length + ' images to KCK gallery');
