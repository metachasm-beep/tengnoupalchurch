import fs from 'fs';
import path from 'path';

const DATA_FILE = 'F:/Gigin/kuki-christian-church/src/data.json';
const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

// Update Church Building Committee Chairman
if (data.project && data.project.committee) {
  const chairman = data.project.committee.find(c => c.role.toLowerCase() === 'chairman');
  if (chairman) {
    chairman.name = 'S Thongkhothang Haokip';
  } else {
    // If no chairman found, just update the first one or add it
    data.project.committee[0].name = 'S Thongkhothang Haokip';
  }
}

// Prepare KCN committee
const kcnRawDir = 'F:/Gigin/Raw/KCN/2025-2026 Committee';
const kcnAssetsDir = 'F:/Gigin/kuki-christian-church/public/assets/kcn';
if (!fs.existsSync(kcnAssetsDir)) {
  fs.mkdirSync(kcnAssetsDir, { recursive: true });
}

const kcnFiles = fs.readdirSync(kcnRawDir).filter(f => !f.endsWith('.txt'));
for (const file of kcnFiles) {
  fs.copyFileSync(path.join(kcnRawDir, file), path.join(kcnAssetsDir, file));
}

// Extracted from Committee Members.txt for KCN
const kcnMembersList = [
  { name: 'Nu H Tinkholhing Mate', role: 'Chairperson', img: '/assets/kcn/Tinkholhing .jpeg' },
  { name: 'Nu Ch Themneichong Mate', role: 'Secretary', img: '/assets/kcn/Ch Themneichong.jpeg' },
  { name: 'Nu Ph Nemvah Mate', role: 'Committee Member', img: '/assets/kcn/Ph Nemvah.jpeg' },
  { name: 'Nu Ch Phalkim Mate', role: 'Committee Member', img: '/assets/kcn/Ch Phalkim.jpeg' },
  { name: 'Nu Ph Vahneilhing Mate', role: 'Committee Member', img: '/assets/kcn/Ph Vahneilhing.jpeg' },
  { name: 'Nu Ls Nengkim Mate', role: 'Committee Member', img: '/assets/kcn/Ls Nengkim.jpeg' },
  { name: 'Nu H Nengkholhing Mate', role: 'Committee Member', img: '/assets/kcn/H Nengkholhing.jpeg' },
  { name: 'Nu Hl Hoineichong Mate', role: 'Committee Member', img: '/assets/kcn/Hl Hoineichong.jpeg' },
  { name: 'Nu Ch Kimneichong Mate', role: 'Committee Member', img: '/assets/kcn/Ch Kimneichong.jpeg' },
  { name: 'Nu Ph Deikholhing Mate', role: 'Committee Member', img: '' },
  { name: 'Nu Neijahat Touthang', role: 'Lhacha', img: '/assets/kcn/Neijahat Touthang.jpeg' },
  { name: 'Nu S Hoineichong Mate', role: 'Lhacha', img: '' }
];

data.kcn = data.kcn || {};
data.kcn.committee = kcnMembersList;

// Prepare KCU committee
const kcuRawDir = 'F:/Gigin/Raw/KCU/Committee Members';
const kcuAssetsDir = 'F:/Gigin/kuki-christian-church/public/assets/kcu';
if (!fs.existsSync(kcuAssetsDir)) {
  fs.mkdirSync(kcuAssetsDir, { recursive: true });
}

const kcuFiles = fs.readdirSync(kcuRawDir);
const kcuMembersList = kcuFiles.map(file => {
  fs.copyFileSync(path.join(kcuRawDir, file), path.join(kcuAssetsDir, file));
  const name = file.replace(/\.[^/.]+$/, ""); // remove extension
  
  // Set Tongkholet as Chairman based on Data1.txt
  let role = 'Committee Member';
  if (name.includes('Tongkholet')) {
    role = 'Chairman';
  }

  return {
    name: name,
    role: role,
    img: `/assets/kcu/${file}`
  };
});

data.kcu = data.kcu || {};
data.kcu.committee = kcuMembersList;

// Add Ordainees to Houbong
data.houbong = data.houbong || {};
data.houbong.ordainees = data.houbong.ordainees || [];

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
console.log('Successfully updated data.json and copied images!');
