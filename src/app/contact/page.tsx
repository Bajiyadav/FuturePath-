"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

async function handleSubmit(
e: React.FormEvent<HTMLFormElement>
) {
e.preventDefault();


setLoading(true);

const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name,
    email,
    subject,
    message,
  }),
});

const data = await response.json();

setLoading(false);

if (response.ok) {
  alert("Message sent successfully!");

  setName("");
  setEmail("");
  setSubject("");
  setMessage("");
} else {
  alert(data.error || "Something went wrong");
}


}

return (
<> <Navbar />


  <main className="min-h-screen bg-slate-950 text-white">
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          Contact Us
        </h1>

        <p className="mt-6 text-xl text-slate-400">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-3xl space-y-6 rounded-3xl bg-white/5 p-10"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full rounded-xl bg-slate-900 p-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-xl bg-slate-900 p-4"
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          className="w-full rounded-xl bg-slate-900 p-4"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="w-full rounded-xl bg-slate-900 p-4"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold"
        >
          {loading
            ? "Sending..."
            : "Send Message"}
        </button>
      </form>
    </section>
  </main>

  <Footer />
</>


);
}
