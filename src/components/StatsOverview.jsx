import { BarChart3, FileCheck2, Clock4 } from "lucide-react";

export default function StatsOverview() {
  const stats = [
    { label: "Total Dokumen", value: 128, icon: FileCheck2, color: "bg-indigo-50 text-indigo-700" },
    { label: "Menunggu Review", value: 23, icon: Clock4, color: "bg-amber-50 text-amber-700" },
    { label: "Rata-rata Skor", value: "4.1", icon: BarChart3, color: "bg-emerald-50 text-emerald-700" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${s.color}`}>
              <s.icon size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">{s.label}</p>
              <p className="text-xl font-semibold text-slate-900">{s.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
