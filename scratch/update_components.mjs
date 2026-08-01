import fs from 'fs';

const cePath = 'F:\\Gigin\\kuki-christian-church\\src\\folds\\CE.jsx';
const kcuPath = 'F:\\Gigin\\kuki-christian-church\\src\\folds\\KCU.jsx';

let ceContent = fs.readFileSync(cePath, 'utf-8');

// Update CE.jsx - Mobile Staff
ceContent = ceContent.replace(
  /<div className="flex items-center gap-3">\s*<div className="w-10 h-10 rounded-full bg-amber-accent\/10 flex items-center justify-center text-amber-accent flex-shrink-0">\s*<ChalkboardTeacher size={24} weight="fill" \/>\s*<\/div>\s*<div>\s*<h4 className="text-sm font-semibold">{content\?\.staff\?\.superintendent}<\/h4>\s*<p className="text-xs text-amber-accent\/80 font-medium">Superintendent<\/p>\s*<\/div>\s*<\/div>/g,
  `
                    <div className="flex items-center gap-3">
                      {content?.staff?.superintendent?.img ? (
                        <img src={content.staff.superintendent.img} alt={content.staff.superintendent.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                          <ChalkboardTeacher size={24} weight="fill" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-semibold">{content?.staff?.superintendent?.name}</h4>
                        <p className="text-xs text-amber-accent/80 font-medium">Superintendent</p>
                      </div>
                    </div>
`
);

ceContent = ceContent.replace(
  /<div className="flex items-center gap-3">\s*<div className="w-10 h-10 rounded-full bg-amber-accent\/10 flex items-center justify-center text-amber-accent flex-shrink-0">\s*<ChalkboardTeacher size={24} weight="fill" \/>\s*<\/div>\s*<div>\s*<h4 className="text-sm font-semibold">{content\?\.staff\?\.secretary}<\/h4>\s*<p className="text-xs text-amber-accent\/80 font-medium">Secretary<\/p>\s*<\/div>\s*<\/div>/g,
  `
                    <div className="flex items-center gap-3">
                      {content?.staff?.secretary?.img ? (
                        <img src={content.staff.secretary.img} alt={content.staff.secretary.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                          <ChalkboardTeacher size={24} weight="fill" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-semibold">{content?.staff?.secretary?.name}</h4>
                        <p className="text-xs text-amber-accent/80 font-medium">Secretary</p>
                      </div>
                    </div>
`
);

// Update CE.jsx - Desktop Staff
ceContent = ceContent.replace(
  /<div className="flex items-center gap-3">\s*<div className="w-10 h-10 rounded-full bg-amber-accent\/10 flex items-center justify-center text-amber-accent flex-shrink-0">\s*<ChalkboardTeacher size={24} weight="fill" \/>\s*<\/div>\s*<div>\s*<h4 className="text-base font-semibold">{content\?\.staff\?\.superintendent}<\/h4>\s*<p className="text-sm text-amber-accent\/80 font-medium">Superintendent<\/p>\s*<\/div>\s*<\/div>/g,
  `
                <div className="flex items-center gap-3">
                  {content?.staff?.superintendent?.img ? (
                    <img src={content.staff.superintendent.img} alt={content.staff.superintendent.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                      <ChalkboardTeacher size={28} weight="fill" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-base font-semibold">{content?.staff?.superintendent?.name}</h4>
                    <p className="text-sm text-amber-accent/80 font-medium">Superintendent</p>
                  </div>
                </div>
`
);

ceContent = ceContent.replace(
  /<div className="flex items-center gap-3">\s*<div className="w-10 h-10 rounded-full bg-amber-accent\/10 flex items-center justify-center text-amber-accent flex-shrink-0">\s*<ChalkboardTeacher size={24} weight="fill" \/>\s*<\/div>\s*<div>\s*<h4 className="text-base font-semibold">{content\?\.staff\?\.secretary}<\/h4>\s*<p className="text-sm text-amber-accent\/80 font-medium">Secretary<\/p>\s*<\/div>\s*<\/div>/g,
  `
                <div className="flex items-center gap-3">
                  {content?.staff?.secretary?.img ? (
                    <img src={content.staff.secretary.img} alt={content.staff.secretary.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                      <ChalkboardTeacher size={28} weight="fill" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-base font-semibold">{content?.staff?.secretary?.name}</h4>
                    <p className="text-sm text-amber-accent/80 font-medium">Secretary</p>
                  </div>
                </div>
`
);

