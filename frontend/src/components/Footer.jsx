import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src="/assets/sbt-logo3.png" alt="SBT" className="h-10 mb-4" />
            <p className="text-sm leading-relaxed">
              Local Expertise. Scalable Solutions. Trusted Support.
            </p>
            <div className="flex gap-4 mt-5">
              {[
                { label: "Facebook", href: "https://www.facebook.com/SmallBusinessTechnologyOfIndy", icon: "fab fa-facebook-f" },
                { label: "LinkedIn", href: "#", icon: "fab fa-linkedin-in" },
                { label: "Twitter", href: "#", icon: "fab fa-twitter" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={label === "Facebook" ? "_blank" : undefined}
                  rel={label === "Facebook" ? "noopener noreferrer" : undefined}
                  className="text-gray-500 hover:text-sky transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/location", label: "Location" },
                { to: "/contact", label: "Contact Us" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-sky transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Caleb Yoder, Founder</li>
              <li>10210 New Dawn Pl, Avon, IN 46123</li>
              <li>
                <a
                  href="mailto:Contact@wearesbt.com"
                  className="hover:text-sky transition-colors"
                >
                  Contact@wearesbt.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light mt-10 pt-6 text-center text-xs text-gray-600">
          © 2025 Small Business Technologies (SBT). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
