import { useState } from "react";
import { portfolio } from "../data/portfolio";
import { Link } from "react-router-dom";

// Microlink free API — generates a real browser screenshot on demand
function screenshotUrl(siteUrl) {
  return `https://api.microlink.io/?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}

function SitePreview({ project }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative h-64 bg-gray-100 overflow-hidden">
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm animate-pulse">
          Loading preview…
        </div>
      )}
      {!error ? (
        <img
          src={screenshotUrl(project.url)}
          alt={`${project.name} screenshot`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <div className="h-full flex items-center justify-center text-gray-400 text-sm">
          Preview unavailable
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sky font-semibold text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h1 className="section-title mt-2">Portfolio</h1>
          <p className="section-subtitle">
            Real websites built for real businesses. Here's what we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolio.map((project) => (
            <div key={project.id} className="card group flex flex-col">
              {/* Screenshot */}
              <div className="relative overflow-hidden bg-gray-100 rounded-t-2xl border-b border-gray-200">
                {/* Browser chrome bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 truncate">
                    {project.url}
                  </span>
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <SitePreview project={project} />
                </a>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-sky/10 text-sky px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-navy">{project.name}</h2>
                <p className="text-gray-500 text-sm mt-2 flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sky font-semibold text-sm hover:underline"
                >
                  Visit Site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-navy rounded-2xl py-12 px-6 text-center">
          <h2 className="text-white text-2xl font-bold">Want a site like this?</h2>
          <p className="text-gray-400 mt-2">
            Check out our packages below or reach out and we'll build something great for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="#pricing"
              className="btn-primary"
            >
              See Pricing
            </a>
            <Link to="/contact" className="btn-outline">
              Start a Project
            </Link>
          </div>
        </div>

        {/* ── Pricing ─────────────────────────────────────────── */}
        <div id="pricing" className="mt-24">
          <div className="text-center mb-12">
            <span className="text-sky font-semibold text-sm uppercase tracking-widest">
              Website Packages
            </span>
            <h2 className="section-title mt-2">Simple, Transparent Pricing</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every site starts with a one-time build fee, then a low monthly cost covers
              hosting, maintenance, security updates, and ongoing support. Pick a package
              and we'll make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: "Starter",
                tagline: "Perfect for getting online fast.",
                upfront: "$799",
                monthly: "$49",
                highlight: false,
                features: [
                  "Up to 5 pages",
                  "Mobile-friendly responsive design",
                  "Contact form",
                  "Domain & hosting setup",
                  "Basic on-page SEO",
                  "SSL certificate included",
                  "1 round of revisions",
                ],
              },
              {
                name: "Business",
                tagline: "Best for growing businesses.",
                upfront: "$1,499",
                monthly: "$79",
                highlight: true,
                features: [
                  "Up to 10 pages",
                  "Custom branded design",
                  "Contact form + lead capture",
                  "Google Analytics integration",
                  "On-page SEO + sitemap",
                  "SSL + monthly maintenance",
                  "3 rounds of revisions",
                  "Priority email support",
                ],
              },
              {
                name: "Premium",
                tagline: "For complex or custom builds.",
                upfront: "$2,999+",
                monthly: "$129",
                highlight: false,
                features: [
                  "Unlimited pages",
                  "Custom functionality / integrations",
                  "E-commerce or booking systems",
                  "Advanced SEO strategy",
                  "Performance optimization",
                  "Monthly analytics report",
                  "Unlimited revisions during build",
                  "Dedicated account manager",
                ],
              },
            ].map(({ name, tagline, upfront, monthly, highlight, features }) => (
              <div
                key={name}
                className={`rounded-2xl flex flex-col overflow-hidden border-2 transition-shadow duration-300 hover:shadow-xl ${
                  highlight
                    ? "border-sky shadow-lg shadow-sky/20"
                    : "border-gray-200"
                }`}
              >
                {highlight && (
                  <div className="bg-sky text-navy text-xs font-bold uppercase tracking-widest text-center py-2">
                    Most Popular
                  </div>
                )}
                <div className={`p-7 flex flex-col flex-grow ${highlight ? "bg-white" : "bg-white"}`}>
                  <h3 className="text-xl font-bold text-navy">{name}</h3>
                  <p className="text-gray-500 text-sm mt-1 mb-5">{tagline}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold text-navy">{upfront}</span>
                      <span className="text-gray-400 text-sm mb-1">upfront</span>
                    </div>
                    <div className="text-sky font-semibold mt-1">
                      {monthly}
                      <span className="text-gray-400 font-normal text-sm"> / month</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-grow mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-sky flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`text-center rounded-lg px-6 py-3 font-semibold text-sm transition-colors ${
                      highlight
                        ? "bg-sky text-navy hover:bg-blue-300"
                        : "border-2 border-sky text-sky hover:bg-sky hover:text-navy"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-10 bg-gray-100 border border-gray-200 rounded-xl px-6 py-5 text-sm text-gray-500 leading-relaxed max-w-3xl mx-auto text-center">
            <strong className="text-gray-700">Pricing Disclaimer:</strong> All prices shown
            are starting estimates and may vary based on the scope, complexity, number of
            custom features, and timeline of your project. A final quote will be provided
            after an initial consultation. Monthly fees cover hosting, SSL, maintenance,
            and support — no hidden charges.
          </div>
        </div>

      </div>
    </section>
  );
}
