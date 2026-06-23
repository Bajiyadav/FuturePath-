import { prisma } from "@/lib/prisma";

export default async function InquiriesPage() {
const inquiries = await prisma.contactInquiry.findMany({
orderBy: {
createdAt: "desc",
},
});

return ( <main className="min-h-screen bg-slate-950 text-white p-8"> <div className="mx-auto max-w-7xl"> <h1 className="mb-8 text-5xl font-bold">
Contact Inquiries </h1>


    {inquiries.length === 0 ? (
      <div className="rounded-3xl bg-white/5 p-8">
        No inquiries found.
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
                Subject
              </th>
              <th className="p-4 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {inquiries.map((item) => (
              <tr
                key={item.id}
                className="border-t border-white/10"
              >
                <td className="p-4">
                  {item.name}
                </td>

                <td className="p-4">
                  {item.email}
                </td>

                <td className="p-4">
                  {item.subject}
                </td>

                <td className="p-4">
                  {new Date(
                    item.createdAt
                  ).toLocaleDateString()}
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
