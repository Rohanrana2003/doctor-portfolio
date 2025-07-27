import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle,
  Stethoscope,
  Star,
  Award,
  Users,
  Section,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
    doctorName: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.appointmentDate ||
      !formData.appointmentTime ||
      !formData.doctorName
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        appointmentDate: "",
        appointmentTime: "",
        doctorName: "",
        message: "",
      });
    }, 3000);
  };

  const doctors = [
    {
      name: "Dr. Divanshee Sharma",
      specialty: "Diabetes Specialist",
      experience: "7+ years",
      rating: 4.9,
      patients: "1500+",
      image: "👩‍⚕️",
    },
    {
      name: "Dr. Sachin Madaan",
      specialty: "Radiologist",
      experience: "9+ years",
      rating: 4.8,
      patients: "2000+",
      image: "👨‍⚕️",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  if (isSubmitted) {
    return (
      <Section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 text-center max-w-md w-full border border-gray-100">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-md">
            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
            Your appointment request has been submitted successfully. We'll
            contact you within 24 hours to confirm your appointment.
          </p>
          <div className="w-full bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full h-2 sm:h-2.5">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 sm:h-2.5 rounded-full animate-pulse shadow-sm"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <section
      id="appointment"
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-3 sm:mb-4 shadow-md">
            <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3">
            Book Your Appointment
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Schedule a consultation with our expert doctors and take the first
            step towards better health
          </p>
          <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 sm:mt-5 rounded-full shadow-sm"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-5 sm:p-6 border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact Information
            </h2>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                    Address
                  </h3>
                  <p className="text-gray-600 mt-1 text-xs sm:text-sm leading-relaxed">
                    SCO 9, Ground Floor, Block B2, Near SBI Bank, Wave Estate
                    <br />
                    Sector 85, Mohali-140308, Punjab
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                    Phone
                  </h3>
                  <a
                    href="tel:+917302204937"
                    className="text-gray-600 mt-1 text-xs sm:text-sm"
                  >
                    +91 7302204937
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                    Email
                  </h3>
                  <a
                    href="mailto:sujeevaclinic@gmail.com"
                    className="text-gray-600 mt-1 text-xs sm:text-sm"
                  >
                    sujeevaclinic@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                    Working Hours
                  </h3>
                  <p className="text-gray-600 mt-1 text-xs sm:text-sm leading-relaxed">
                    Mon - Sat: 4:00 PM - 7:00 AM
                    <br />
                    Sunday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-3 sm:p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg sm:rounded-xl">
              <h3 className="font-bold text-red-800 text-xs sm:text-sm mb-1 sm:mb-2 flex items-center">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Emergency Contact
              </h3>
              <p className="text-red-700 text-xs sm:text-sm">
                For urgent medical situations, please call:{" "}
                <strong>+91 7302204937</strong>
              </p>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-5 sm:p-6 border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Schedule Appointment
            </h2>

            <div className="space-y-4 sm:space-y-5">
              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs md:text-[16px] font-semibold text-gray-700 mb-1 sm:mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="outline-none w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-sm text-gray-900 placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-[16px] font-semibold text-gray-700 mb-1 sm:mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="outline-none w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-sm text-gray-900 placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs md:text-[16px] font-semibold text-gray-700 mb-1 sm:mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="outline-none w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-sm text-gray-900 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-[16px] font-semibold text-gray-700 mb-1 sm:mb-2">
                    Phone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="outline-none w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-sm text-gray-900 placeholder-gray-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-xs md:text-[16px] font-semibold text-gray-700 mb-2 sm:mb-3">
                  Select Doctor *
                </label>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {doctors.map((doctor) => (
                    <div
                      key={doctor.name}
                      className={`relative p-3 sm:p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.doctorName === doctor.name
                          ? "border-indigo-500 bg-indigo-50 shadow-sm"
                          : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          doctorName: doctor.name,
                        }))
                      }
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="text-2xl sm:text-3xl">
                          {doctor.image}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                            {doctor.name}
                          </h3>
                          <p className="text-indigo-600 font-medium text-xs sm:text-sm">
                            {doctor.specialty}
                          </p>
                          <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1">
                            <div className="flex items-center space-x-1">
                              <Award className="w-3 h-3 text-amber-500" />
                              <span className="text-xs text-gray-600">
                                {doctor.experience}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-amber-500" />
                              <span className="text-xs text-gray-600">
                                {doctor.rating}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-3 h-3 text-green-500" />
                              <span className="text-xs text-gray-600">
                                {doctor.patients}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border ${
                            formData.doctorName === doctor.name
                              ? "bg-indigo-500 border-indigo-500"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.doctorName === doctor.name && (
                            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto mt-[2px] sm:mt-1"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Appointment Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs md:text-[16px] font-semibold text-gray-700 mb-1 sm:mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="outline-none w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-sm text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-[16px] font-semibold text-gray-700 mb-1 sm:mb-2">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <select
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleInputChange}
                      required
                      className="outline-none w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 appearance-none text-sm text-gray-900"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs md:text-[16px] font-semibold text-gray-700 mb-1 sm:mb-2">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-2.5 sm:top-3 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="outline-none w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none text-sm text-gray-900 placeholder-gray-400"
                    placeholder="Please describe your symptoms or concerns..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-bold text-sm sm:text-base hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
