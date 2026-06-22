import Link from "next/link";

export default function Footer() {
return ( <footer className="border-t border-white/10 bg-slate-950 text-white"> <div className="mx-auto max-w-7xl px-6 py-16"> <div className="grid gap-12 md:grid-cols-4"> <div> <div className="flex items-center gap-3"> <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 font-bold">
FP </div>


          <div>
            <h3 className="text-xl font-bold">
              FuturePath
            </h3>

            <p className="text-sm text-slate-400">
              Career Intelligence Platform
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-400">
          Helping students and professionals discover
          career opportunities through mentorship,
          AI guidance, skill assessments, and
          personalized roadmaps.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Platform
        </h4>

        <ul className="mt-4 space-y-3 text-sm text-slate-400">
          <li><Link href="/domains">Career Domains</Link></li>
          <li><Link href="/mentors">Mentors</Link></li>
          <li><Link href="/about">Success Stories</Link></li>
          <li><Link href="/contact">Pricing</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Company
        </h4>

        <ul className="mt-4 space-y-3 text-sm text-slate-400">
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/mentors">Become a Mentor</Link></li>
          <li><Link href="/domains">Careers</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Contact
        </h4>

        <div className="mt-4 space-y-3 text-sm text-slate-400">
          <p>support@futurepath.ai</p>
          <p>Global Mentor Network</p>
          <p>24/7 Career Support</p>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-white/10 pt-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} FuturePath.
          All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-slate-500">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Cookies</Link>
        </div>
      </div>
    </div>
  </div>
</footer>


);
}
