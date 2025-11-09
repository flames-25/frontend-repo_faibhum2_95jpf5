import { FileText, ClipboardList, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
              <FileText size={20} />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">DocTrack + Jury</p>
              <p className="text-xs text-slate-500">Tracking dokumen & penjurian karya ilmiah</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900 transition-colors inline-flex items-center gap-2" href="#tracking">
              <ClipboardList size={16} /> Tracking
            </a>
            <a className="hover:text-slate-900 transition-colors inline-flex items-center gap-2" href="#penjurian">
              <FileText size={16} /> Penjurian
            </a>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50">
              <Settings size={16} /> Pengaturan
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
