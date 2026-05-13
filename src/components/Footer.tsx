import { MapPin, ExternalLink, TreePine, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                <TreePine className="w-5 h-5 text-green-900" />
              </div>
              <div>
                <p className="font-bold text-lg leading-none">Raney Family</p>
                <p className="text-amber-400 text-sm font-medium">Scholarship</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Sending Red Wing kids to Camp Billings on Lake Fairlee, Vermont — a life-changing
              experience built on friendship, independence, and belonging.
            </p>
            <p className="text-white/40 text-xs mt-4">501(c)(3) Nonprofit Organization</p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-amber-400 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400/60" />
                <a
                  href="mailto:raneyfamilyscholarship@gmail.com"
                  className="hover:text-amber-300 transition-colors leading-snug break-all"
                >
                  raneyfamilyscholarship@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400/60" />
                <address className="not-italic text-sm leading-relaxed">
                  425 W. 3rd Street<br />
                  Red Wing, MN 55066
                </address>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-amber-400 mb-5">
              Key Dates
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex justify-between gap-4">
                <span>Application Deadline</span>
                <span className="text-white font-medium">February 15, 2027</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Notification Date</span>
                <span className="text-white font-medium">By May 15, 2027</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Finalist Interviews</span>
                <span className="text-white font-medium">Week of May 18</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Camp Session</span>
                <span className="text-white font-medium">July 12–25, 2027</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-amber-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <button
                  onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-amber-300 transition-colors"
                >
                  About the Scholarship
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-amber-300 transition-colors"
                >
                  What's Covered
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('eligibility')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-amber-300 transition-colors"
                >
                  Eligibility & Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-amber-300 transition-colors"
                >
                  Apply Now
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Raney Family Scholarship. All rights reserved.
          </p>
          <a
            href="https://campbillings.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Camp Billings Official Website
          </a>
        </div>
      </div>
    </footer>
  );
}
