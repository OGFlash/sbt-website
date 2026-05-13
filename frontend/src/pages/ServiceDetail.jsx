import { useParams, Link, Navigate } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/services"
          className="inline-flex items-center text-sky text-sm font-medium mb-8 hover:underline"
        >
          ← Back to Services
        </Link>

        <div className="card overflow-hidden">
          <div className="h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-contain p-4"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-navy mb-2">{service.name}</h1>
            <p className="text-gray-500 mb-8">{service.summary}</p>

            <h2 className="text-lg font-semibold text-navy mb-4">
              A detailed breakdown of our specialized services:
            </h2>
            <ul className="space-y-3">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Get a Quote
              </Link>
              {service.portfolioLink && (
                <Link to="/portfolio" className="btn-outline">
                  See Our Work
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
