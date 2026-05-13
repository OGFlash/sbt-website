import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sky font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="section-title mt-2">Our Services</h1>
          <p className="section-subtitle">
            Explore our offerings tailored to support your business success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link key={s.id} to={`/services/${s.id}`} className="card group">
              <div className="h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h2 className="font-bold text-navy text-base">{s.name}</h2>
                <p className="text-gray-500 text-sm mt-2">{s.summary}</p>
                <span className="text-sky text-sm font-medium mt-4 inline-block">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