// Update CE.jsx - Mobile Teachers
ceContent = ceContent.replace(
  /\{content\?\.staff\?\.teachers\?\.map\(\(teacher, i\) => \([\s\S]*?<\/HoverCard>\s*\)\)/g,
  `{content?.staff?.teachers?.map((teacher, i) => (
                        <HoverCard key={i}>
                          <HoverCardTrigger asChild>
                            <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                              {teacher.img ? (
                                <img src={teacher.img} alt={teacher.name} className="w-6 h-6 rounded-full object-cover border border-white/10" />
                              ) : (
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-accent/50 flex-shrink-0" />
                              )}
                              <span className="text-sm text-bone-100">{teacher.name}</span>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-64 bg-forest-800 border-white/10 text-bone-50 rounded-xl shadow-xl">
                            <div className="flex justify-between space-x-4">
                              {teacher.img ? (
                                <img src={teacher.img} alt={teacher.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center flex-shrink-0">
                                  <ChalkboardTeacher size={20} className="text-amber-accent" weight="fill" />
                                </div>
                              )}
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold text-bone-50 leading-tight">{teacher.name}</h4>
                                <p className="text-xs text-amber-accent/90">
                                  Teaching Staff
                                </p>
                                <p className="text-xs text-bone-100/70 pt-1">
                                  Tengnoupal Christian Church
                                </p>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))`
);

// Wait, the regex replacement for Desktop Teachers would also match the first one because they are similar. So the global flag handles both! (Mobile and Desktop share the same HoverCard structure but Desktop might have slightly different classes. In this case, the `ceContent.replace` with `g` flag replaces BOTH Mobile and Desktop teachers!). 
// Actually, let's make sure it replaced both by running it on the whole file.

// Update Gallery Photos
ceContent = ceContent.replace(
  /<div className="relative rounded-2xl overflow-hidden glass p-2 border border-white\/5">\s*<img src="\/assets\/ce_oja_ho.webp" alt="CE Oja ho" className="w-full h-\[25vh\] rounded-xl shadow-lg object-cover" \/>\s*<p className="absolute bottom-4 left-4 glass px-3 py-1 text-xs font-medium rounded-full">CE Oja ho<\/p>\s*<\/div>/g,
  `
                {content?.images?.map((img, idx) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5">
                    <img src={img} alt="CE Photo" className="w-full h-[25vh] rounded-xl shadow-lg object-cover" />
                    <p className="absolute bottom-4 left-4 glass px-3 py-1 text-xs font-medium rounded-full">CE Photo</p>
                  </div>
                ))}
`
);
ceContent = ceContent.replace(
  /<div className="relative rounded-2xl overflow-hidden glass p-2 border border-white\/5">\s*<img src="\/assets\/ce_oja_ho.webp" alt="CE Oja ho" className="w-full h-\[30vh\] rounded-xl shadow-lg object-cover" \/>\s*<p className="absolute bottom-4 left-4 glass px-3 py-1 text-sm font-medium rounded-full">CE Oja ho<\/p>\s*<\/div>/g,
  `
            {content?.images?.map((img, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5">
                <img src={img} alt="CE Photo" className="w-full h-[30vh] rounded-xl shadow-lg object-cover" />
                <p className="absolute bottom-4 left-4 glass px-3 py-1 text-sm font-medium rounded-full">CE Photo</p>
              </div>
            ))}
`
);


fs.writeFileSync(cePath, ceContent);

let kcuContent = fs.readFileSync(kcuPath, 'utf-8');

const committeeJSX = `
          {content?.committee && (
            <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 mt-8 shadow-xl w-full text-left">
              <h3 className="text-2xl font-serif text-amber-accent mb-6 text-center">2025-2026 Committee</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm tracking-[0.2em] uppercase text-bone-200/50 mb-4 font-semibold">Leaders</h4>
                  <div className="space-y-4">
                    {content.committee.leaders?.map((leader, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-bone-50 font-medium">{leader.name}</span>
                        <span className="text-sm text-amber-accent/80">{leader.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm tracking-[0.2em] uppercase text-bone-200/50 mb-4 font-semibold">Members</h4>
                  <div className="space-y-2">
                    {content.committee.members?.map((member, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/50"></div>
                        <span className="text-bone-100">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {content.committee.lhacha?.length > 0 && (
                <div className="mt-6 border-t border-white/10 pt-6">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-bone-200/50 mb-4 font-semibold text-center">Lhacha</h4>
                  <div className="flex justify-center gap-4 flex-wrap">
                    {content.committee.lhacha.map((l, i) => (
                      <span key={i} className="bg-white/5 px-4 py-2 rounded-full text-sm font-medium border border-white/10">{l.name}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
`;

kcuContent = kcuContent.replace(
  /<\/div>\s*<\/div>\s*<\/section>/,
  `</div>\n${committeeJSX}\n      </div>\n    </section>`
);

fs.writeFileSync(kcuPath, kcuContent);
console.log('Done replacing components!');
