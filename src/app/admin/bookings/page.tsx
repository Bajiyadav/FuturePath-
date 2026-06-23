import { prisma } from "@/lib/prisma";

export default async function BookingsPage() {
const bookings = await prisma.booking.findMany({
include: {
student: {
include: {
user: true,
},
},
mentor: {
include: {
user: true,
},
},
},
orderBy: {
createdAt: "desc",
},
});

return ( <main className="min-h-screen bg-slate-950 text-white p-8"> <div className="mx-auto max-w-7xl"> <h1 className="mb-8 text-5xl font-bold">
All Bookings </h1>


    {bookings.length === 0 ? (
      <div className="rounded-3xl bg-white/5 p-8">
        No bookings found.
      </div>
    ) : (
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <table className="w-full">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4 text-left">
                Student
              </th>

              <th className="p-4 text-left">
                Mentor
              </th>

              <th className="p-4 text-left">
                Date
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t border-white/10"
              >
                <td className="p-4">
                  {booking.student.user.name ||
                    booking.student.user.email}
                </td>

                <td className="p-4">
                  {booking.mentor.user.name ||
                    booking.mentor.user.email}
                </td>

                <td className="p-4">
                  {new Date(
                    booking.scheduledAt
                  ).toLocaleString()}
                </td>

                <td className="p-4">
                  {booking.status}
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
