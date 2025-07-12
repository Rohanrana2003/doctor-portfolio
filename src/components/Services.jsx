import React from "react";

const Services = () => {
  const services = [
    {
      title: "Diabetes & Metabolic Disorders",
      description:
        "Comprehensive management of diabetes, obesity, and endocrine conditions",
      icon: (
        <svg
          className="w-10 h-10 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      shape: "rounded-tr-3xl rounded-bl-3xl",
    },
    {
      title: "Hypertension & Cardiac Care",
      description:
        "Specialized treatment for high blood pressure and heart conditions",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      shape: "rounded-tl-3xl rounded-br-3xl",
    },
    {
      title: "Diabetic Foot Care",
      description:
        "Preventative and therapeutic care for diabetic foot complications",
      icon: (
        <svg
          className="w-10 h-10 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7 11.5V14m0-2.5v-6m1 0h10m-5 5h5m-5 2h5M9 8.5h1m-1 3h1m4-3h1m-1 3h1"
          />
        </svg>
      ),
      shape: "rounded-br-3xl rounded-tl-3xl",
    },
    {
      title: "Liver & Kidney Care",
      description: "Diagnosis and treatment of hepatic and renal disorders",
      icon: (
        <svg
          className="w-10 h-10 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      shape: "rounded-bl-3xl rounded-tr-3xl",
    },
    {
      title: "Nutritional Disorders",
      description:
        "Management of blood-related and nutritional deficiency conditions",
      icon: (
        <svg
          className="w-10 h-10 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
      shape: "rounded-tl-3xl rounded-br-3xl",
    },
    {
      title: "Infectious Diseases",
      description:
        "Treatment for typhoid, dengue, COVID-19 and other infections",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      shape: "rounded-tl-3xl rounded-br-3xl",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-teal-700 to-teal-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 backdrop-blur-sm">
            Our Specializations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive{" "}
            <span className="text-amber-300">Medical Services</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-teal-100 max-w-2xl mx-auto mt-6 text-lg">
            Expert care for a wide range of health conditions with personalized
            treatment plans.
          </p>
        </div>

        {/* Services Grid - White Cards on Teal Background */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white ${service.shape} shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Icon with floating effect */}
                <div className="relative mb-8">
                  <div className="absolute -top-12 right-0 w-24 h-24 rounded-full bg-teal-50 opacity-80"></div>
                  <div className="relative z-10 w-16 h-16 bg-white border-2 border-teal-100 rounded-full flex items-center justify-center shadow-sm">
                    {service.icon}
                  </div>
                </div>

                {/* Content with diagonal accent */}
                <div className="relative flex-grow">
                  <div className="absolute -left-8 top-0 w-2 h-16 bg-teal-500 transform -skew-y-12"></div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 pl-6">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 pl-6">
                    {service.description}
                  </p>
                </div>

                {/* Animated button */}
                <a
                  href="#appointment"
                  className="mt-4 inline-flex items-center text-teal-600 font-medium group pl-6"
                >
                  <span className="mr-2">Learn more</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-teal-100 mt-6 text-lg">
            Call us directly:{" "}
            <span className="font-bold text-white">+91 98765 43210</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
