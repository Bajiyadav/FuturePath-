export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl p-8">
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Admin Dashboard ⚡
          </h1>

          <p className="mt-3 text-slate-400">
            Manage students, mentors, bookings, content and platform activity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-slate-400">Students</p>
            <h2 className="mt-2 text-5xl font-bold">0</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-slate-400">Mentors</p>
            <h2 className="mt-2 text-5xl font-bold">0</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-slate-400">Bookings</p>
            <h2 className="mt-2 text-5xl font-bold">0</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-slate-400">Revenue</p>
            <h2 className="mt-2 text-5xl font-bold">₹0</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">
              Pending Mentor Approvals
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-white/5 p-4">
                No pending mentor approvals
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">
              Recent Contact Inquiries
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-white/5 p-4">
                No contact inquiries yet
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold">
            Quick Actions
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <button className="rounded-xl bg-blue-600 p-4 font-semibold">
              Approve Mentors
            </button>

            <button className="rounded-xl bg-green-600 p-4 font-semibold">
              View Bookings
            </button>

            <button className="rounded-xl bg-purple-600 p-4 font-semibold">
              Manage Blogs
            </button>

            <button className="rounded-xl bg-orange-600 p-4 font-semibold">
              Contact Requests
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}