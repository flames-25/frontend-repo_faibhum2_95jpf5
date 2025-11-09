import { useMemo, useState } from "react";
import { Star, Filter } from "lucide-react";

const items = [
  { id: "K-101", title: "Optimisasi Model Bahasa untuk Bahasa Lokal", author: "Ayu Pratiwi", field: "AI", score: 4.2 },
  { id: "K-102", title: "Bioinformatika untuk Deteksi Dini Kanker", author: "Bagus Kurnia", field: "Kesehatan", score: 3.8 },
  { id: "K-103", title: "Material Komposit Ramah Lingkungan", author: "Citra Dewi", field: "Material", score: 4.7 },
  { id: "K-104", title: "Sistem Irigasi Pintar Berbasis IoT", author: "Dodi Saputra", field: "IoT", score: 4.0 },
];

function Stars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < full ? "fill-yellow-400 text-yellow-400" : i === full && half ? "text-yellow-400" : "text-slate-300"} />
      ))}
    </div>
  );
}

export default function JudgingPanel() {
  const [field, setField] = useState("All");

  const fields = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.field)))], []);
  const filtered = useMemo(() => (field === "All" ? items : items.filter((i) => i.field === field)), [field]);

  return (
    <section id="penjurian" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Panel Penjurian</h2>
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-slate-500" />
          <select value={field} onChange={(e) => setField(e.target.value)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
            {fields.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((k) => (
          <article key={k.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">{k.title}</h3>
                <p className="text-sm text-slate-500">{k.author} • {k.field}</p>
              </div>
              <div className="text-sm font-medium text-slate-700">
                {k.score.toFixed(1)}
              </div>
            </div>
            <Stars value={k.score} />
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <button className="rounded-md bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-700">Setujui</button>
              <button className="rounded-md bg-rose-600 px-3 py-2 text-white hover:bg-rose-700">Tolak</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
