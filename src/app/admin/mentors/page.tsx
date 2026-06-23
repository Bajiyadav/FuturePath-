import { prisma } from "@/lib/prisma";

export default async function AdminMentorsPage() {
const mentors = await prisma.mentor.findMany({
include: {
user: true,
},
orderBy: {
createdAt: "desc",
},
});

return ( <main className="min-h-screen bg-slate-950 text-white p-8"> <div className="mx-auto max-w-7xl"> <h1 className="mb-8 text-5xl font-bold">
Mentor Management </h1>


    {mentors.length === 0 ? (
      <div className="rounded-3xl bg-white/5 p-8">
        No mentors found.
      </div>
    ) : (
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <table className="w-full">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Company
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {mentors.map((mentor) => (
              <tr
                key={mentor.id}
                className="border-t border-white/10"
              >
                <td className="p-4">
                  {mentor.user.name}
                </td>

                <td className="p-4">
                  {mentor.user.email}
                </td>

                <td className="p-4">
                  {mentor.company || "-"}
                </td>

                <td className="p-4">
                  {mentor.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
</main>


);
}
