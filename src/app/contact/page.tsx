import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
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

      <form className="mx-auto mt-16 max-w-3xl space-y-6 rounded-3xl bg-white/5 p-10">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl bg-slate-900 p-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl bg-slate-900 p-4"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-xl bg-slate-900 p-4"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full rounded-xl bg-slate-900 p-4"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  </main>

  <Footer />
</>


);
}
