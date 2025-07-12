import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Dr. Sharma's expertise and compassionate care helped me manage my diabetes effectively. I'm grateful for her thorough approach.",
      author: "Rajesh Patel",
      role: "Patient since 2018",
    },
    {
      quote:
        "The best physician I've ever consulted. She takes time to listen and explains everything clearly. Highly recommended!",
      author: "Priya Deshmukh",
      role: "Patient since 2015",
    },
    {
      quote:
        "As a senior citizen, I appreciate Dr. Sharma's patience and comprehensive geriatric care. She's truly exceptional.",
      author: "Mrs. Iyer",
      role: "Patient since 2012",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-amber-700 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Patient <span className="text-white">Testimonials</span>
          </h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Hear what our patients say about their experiences with Dr. Devanshi
            Sharma.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
