import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HandHeart } from 'lucide-react';
import data from '../data.json';

export default function DonorsPage() {
  const donors = data.project?.donors || [];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalAmount = "₹ 4,42,820";

  return (
    <div className="min-h-screen bg-forest-900 text-bone-50 p-4 sm:p-6 md:p-12 selection:bg-amber-accent selection:text-forest-900 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-amber-accent mb-2 flex items-center gap-4">
              <HandHeart size={40} className="text-amber-accent/80" />
              Donors' List
            </h1>
            <p className="text-bone-200/70">With profound gratitude for your generous contributions to The New Church Project</p>
          </div>
          <Link to="/#nav-project" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-bone-50 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-bold transition-colors w-fit border border-white/10">
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" /> Back to Project
          </Link>
        </div>

        {/* Donors Table */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base whitespace-nowrap">
              <thead className="bg-forest-900/50 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 font-semibold text-amber-accent tracking-widest uppercase text-xs">Sl. No</th>
                  <th className="px-6 py-4 font-semibold text-amber-accent tracking-widest uppercase text-xs">Min (Name)</th>
                  <th className="px-6 py-4 font-semibold text-amber-accent tracking-widest uppercase text-xs">Khomin (Address)</th>
                  <th className="px-6 py-4 font-semibold text-amber-accent tracking-widest uppercase text-xs text-right">Amount</th>
                  <th className="px-6 py-4 font-semibold text-amber-accent tracking-widest uppercase text-xs">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {donors.map((donor, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-bone-100/70 font-mono text-center w-16">{donor.sl_no}</td>
                    <td className="px-6 py-4 font-medium text-bone-50">{donor.min}</td>
                    <td className="px-6 py-4 text-bone-100/80">{donor.khomin}</td>
                    <td className="px-6 py-4 text-right font-mono text-amber-accent/90">{donor.amount}</td>
                    <td className="px-6 py-4 text-bone-200/60 italic text-sm">{donor.remarks}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-amber-accent/10 border-t border-amber-accent/20">
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-right font-bold text-amber-accent tracking-widest uppercase">
                    Total
                  </td>
                  <td className="px-6 py-4 text-right font-mono font-bold text-amber-accent text-lg">
                    {totalAmount}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
        {/* Optional decorative image */}
        <div className="mt-12 flex justify-center">
            <img src="/assets/project/3d renders/2.webp" alt="Church Render" className="w-full max-w-2xl rounded-2xl opacity-20 hover:opacity-50 transition-opacity duration-700 blur-[2px] hover:blur-none" />
        </div>

      </div>
    </div>
  );
}
