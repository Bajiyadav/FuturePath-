import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { prisma } from "@/lib/prisma";

export default async function MentorsPage() {
const mentors = await prisma.mentor.findMany({
where: {
status: "APPROVED",
},
include: {
user: true,
},
});

return (
<> <Navbar />


  <main className="min-h-screen bg-slate-950 text-white">
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-center text-5xl font-bold">
        Our Mentors
      </h1>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {mentors.length === 0 ? (
          <div className="col-span-3 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            No approved mentors available yet.
          </div>
        ) : (
          mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
                {mentor.user.name?.charAt(0) ||
                  "M"}
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                {mentor.user.name}
              </h2>

              <p className="text-slate-400">
                {mentor.currentRole ||
                  "Mentor"}
              </p>

              <p className="text-blue-400">
                {mentor.company ||
                  "FuturePath"}
              </p>

              <p className="mt-4">
                ⭐ {mentor.rating}
              </p>

              <p>
                Experience:{" "}
                {mentor.experience || 0} Years
              </p>

              <a
                href={`/mentors/${mentor.id}`}
                className="mt-6 block rounded-xl bg-blue-600 py-3 text-center font-semibold"
              >
                View Profile
              </a>
            </div>
          ))
        )}
      </div>
    </section>
  </main>

  <Footer />
</>


);
}
