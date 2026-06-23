"use client";

import { useState } from "react";

export default function BookSessionPage() {
  const [studentId, setStudentId] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [scheduledAt, setScheduledAt] = useState("");
  const [notes, setNotes] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const response = await fetch(
      "/api/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId,
          mentorId,
          scheduledAt,
          notes,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Booking Created Successfully");
      setStudentId("");
      setMentorId("");
      setScheduledAt("");
      setNotes("");
    } else {
      alert(data.error);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl p-8">
        <h1 className="mb-8 text-5xl font-bold">
          Book Mentor Session
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) =>
              setStudentId(e.target.value)
            }
            className="w-full rounded-xl bg-slate-900 p-4"
          />

          <input
            type="text"
            placeholder="Mentor ID"
            value={mentorId}
            onChange={(e) =>
              setMentorId(e.target.value)
            }
            className="w-full rounded-xl bg-slate-900 p-4"
          />

          <input
            type="datetime-local"
            value={scheduledAt}
            onChange={(e) =>
              setScheduledAt(e.target.value)
            }
            className="w-full rounded-xl bg-slate-900 p-4"
          />

          <textarea
            placeholder="Session Notes"
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            className="w-full rounded-xl bg-slate-900 p-4"
            rows={4}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold"
          >
            Book Session
          </button>
        </form>
      </div>
    </main>
  );
}