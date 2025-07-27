import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Calendar,
  Building,
  Car,
  Bus,
  Navigation,
  Users,
  Stethoscope,
  Shield,
  Wifi,
  Coffee,
  Accessibility,
  CheckCircle,
  AlertCircle,
  Star,
} from "lucide-react";

const ClinicInfo = () => {
  const [activeTab, setActiveTab] = useState("timings");

  const clinicData = {
    name: "Sujeeva Clinic",
    address: "SCO 9, Ground Floor, Block B2, Near SBI Bank, Wave Estate",
    city: "Sector 85, Mohali-140308, Punjab",
    phone: "+91 7302204937",
    email: "sujeevaclinic@gmail.com",
    website: "www.heartcaremedical.com",
    description:
      "A state-of-the-art medical facility specializing in cardiovascular care and neurology services. Our clinic is equipped with the latest technology and staffed by experienced medical professionals dedicated to providing exceptional patient care.",
    timings: {
      monday: { open: "4:00 PM", close: "7:00 PM", status: "Open" },
      tuesday: { open: "4:00 PM", close: "7:00 PM", status: "Open" },
      wednesday: { open: "4:00 PM", close: "7:00 PM", status: "Open" },
      thursday: { open: "4:00 PM", close: "7:00 PM", status: "Open" },
      friday: { open: "4:00 PM", close: "7:00 PM", status: "Open" },
      saturday: { open: "10:00 AM", close: "2:00 PM", status: "Open" },
      sunday: { open: "Closed", close: "", status: "Closed" },
    },
    specialHours: [
      { date: "December 25", hours: "Closed", note: "Christmas Day" },
      { date: "January 1", hours: "Closed", note: "New Year's Day" },
      { date: "July 4", hours: "9:00 AM - 12:00 PM", note: "Independence Day" },
    ],
    doctors: [
      {
        name: "Dr. Divanshee Sharma",
        specialty: "Diabetologist",
      },
      {
        name: "Dr. Sachin Madaan",
        specialty: "Radiologist",
      },
    ],
    facilities: [
      "Advanced Cardiac Imaging",
      "Digital X-Ray",
      "ECG & EKG Services",
      "Laboratory Services",
      "Pharmacy",
      "Patient Parking",
      "Free WiFi",
      "Wheelchair Accessible",
      "Coffee Station",
      "Emergency Care",
    ],
    transportation: {
      parking: "Free parking available with 200+ spaces",
      publicTransport: [
        "Subway: Line 4, 5, 6 - 59th St Station (5 min walk)",
        "Bus: M15, M101, M102 - Medical Plaza Stop",
        "Taxi/Uber pickup zone available",
      ],
    },
    rating: 4.8,
    reviews: 1250,
  };

  const getCurrentStatus = () => {
    const now = new Date();
    const dayIndex = now.getDay();
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const currentDay = days[dayIndex];

    if (currentDay && clinicData.timings[currentDay]) {
      return clinicData.timings[currentDay].status === "Open"
        ? "Open Now"
        : "Closed";
    }
    return "Closed";
  };

  const formatDay = (day) => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-4 sm:mb-6">
            <Building className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 px-2">
            Visit Our <span className="text-blue-600">Clinic</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Find all the information you need about our location, timings, and
            facilities
          </p>
        </div>

        {/* Clinic Overview Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Clinic Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {clinicData.name}
                </h2>
                <div
                  className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start ${
                    getCurrentStatus() === "Open Now"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {getCurrentStatus()}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {clinicData.description}
              </p>

              {/* Contact Info */}
              <div className="grid gap-3 sm:gap-4">
                <div className="flex items-center bg-blue-50 rounded-lg p-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-blue-800 font-medium break-all">
                    {clinicData.phone}
                  </span>
                </div>
                <div className="flex items-center bg-green-50 rounded-lg p-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-green-800 font-medium break-all">
                    {clinicData.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Rating & Quick Stats */}
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-current" />
                  <span className="text-xl sm:text-2xl font-bold text-gray-900 ml-2">
                    {clinicData.rating}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  {clinicData.reviews} Reviews
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">
                    2 Specialist Doctors
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">
                    Insurance Accepted
                  </span>
                </div>
                <div className="flex items-center">
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">
                    Free Parking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg  ">
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="flex min-w-max sm:min-w-0">
              {[
                { id: "timings", label: "Timings", icon: Clock },
                { id: "location", label: "Location", icon: MapPin },
                { id: "doctors", label: "Doctors", icon: Stethoscope },
                { id: "facilities", label: "Facilities", icon: Building },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center cursor-pointer px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <tab.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            {/* Timings Tab */}
            {activeTab === "timings" && (
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Clinic Hours
                </h3>
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                      Regular Hours
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {Object.entries(clinicData.timings).map(
                        ([day, hours]) => (
                          <div
                            key={day}
                            className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="text-sm sm:text-base font-medium text-gray-900">
                              {formatDay(day)}
                            </span>
                            <div className="flex items-center">
                              <span className="text-xs sm:text-sm text-gray-600">
                                {hours.open === "Closed"
                                  ? "Closed"
                                  : `${hours.open} - ${hours.close}`}
                              </span>
                              {hours.status === "Open" ? (
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 ml-1 sm:ml-2" />
                              ) : (
                                <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 ml-1 sm:ml-2" />
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                      Special Hours
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {clinicData.specialHours.map((special, index) => (
                        <div
                          key={index}
                          className="p-2 sm:p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm sm:text-base font-medium text-gray-900">
                              {special.date}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-600">
                              {special.hours}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-yellow-800 mt-1">
                            {special.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Location Tab */}
            {activeTab === "location" && (
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Location & Directions
                </h3>
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-6 ">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                          Address
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-700">
                          {clinicData.address}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700">
                          {clinicData.city}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <div className="flex items-start">
                      <Car className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                          Parking
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-700">
                          {clinicData.transportation.parking}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Doctors Tab */}
            {activeTab === "doctors" && (
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Doctors
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {clinicData.doctors.map((doctor, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 sm:p-6"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                          <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                            {doctor.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-blue-600">
                            {doctor.specialty}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Facilities Tab */}
            {activeTab === "facilities" && (
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Facilities
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {clinicData.facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">
                        {facility}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 sm:p-8 mt-6 sm:mt-8 text-center text-white">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
            Ready to Visit Us?
          </h3>
          <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-6">
            Schedule your appointment today and experience our exceptional care
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#appointment"
              className="bg-white cursor-pointer text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-50 transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="tel:7302204937"
              className=" border-2 cursor-pointer border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicInfo;
