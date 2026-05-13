export default function Location() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sky font-semibold text-sm uppercase tracking-widest">
            Find Us
          </span>
          <h1 className="section-title mt-2">Our Location</h1>
          <p className="section-subtitle">
            We welcome visits and consultations by appointment.
          </p>
        </div>

        <div className="card overflow-hidden">
          <div className="aspect-video">
            <iframe
              title="SBT Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.3970457462774!2d-86.34409992351726!3d39.75319299575641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca5fc160500bb%3A0xd3138f85f43b7287!2s10210%20New%20Dawn%20Pl%2C%20Avon%2C%20IN%2046123!5e0!3m2!1sen!2sus!4v1745873161262!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-6 text-sm text-gray-700 space-y-1">
            <p className="font-semibold text-navy">Small Business Technologies</p>
            <p>10210 New Dawn Pl, Avon, IN 46123</p>
            <p>
              <a
                href="mailto:Contact@wearesbt.com"
                className="text-sky hover:underline"
              >
                Contact@wearesbt.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
