import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="mx-auto max-w-4xl px-6 py-20">
          <h1 className="text-center text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-center text-lg text-slate-600">
            We'd love to hear from you.
          </p>

          <form className="mt-16 rounded-2xl bg-white p-8 shadow-sm">
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border p-4"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="rounded-xl border p-4"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="rounded-xl border p-4"
              />

              <button
                className="rounded-xl bg-black py-3 text-white"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}