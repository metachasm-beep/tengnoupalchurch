import fs from 'fs';

const raw = JSON.parse(fs.readFileSync('F:/Gigin/kuki-christian-church/timeline_raw.json', 'utf8'));
const data = JSON.parse(fs.readFileSync('F:/Gigin/kuki-christian-church/src/data.json', 'utf8'));

// Extract Committee images and remove from timeline
const committeeEvent = raw.find(e => e.originalFolder.includes('Church Building Committee'));
let committeeImages = [];
if (committeeEvent) {
  committeeImages = committeeEvent.images;
}

const manualDates = {
  "CHURCH BUILDING CONSTRUCTION COMMITTEE AKON KIPA THUSEINA": "16 Jan 2025",
  "Construction": "General Progress",
  "FELLOWSHIP DINNER FUND DRIVE": "14 Feb 2026",
  "Foundation stone laid day": "22 Jan 2023",
  "Fund Drive": "Feb 2026",
  "HETSAH LE TEMNA": "25 Apr 2023, 6 Apr 2023, 15 Feb 2023",
  "Joint meeting of the New Church Building Construct": "3 Feb 2023",
  "New Church Building Construction Committee had a m": "14 Feb 2023",
  "15 May, 2025": "15 May 2025",
  "20 Mar 2026": "20 Mar 2026",
  "21 April 2026": "21 Apr 2026",
  "22 Nov 2025 Social Service": "22 Nov 2025",
  "2nd May, 2025": "2 May 2025",
  "3rd February to 07 February 2026": "3-7 Feb 2026",
  "On 11th August 2025, a Social Service was conducte": "11 Aug 2025",
  "On 12th April 2023, the New Church Building Constr": "12 Apr 2023",
  "On 15th February 2023, the New Church Building Con": "15 Feb 2023",
  "On 16th January 2025, members of the church gather": "16 Jan 2025",
  "On 18th November 2025, the New Church Building Con": "18 Nov 2025",
  "On 26 January, 2026, a Social Service was conducte": "26 Jan 2026",
  "On 3rd November 2025, a Social Service was conduct": "3 Nov 2025"
};

// Map months to values for sorting
const parseDate = (dateStr) => {
  if (dateStr === "General Progress") return new Date('2099-01-01').getTime(); // Put general at the end
  if (dateStr === "Feb 2026") return new Date('2026-02-01').getTime();
  if (dateStr === "3-7 Feb 2026") return new Date('2026-02-03').getTime();
  if (dateStr.includes(',')) {
    // take the first date for sorting
    return new Date(dateStr.split(',')[0].trim()).getTime();
  }
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return 0;
  return d.getTime();
};

const timeline = raw
  .filter(e => !e.originalFolder.includes('Church Building Committee'))
  .map(e => {
    e.date = manualDates[e.originalFolder] || e.originalFolder;
    e.sortValue = parseDate(e.date);
    return e;
  })
  .sort((a, b) => a.sortValue - b.sortValue)
  .map(e => {
    delete e.sortValue;
    return e;
  });

data.project = data.project || {};
data.project.timeline = timeline;
data.project.committeeImages = committeeImages;

fs.writeFileSync('F:/Gigin/kuki-christian-church/src/data.json', JSON.stringify(data, null, 2));
console.log('Successfully updated data.json');
