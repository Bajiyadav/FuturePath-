export default function StudentDashboard() {
return ( <main className="min-h-screen bg-slate-950 text-white"> <div className="mx-auto max-w-7xl p-8"> <div className="mb-10"> <h1 className="text-5xl font-bold">
Welcome Back, Baji 👋 </h1>


      <p className="mt-3 text-slate-400">
        Track your progress, mentor sessions, career roadmap
        and assessments from one dashboard.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-4">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">Career Score</p>
        <h2 className="mt-2 text-5xl font-bold">82%</h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">Assessments</p>
        <h2 className="mt-2 text-5xl font-bold">4</h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">Roadmaps</p>
        <h2 className="mt-2 text-5xl font-bold">2</h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">Sessions</p>
        <h2 className="mt-2 text-5xl font-bold">8</h2>
      </div>
    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-bold">
          Active Cybersecurity Roadmap
        </h2>

        <div className="mt-6 space-y-4">
          <div>✅ Networking Fundamentals</div>
          <div>✅ Linux Administration</div>
          <div>🔄 Security+</div>
          <div>⏳ SOC Analyst Lab</div>
          <div>⏳ Splunk Training</div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-bold">
          Upcoming Mentor Sessions
        </h2>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-white/5 p-4">
            Sarah Johnson - Google
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            Michael Chen - Microsoft
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            Priya Sharma - Accenture
          </div>
        </div>
      </div>
    </div>

    <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-2xl font-bold">
        Recommended Domains
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-blue-600 p-6">
          Cybersecurity
        </div>

        <div className="rounded-xl bg-indigo-600 p-6">
          Cloud Computing
        </div>

        <div className="rounded-xl bg-purple-600 p-6">
          Detection Engineering
        </div>
      </div>
    </div>
  </div>
</main>


);
}
