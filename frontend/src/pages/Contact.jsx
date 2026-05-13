import { useState } from "react";

const SERVICE_OPTIONS = [
  "Infrastructure & Network Management",
  "Cloud Services",
  "Cybersecurity Services",
  "Data Protection & Compliance",
  "Help Desk & User Support",
  "Application & Software Management",
  "Strategic IT Consulting",
  "VoIP & Unified Communications",
  "Endpoint & Mobile Device Management",
  "Monitoring, Reporting & Analytics",
  "Web Design / Development",
  "Other",
];

const COMPANY_SIZE_OPTIONS = [
  "Just me (solo / freelancer)",
  "2–10 employees",
  "11–50 employees",
  "51–200 employees",
  "200+ employees",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within the next 30 days",
  "1–3 months",
  "Just exploring options",
];

const INITIAL = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  companySize: "",
  timeline: "",
  message: "",
  howHeard: "",
};

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

const inputCls = (err) =>
  `w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky bg-white ${
    err ? "border-red-400" : "border-gray-300"
  }`;

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(form.email)) {
      e.email = "A valid email is required.";
    }
    if (!form.service) e.service = "Please select a service.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sky font-semibold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="section-title mt-2">Contact Us</h1>
          <p className="section-subtitle">
            Tell us a bit about your needs and we'll get back to you promptly.
          </p>
        </div>

        <div className="card p-8">
          {status === "success" ? (
            <div className="text-center py-10">
              <h2 className="text-xl font-bold text-navy">Message Sent!</h2>
              <p className="text-gray-500 mt-2">
                Thanks for reaching out. We'll be in touch shortly.
              </p>
              <button onClick={() => setStatus("idle")} className="btn-outline mt-6">
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Row: Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name *" error={errors.name}>
                  <input
                    id="name" name="name" type="text"
                    value={form.name} onChange={handleChange}
                    placeholder="Caleb Yoder"
                    className={inputCls(errors.name)}
                  />
                </Field>
                <Field label="Company / Organization" error={errors.company}>
                  <input
                    id="company" name="company" type="text"
                    value={form.company} onChange={handleChange}
                    placeholder="Acme Corp"
                    className={inputCls(errors.company)}
                  />
                </Field>
              </div>

              {/* Row: Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Email Address *" error={errors.email}>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputCls(errors.email)}
                  />
                </Field>
                <Field label="Phone Number" error={errors.phone}>
                  <input
                    id="phone" name="phone" type="tel"
                    value={form.phone} onChange={handleChange}
                    placeholder="574-888-8888"
                    className={inputCls(errors.phone)}
                  />
                </Field>
              </div>

              {/* Service of interest */}
              <Field label="Service of Interest *" error={errors.service}>
                <select
                  id="service" name="service"
                  value={form.service} onChange={handleChange}
                  className={inputCls(errors.service)}
                >
                  <option value="">Select a service…</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>

              {/* Row: Company size + Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Company Size" error={errors.companySize}>
                  <select
                    id="companySize" name="companySize"
                    value={form.companySize} onChange={handleChange}
                    className={inputCls(errors.companySize)}
                  >
                    <option value="">Select size…</option>
                    {COMPANY_SIZE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Project Timeline" error={errors.timeline}>
                  <select
                    id="timeline" name="timeline"
                    value={form.timeline} onChange={handleChange}
                    className={inputCls(errors.timeline)}
                  >
                    <option value="">Select timeline…</option>
                    {TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Message */}
              <Field label="How can we help? *" error={errors.message}>
                <textarea
                  id="message" name="message"
                  rows={5} value={form.message} onChange={handleChange}
                  placeholder="Describe your current setup, pain points, or what you're looking to achieve…"
                  className={`${inputCls(errors.message)} resize-none`}
                />
              </Field>

              {/* How did you hear about us */}
              <Field label="How did you hear about us?" error={errors.howHeard}>
                <input
                  id="howHeard" name="howHeard" type="text"
                  value={form.howHeard} onChange={handleChange}
                  placeholder="Google, referral, social media…"
                  className={inputCls(errors.howHeard)}
                />
              </Field>

              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full text-center disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>

              <p className="text-center text-xs text-gray-400">
                * Required fields. We'll never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
