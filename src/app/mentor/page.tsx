export default function MentorDashboard() {
return ( <main className="min-h-screen bg-slate-950 text-white"> <div className="mx-auto max-w-7xl p-8"> <div className="mb-10"> <h1 className="text-5xl font-bold">
Mentor Dashboard 👨‍🏫 </h1>


      <p className="mt-3 text-slate-400">
        Manage sessions, students, reviews and earnings.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-4">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">Sessions</p>
        <h2 className="mt-2 text-5xl font-bold">48</h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">Students</p>
        <h2 className="mt-2 text-5xl font-bold">21</h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">Rating</p>
        <h2 className="mt-2 text-5xl font-bold">4.9</h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">Revenue</p>
        <h2 className="mt-2 text-5xl font-bold">₹42K</h2>
      </div>
    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-bold">
          Upcoming Sessions
        </h2>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-white/5 p-4">
            Baji Yadav - Cybersecurity
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            Rahul Kumar - Data Analytics
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            Priya Reddy - Cloud Computing
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-bold">
          Recent Reviews
        </h2>

        <div className="mt-6 space-y-4">
          <div>⭐⭐⭐⭐⭐ Excellent guidance</div>
          <div>⭐⭐⭐⭐⭐ Very helpful mentor</div>
          <div>⭐⭐⭐⭐⭐ Practical advice</div>
        </div>
      </div>
    </div>
  </div>
</main>


);
}
