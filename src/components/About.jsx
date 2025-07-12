import React from "react";

const About = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            About The Doctor
          </span>
          <h2 className="text-4xl text-[36px] md:text-5xl  font-bold text-gray-900 mb-4">
            Meet <span className="text-teal-600">Dr. Devanshi Sharma</span>
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image - Clean and Simple */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border-8 bg-teal-800 border-teal-100">
              <img
                src="/assets/doctor-pic.webp"
                alt="Dr. Devanshi Sharma"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-sm md:text-[16px] text-center absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-teal-600 px-6 py-2 rounded-full shadow-md">
              <span className="font-bold">MBBS, MD Medicine</span>
            </div>
          </div>

          {/* Doctor Information */}
          <div className="space-y-8">
            <div className="prose max-w-none text-gray-600">
              <p className="text-[15px] text-justify md:text-lg leading-relaxed">
                Dr. Devanshi Sharma is a board-certified Internal Medicine
                specialist with over 7 years of clinical experience. Her
                patient-centered approach combines evidence-based medicine with
                compassionate care, ensuring optimal health outcomes for her
                patients.
              </p>
              <p className="text-[15px] text-justify md:text-lg leading-relaxed">
                After graduating with honors from the prestigious Adesh Medical
                College, she completed her residency and served as an Assistant
                Professor, training future generations of physicians.
              </p>
            </div>

            {/* Qualifications - Clean Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="bg-teal-100 p-2 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Education</h3>
                </div>
                <p className="text-gray-600 text-sm lg:text-[16px]">
                  MBBS, MD (Medicine)
                  <br />
                  Adesh Medical College, Mohari
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Experience
                  </h3>
                </div>
                <p className="text-gray-600 text-sm lg:text-[16px]">
                  7+ Years Clinical Practice
                  <br />
                  Former Assistant Professor
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Specialization
                  </h3>
                </div>
                <p className="text-gray-600 text-sm lg:text-[16px]">
                  Internal Medicine
                  <br />
                  Chronic Disease Management
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Languages</h3>
                </div>
                <p className="text-gray-600 text-sm lg:text-[16px]">
                  English, Hindi, Punjabi
                  <br />
                  Fluent in all three
                </p>
              </div>
            </div>

            {/* Call to Action - Clean Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="bg-white text-sm md:text-[16px] text-teal-600 border border-teal-600 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors duration-300"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
