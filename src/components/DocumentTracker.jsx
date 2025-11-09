import { useState } from "react";
import { Search, Plus, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const statusStyles = {
  draft: "bg-slate-100 text-slate-700",
  submitted: "bg-amber-100 text-amber-800",
  reviewed: "bg-blue-100 text-blue-800",
  approved: "bg-emerald-100 text-emerald-800",
  rejected: "bg-rose-100 text-rose-800",
};

const sampleDocs = [
  { id: "DOC-001", title: "Surat Permohonan Hibah", owner: "Andi Wijaya", updated: "2025-01-07", status: "submitted" },
  { id: "DOC-002", title: "MoU Penelitian AI", owner: "Siti Rahma", updated: "2025-01-04", status: "reviewed" },
  { id: "DOC-003", title: "Laporan Akhir Proyek", owner: "Budi Santoso", updated: "2024-12-18", status: "approved" },
  { id: "DOC-004", title: "Kontrak Kerja Sama", owner: "Dewi Lestari", updated: "2024-12-12", status: "draft" },
  { id: "DOC-005", title: "Berita Acara Seminar", owner: "Rizky Putra", updated: "2025-01-02", status: "rejected" },
];

export default function DocumentTracker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const filtered = sampleDocs.filter((d) => {
    const matchQuery = [d.id, d.title, d.owner].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchStatus = status === "all" ? true : d.status === status;
    return matchQuery && matchStatus;
  });

  return (
    <section id="tracking" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Tracking Dokumen</h2>
        <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-white shadow hover:bg-indigo-700">
          <Plus size={16} /> Dokumen Baru
        </button>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="col-span-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
          <Search size={18} className="text-slate-500" />
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            placeholder="Cari ID, judul, atau pemilik..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
        >
          <option value="all">Semua status</option>
          <option value="draft">Draft</option>
          <option value="submitted">Diajukan</option>
          <option value="reviewed">Direview</option>
          <option value="approved">Disetujui</option>
          <option value="rejected">Ditolak</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">ID</th>
              <th className="px-4 py-3 font-medium">Judul</th>
              <th className="px-4 py-3 font-medium">Pemilik</th>
              <th className="px-4 py-3 font-medium">Diperbarui</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((d) => (
              <tr key={d.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">{d.id}</td>
                <td className="px-4 py-3 text-slate-700">{d.title}</td>
                <td className="px-4 py-3 text-slate-700">{d.owner}</td>
                <td className="px-4 py-3 text-slate-700">{d.updated}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[d.status]}`}>
                    {d.status === "draft" && <Clock size={14} />}
                    {d.status === "submitted" && <AlertCircle size={14} />}
                    {d.status === "reviewed" && <AlertCircle size={14} />}
                    {d.status === "approved" && <CheckCircle2 size={14} />}
                    {d.status === "rejected" && <AlertCircle size={14} />}
                    {d.status.charAt(0).toUpperCase() + d.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
