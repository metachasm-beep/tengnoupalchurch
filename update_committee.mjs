import fs from 'fs';

const DATA_FILE = 'F:/Gigin/kuki-christian-church/src/data.json';
const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

data.project = data.project || {};
data.project.committee = [
  { name: "Mr. Lh. Haokholen Mate", role: "Chairman", img: "" },
  { name: "Mr. Ph. Lunkhogin Mate", role: "Secretary", img: "/assets/timeline/event_6/Secretary.webp" },
  { name: "Mr. Upa T. Seikholet Baite", role: "Member", img: "/assets/timeline/event_6/Upa T Seikholet Baite.webp" },
  { name: "Mr. Ph Jangkholet Mate", role: "Member", img: "" },
  { name: "Mr. S. Jamkhokhai Mate", role: "Member", img: "" },
  { name: "Mr. Ch Ngamson Mate", role: "Member", img: "" },
  { name: "Mr. H. Jamkhogin Mate", role: "Member", img: "" },
  { name: "Mr. T. Hemkholen Baite", role: "Member", img: "" },
  { name: "Mr. H. Daniel Thangtinlen Mate", role: "Member", img: "/assets/timeline/event_6/H Daniel Thangtinlen Mate.webp" },
  { name: "Mr. Ch Chungmang Mate", role: "Member", img: "/assets/timeline/event_6/Ch Chungmang Mate.webp" }
];

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
console.log('Committee updated.');
