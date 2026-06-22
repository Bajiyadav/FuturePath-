import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold">FuturePath</h3>
            <p className="mt-3 text-sm text-gray-600">
              AI-powered career guidance, mentorship, skill assessments,
              and career roadmaps for students and professionals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Platform</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/domains">Career Domains</Link></li>
              <li><Link href="/mentors">Mentors</Link></li>
              <li><Link href="/stories">Success Stories</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FuturePath Careers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}