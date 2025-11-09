import Header from "./components/Header";
import StatsOverview from "./components/StatsOverview";
import DocumentTracker from "./components/DocumentTracker";
import JudgingPanel from "./components/JudgingPanel";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="space-y-8 py-8">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard Penjurian & Tracking Dokumen</h1>
            <p className="mt-1 text-sm text-slate-600">Kelola alur dokumen dan proses penilaian karya ilmiah di satu tempat.</p>
          </div>
        </section>

        <StatsOverview />
        <DocumentTracker />
        <JudgingPanel />

        <footer className="mx-auto max-w-7xl px-4 pb-10 text-center text-xs text-slate-500">
          Dibuat untuk demo — data bersifat contoh.
        </footer>
      </main>
    </div>
  );
}

export default App;
