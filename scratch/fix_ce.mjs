import fs from 'fs';
const path = 'F:\\Gigin\\kuki-christian-church\\src\\folds\\CE.jsx';
let content = fs.readFileSync(path, 'utf8');

// Replace Superintendent mobile
content = content.replace(
  /<h4 className="text-sm font-semibold">\{content\?\.staff\?\.superintendent\}<\/h4>/g,
  '<h4 className="text-sm font-semibold">{content?.staff?.superintendent?.name || content?.staff?.superintendent}</h4>'
);

// Replace Superintendent desktop
content = content.replace(
  /<h4 className="text-base font-semibold">\{content\?\.staff\?\.superintendent\}<\/h4>/g,
  '<h4 className="text-base font-semibold">{content?.staff?.superintendent?.name || content?.staff?.superintendent}</h4>'
);

// Replace Secretary mobile
content = content.replace(
  /<h4 className="text-sm font-semibold">\{content\?\.staff\?\.secretary\}<\/h4>/g,
  '<h4 className="text-sm font-semibold">{content?.staff?.secretary?.name || content?.staff?.secretary}</h4>'
);

// Replace Secretary desktop
content = content.replace(
  /<h4 className="text-base font-semibold">\{content\?\.staff\?\.secretary\}<\/h4>/g,
  '<h4 className="text-base font-semibold">{content?.staff?.secretary?.name || content?.staff?.secretary}</h4>'
);

// ALSO we need to add the images to Superintendent and Secretary!
// My previous script FAILED to replace the original icons with images!
// Let's do it properly now.
// For Superintendent Mobile
content = content.replace(
  /<div className="w-10 h-10 rounded-full bg-amber-accent\/10 flex items-center justify-center text-amber-accent flex-shrink-0">\s*<ChalkboardTeacher size=\{24\} weight="fill" \/>\s*<\/div>\s*<div>\s*<h4 className="text-sm font-semibold">\{content\?\.staff\?\.superintendent\?\.name \|\| content\?\.staff\?\.superintendent\}<\/h4>\s*<p className="text-xs text-amber-accent\/80 font-medium">Superintendent<\/p>\s*<\/div>/g,
  `
                      {content?.staff?.superintendent?.img ? (
                        <img src={content.staff.superintendent.img} alt={content.staff.superintendent.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                          <ChalkboardTeacher size={24} weight="fill" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-semibold">{content?.staff?.superintendent?.name || content?.staff?.superintendent}</h4>
                        <p className="text-xs text-amber-accent/80 font-medium">Superintendent</p>
                      </div>
  `
);

// For Secretary Mobile
content = content.replace(
  /<div className="w-10 h-10 rounded-full bg-amber-accent\/10 flex items-center justify-center text-amber-accent flex-shrink-0">\s*<ChalkboardTeacher size=\{24\} weight="fill" \/>\s*<\/div>\s*<div>\s*<h4 className="text-sm font-semibold">\{content\?\.staff\?\.secretary\?\.name \|\| content\?\.staff\?\.secretary\}<\/h4>\s*<p className="text-xs text-amber-accent\/80 font-medium">Secretary<\/p>\s*<\/div>/g,
  `
                      {content?.staff?.secretary?.img ? (
                        <img src={content.staff.secretary.img} alt={content.staff.secretary.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                          <ChalkboardTeacher size={24} weight="fill" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-semibold">{content?.staff?.secretary?.name || content?.staff?.secretary}</h4>
                        <p className="text-xs text-amber-accent/80 font-medium">Secretary</p>
                      </div>
  `
);

// For Superintendent Desktop
content = content.replace(
  /<div className="w-10 h-10 rounded-full bg-amber-accent\/10 flex items-center justify-center text-amber-accent flex-shrink-0">\s*<ChalkboardTeacher size=\{24\} weight="fill" \/>\s*<\/div>\s*<div>\s*<h4 className="text-base font-semibold">\{content\?\.staff\?\.superintendent\?\.name \|\| content\?\.staff\?\.superintendent\}<\/h4>\s*<p className="text-sm text-amber-accent\/80 font-medium">Superintendent<\/p>\s*<\/div>/g,
  `
                  {content?.staff?.superintendent?.img ? (
                    <img src={content.staff.superintendent.img} alt={content.staff.superintendent.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                      <ChalkboardTeacher size={24} weight="fill" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-base font-semibold">{content?.staff?.superintendent?.name || content?.staff?.superintendent}</h4>
                    <p className="text-sm text-amber-accent/80 font-medium">Superintendent</p>
                  </div>
  `
);

// For Secretary Desktop
content = content.replace(
  /<div className="w-10 h-10 rounded-full bg-amber-accent\/10 flex items-center justify-center text-amber-accent flex-shrink-0">\s*<ChalkboardTeacher size=\{24\} weight="fill" \/>\s*<\/div>\s*<div>\s*<h4 className="text-base font-semibold">\{content\?\.staff\?\.secretary\?\.name \|\| content\?\.staff\?\.secretary\}<\/h4>\s*<p className="text-sm text-amber-accent\/80 font-medium">Secretary<\/p>\s*<\/div>/g,
  `
                  {content?.staff?.secretary?.img ? (
                    <img src={content.staff.secretary.img} alt={content.staff.secretary.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                      <ChalkboardTeacher size={24} weight="fill" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-base font-semibold">{content?.staff?.secretary?.name || content?.staff?.secretary}</h4>
                    <p className="text-sm text-amber-accent/80 font-medium">Secretary</p>
                  </div>
  `
);

fs.writeFileSync(path, content);
console.log('Fixed CE.jsx');
