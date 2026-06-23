"use client";

import { useEffect, useState } from "react";

export default function AdminMentorsPage() {
const [mentors, setMentors] = useState([]);

async function loadMentors() {
const response = await fetch("/api/admin/mentors");
const data = await response.json();
setMentors(data);
}

async function updateStatus(
mentorId: string,
status: string
) {
await fetch(
"/api/admin/mentor-status",
{
method: "POST",
headers: {
"Content-Type":
"application/json",
},
body: JSON.stringify({
mentorId,
status,
}),
}
);


loadMentors();


}

useEffect(() => {
loadMentors();
}, []);

return ( <main className="min-h-screen bg-slate-950 text-white p-8"> <div className="mx-auto max-w-7xl"> <h1 className="mb-8 text-5xl font-bold">
Mentor Management </h1>


    <div className="space-y-4">
      {mentors.map((mentor: any) => (
        <div
          key={mentor.id}
          className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <h2 className="text-xl font-bold">
              {mentor.user.name}
            </h2>

            <p className="text-slate-400">
              {mentor.user.email}
            </p>

            <p>
              Status: {mentor.status}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() =>
                updateStatus(
                  mentor.id,
                  "APPROVED"
                )
              }
              className="rounded-xl bg-green-600 px-4 py-2"
            >
              Approve
            </button>

            <button
              onClick={() =>
                updateStatus(
                  mentor.id,
                  "REJECTED"
                )
              }
              className="rounded-xl bg-red-600 px-4 py-2"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</main>


);
}
