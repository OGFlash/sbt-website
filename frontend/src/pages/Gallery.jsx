const images = [
  "/assets/slide-image-1.jpg",
  "/assets/slide-image-2.jpg",
  "/assets/slide-image-3.jpg",
  "/assets/slide-image-4.jpg",
  "/assets/slide-image-5.jpg",
  "/assets/semp-in-the-flesh.jpg",
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sky font-semibold text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h1 className="section-title mt-2">Gallery</h1>
          <p className="section-subtitle">
            A collection of our work, highlighting our attention to detail and
            customer satisfaction.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-2xl shadow-md">
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
