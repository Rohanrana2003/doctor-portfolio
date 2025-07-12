import React, { useState, useRef, useEffect } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(300); // Default width
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  const testimonials = [
    {
      quote:
        "Dr. Sharma's expertise helped me manage my diabetes effectively. Her compassionate approach made all the difference.",
      author: "Rajesh Patel",
      role: "Diabetes Patient",
      rating: 5,
    },
    {
      quote:
        "The best physician I've consulted. She takes time to listen and explains everything clearly.",
      author: "Priya Deshmukh",
      role: "Hypertension Patient",
      rating: 5,
    },
    {
      quote:
        "As a senior with multiple conditions, I appreciate Dr. Sharma's comprehensive geriatric care.",
      author: "Mrs. Iyer",
      role: "Geriatric Patient",
      rating: 5,
    },
    {
      quote:
        "My liver condition improved dramatically under Dr. Sharma's care. Her holistic approach is remarkable.",
      author: "Amit Joshi",
      role: "Liver Patient",
      rating: 5,
    },
    {
      quote:
        "Dr. Sharma's metabolic disorder program helped me lose 20kg and keep it off. Life-changing!",
      author: "Neha Gupta",
      role: "Obesity Patient",
      rating: 5,
    },
    {
      quote:
        "Dr. Sharma's COVID-19 aftercare helped me recover fully from long-term symptoms.",
      author: "Rahul Nair",
      role: "Post-COVID Patient",
      rating: 5,
    },
  ];

  // Calculate card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const isMobile = window.innerWidth < 768;
        const containerWidth = containerRef.current.clientWidth;
        const gap = 24; // 24px gap between cards
        const newCardWidth = isMobile
          ? containerWidth - 48 // 1 card on mobile (24px padding each side)
          : (containerWidth - 2 * gap) / 3; // 3 cards on desktop

        setCardWidth(newCardWidth);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const scrollToTestimonial = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const scrollPosition = index * (cardWidth + 24); // 24px gap
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / (cardWidth + 24)); // 24px gap
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/doctor-consultation-bg.jpg"
          alt="Doctor consultation background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Trusted <span className="text-amber-300">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-teal-100 max-w-2xl mx-auto text-base sm:text-lg">
            Hear from our patients about their experiences with Dr. Devanshi
            Sharma
          </p>
        </div>

        {/* Testimonials Container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden px-3 sm:px-0"
        >
          {/* Scrollable Testimonials */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center"
                style={{
                  width: `${cardWidth}px`,
                  paddingRight: "24px", // gap between cards
                }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-amber-300/30 h-full">
                  <div className="p-6 sm:p-8 h-full flex flex-col">
                    {/* Rating Stars */}
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <div className="relative flex-grow mb-4 sm:mb-6">
                      <svg
                        className="absolute -top-2 -left-2 w-6 sm:w-8 h-6 sm:h-8 text-white/20"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-white italic text-base sm:text-lg pl-5 sm:pl-6">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="mt-auto pt-3 sm:pt-4 border-t border-white/20">
                      <h4 className="text-white font-bold text-sm sm:text-base">
                        {testimonial.author}
                      </h4>
                      <p className="text-teal-200 text-xs sm:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots - Simple Color Change */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                activeIndex === index ? "bg-amber-400" : "bg-white/30"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
