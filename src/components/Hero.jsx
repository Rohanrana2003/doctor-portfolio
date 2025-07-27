import React, { useEffect } from "react";
import { User, Award, Clock, MapPin, ArrowRight, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../constant";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (id) => {
    if (id === 1) {
      navigate("/Doctor-Divanshee");
      return;
    } else if (id === 2) {
      navigate("/Doctor-Sachin");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="text-center mb-16">
          <div className=" mb-6 text-2xl md:text-4xl text-[#D1A345]">
            SUJEEVA CLINIC
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert <span className="text-blue-600">Doctors</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our team of highly qualified specialists dedicated to
            providing exceptional healthcare services
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => handleCardClick(doctor.id)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Card Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-bl-full opacity-50"></div>

              {/* Card Content */}
              <div className="relative p-6 sm:p-8">
                {/* Doctor Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="text-center mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base mb-3">
                    {doctor.specialty}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {doctor.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-blue-600 mr-1" />
                    </div>
                    <p className="text-xs text-gray-600">Experience</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {doctor.experience}
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Award className="w-4 h-4 text-green-600 mr-1" />
                    </div>
                    <p className="text-xs text-gray-600">Rating</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {doctor.rating} ⭐
                    </p>
                  </div>
                </div>

                {/* Location & Patients */}
                <div className="flex justify-between items-center mb-6 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{doctor.patients} Patients</span>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex items-center justify-center">
                  <button className="group-hover:bg-blue-600 bg-blue-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center hover:shadow-lg text-sm sm:text-base">
                    View Profile
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Need help choosing the right doctor?
          </p>
          <a
            href="#appointment"
            className="bg-white cursor-pointer text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
