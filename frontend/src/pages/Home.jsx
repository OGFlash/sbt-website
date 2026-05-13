import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Home() {
  // Show first 4 services as a preview
  const preview = services.slice(0, 4);

  return (
    <>
      <Hero />

      {/* ── Mission ─────────────────────────────────────────────── */}
      <section className="bg-navy py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sky font-semibold text-sm uppercase tracking-widest">
            Our Mission
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-3 mb-6 leading-snug">
            We fix the stuff you Googled for three hours<br className="hidden md:block" /> and still couldn't solve.
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            At Small Business Technologies, our mission is simple: keep your business
            running so smoothly that you forget IT problems were ever a thing. No jargon,
            no finger-pointing, no "have you tried turning it off and on again" — well,
            okay, sometimes that one. We bring enterprise-grade solutions to small
            businesses that deserve big results without the big price tag.
          </p>
          {/* Three pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
            {[
              {
                icon: null,
                title: "Protect",
                body: "Your data is locked down tighter than your Wi-Fi password — and we actually know what yours is.",
              },
              {
                icon: null,
                title: "Perform",
                body: "Fast networks, zero downtime, and systems that don't freeze up during your most important Zoom call.",
              },
              {
                icon: null,
                title: "Partner",
                body: "We're not a faceless helpdesk ticket. We're your local IT team — one call, one real human, every time.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="bg-navy-light rounded-2xl p-6 border border-white/10 hover:border-sky/40 transition-colors"
              >
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Team ───────────────────────────────────────── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky font-semibold text-sm uppercase tracking-widest">
              The People Behind SBT
            </span>
            <h2 className="section-title mt-2">Meet the Team</h2>
            <p className="section-subtitle">
              Local experts. Real experience. Zero corporate runaround.
            </p>
          </div>

          {/* Caleb — full-width feature row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/assets/caleb2.png"
                alt="Caleb Yoder"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div>
              <span className="text-sky font-semibold text-xs uppercase tracking-widest">
                Co-Founder &amp; IT Director
              </span>
              <h3 className="text-3xl font-bold text-navy mt-1 mb-4">Caleb Yoder</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                With over 10 years of professional experience in information technology,
                Caleb founded Small Business Technologies to deliver enterprise-grade IT
                support with a personal, small-town touch. Based in Indiana, he has worked
                with businesses of all sizes to implement secure networks, modernize
                infrastructure, and maintain operational uptime.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Caleb specializes in managed IT services, network optimization, and
                cybersecurity. Whether you're launching a new startup or upgrading an
                existing system, he's committed to delivering cost-effective solutions
                tailored to your needs.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Managed IT", "Cybersecurity", "Network Infrastructure", "Help Desk"].map((tag) => (
                  <span key={tag} className="text-xs bg-sky/10 text-sky font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Andrew & Kyle — side-by-side cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Andrew */}
            <div className="card p-0 overflow-hidden flex flex-col">
              <div className="h-72 overflow-hidden bg-gray-100">
                <img
                  src="/assets/sbt-andrew-crop.png"
                  alt="Andrew King"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sky font-semibold text-xs uppercase tracking-widest">
                  Co-Founder &amp; Technology Lead
                </span>
                <h3 className="text-2xl font-bold text-navy mt-1 mb-3">Andrew King</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Andrew brings deep expertise in full-stack web development, cloud
                  architecture, and agentic AI. He designed and built this very website
                  and leads SBT's cloud hosting strategy on AWS — from spinning up
                  serverless APIs to architecting scalable, cost-efficient infrastructure
                  that actually makes sense for small businesses. If it runs in the cloud,
                  Andrew built it, broke it, fixed it, and made it faster.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Web Development", "AWS / Cloud", "Agentic AI", "DevOps"].map((tag) => (
                    <span key={tag} className="text-xs bg-sky/10 text-sky font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Kyle */}
            <div className="card p-0 overflow-hidden flex flex-col">
              <div className="h-72 overflow-hidden bg-gray-100">
                <img
                  src="/assets/sbt-kyle-crop.png"
                  alt="Kyle Goheen"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sky font-semibold text-xs uppercase tracking-widest">
                  Co-Founder &amp; Business Development
                </span>
                <h3 className="text-2xl font-bold text-navy mt-1 mb-3">Kyle Goheen</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Kyle is the relationship at the heart of SBT. With a sharp background
                  in marketing, sales, and product management, he's the one who makes sure
                  clients feel heard, projects stay on track, and the business keeps
                  growing. Kyle translates complex tech needs into clear solutions and
                  ensures every client — from first call to final delivery — has a
                  genuinely great experience.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Marketing", "Sales", "Product Management", "Client Success"].map((tag) => (
                    <span key={tag} className="text-xs bg-sky/10 text-sky font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services preview ────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sky font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="section-title mt-2">Our Services</h2>
          <p className="section-subtitle">
            Explore our offerings tailored to support your business success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {preview.map((s) => (
              <Link key={s.id} to={`/services/${s.id}`} className="card group">
                <div className="h-40 bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy text-sm">{s.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{s.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tagline strip ───────────────────────────────────────── */}
      <section className="bg-navy py-16 text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Local Expertise.&nbsp; Scalable Solutions.&nbsp; Trusted Support.
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Ready to modernize your IT? Let's talk.
        </p>
        <Link to="/contact" className="btn-primary mt-8 inline-block">
          Contact Us Today
        </Link>
      </section>
    </>
  );
}
