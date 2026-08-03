import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import data from '../data.json';

export default function ServicesPage() {
  const content = data.houbong;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-forest-900 text-bone-50 p-4 sm:p-6 md:p-12 selection:bg-amber-accent selection:text-forest-900 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-amber-accent mb-2">Services & Pensioners</h1>
            <p className="text-bone-200/70">Members serving and retired in our community</p>
          </div>
          <Link to="/#nav-project" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-bone-50 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-bold transition-colors w-fit border border-white/10">
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" /> Back to Project
          </Link>
        </div>

        {/* Tabs for 2026 and 2025 */}
        <Tabs defaultValue="2026" className="w-full">
          <TabsList className="w-full sm:w-auto flex flex-wrap bg-forest-900/40 border border-white/20 p-1 rounded-xl mb-6 sticky top-0 z-10 backdrop-blur-xl shadow-lg">
            <TabsTrigger value="2026" className="flex-1 sm:flex-none text-xs sm:text-sm font-semibold tracking-widest uppercase text-bone-50/90 hover:text-white data-[state=active]:bg-amber-accent data-[state=active]:text-forest-900 rounded-lg transition-all py-2.5">
              2026 List
            </TabsTrigger>
            <TabsTrigger value="2025" className="flex-1 sm:flex-none text-xs sm:text-sm font-semibold tracking-widest uppercase text-bone-50/90 hover:text-white data-[state=active]:bg-amber-accent data-[state=active]:text-forest-900 rounded-lg transition-all py-2.5">
              2025 List
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="2026" className="mt-0 focus-visible:outline-none">
            <div className="flex justify-end mb-4">
              <a href="/docs/Service_and_Pensioners_2026.docx" download className="inline-flex items-center gap-2 bg-amber-accent/10 hover:bg-amber-accent/20 border border-amber-accent/30 text-amber-accent px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                <Download size={18} />
                Download as Doc
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {content?.service_pensioners_2026?.map((person, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors flex flex-col h-full shadow-md">
                  <span className="text-base font-medium text-bone-50 leading-tight mb-1">{person.name}</span>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded border ${person.status?.toLowerCase().includes('pensioner') ? 'bg-bone-200/10 text-bone-200 border-bone-200/20' : 'bg-amber-accent/10 text-amber-accent border-amber-accent/20'}`}>
                      {person.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="2025" className="mt-0 focus-visible:outline-none">
            <div className="flex justify-end mb-4">
              <a href="/docs/Service_and_Pensioner_2025.docx" download className="inline-flex items-center gap-2 bg-amber-accent/10 hover:bg-amber-accent/20 border border-amber-accent/30 text-amber-accent px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                <Download size={18} />
                Download as Doc
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {content?.service_pensioners_2025?.map((person, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors flex flex-col h-full shadow-md">
                  <span className="text-base font-medium text-bone-50 leading-tight mb-2">{person.name}</span>
                  <div className="space-y-1 mb-3">
                    {person.designation && <p className="text-xs text-bone-100/90"><span className="text-[9px] uppercase tracking-widest text-amber-accent/80 mr-1 block sm:inline">Designation</span> {person.designation}</p>}
                    {person.department && <p className="text-xs text-bone-100/90"><span className="text-[9px] uppercase tracking-widest text-amber-accent/80 mr-1 block sm:inline">Department</span> {person.department}</p>}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded border ${person.remarks?.toLowerCase().includes('pensioner') ? 'bg-bone-200/10 text-bone-200 border-bone-200/20' : 'bg-amber-accent/10 text-amber-accent border-amber-accent/20'}`}>
                      {person.remarks}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
