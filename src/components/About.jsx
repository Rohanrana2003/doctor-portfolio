import {
  GraduationCap,
  Award,
  Clock,
  Users,
  Heart,
  Stethoscope,
  MapPin,
  Calendar,
  BookOpen,
  Star,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

const About = ({ doctorData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-8">
            {/* Doctor Image */}
            <div className="relative flex-shrink-0">
              <img
                src={doctorData.image}
                alt={doctorData.name}
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl object-cover shadow-lg border-4 border-blue-100"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                {doctorData.name}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-600 font-semibold mb-1 sm:mb-2">
                {doctorData.specialty}
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
                {doctorData.titles.map((title, i) => (
                  <i key={i}>{title}, </i>
                ))}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
                <div className="bg-blue-50 rounded-lg p-2 sm:p-3 text-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs sm:text-sm text-gray-600">Experience</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    {doctorData.experience}
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-2 sm:p-3 text-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600 mx-auto mb-1" />
                  <p className="text-xs sm:text-sm text-gray-600">Patients</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    {doctorData.patients}
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-2 sm:p-3 text-center">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-600 mx-auto mb-1" />
                  <p className="text-xs sm:text-sm text-gray-600">Rating</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    {doctorData.rating} ⭐
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-2 sm:p-3 text-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-600 mx-auto mb-1" />
                  <p className="text-xs sm:text-sm text-gray-600">Location</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    {doctorData.location}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
                <div className="flex items-center bg-blue-100 rounded-full px-3 sm:px-4 py-1 sm:py-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm text-blue-800 font-medium">
                    {doctorData.phone}
                  </span>
                </div>
                <div className="flex items-center bg-green-100 rounded-full px-3 sm:px-4 py-1 sm:py-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm text-green-800 font-medium">
                    {doctorData.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 lg:mr-4">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              About Dr. {doctorData.name.split(" ")[1]}
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {doctorData.about}
          </p>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Education */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 lg:mr-4">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Education
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {doctorData.education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-500 pl-3 sm:pl-4"
                >
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-600 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-gray-600">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 lg:mr-4">
                <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Specializations
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {doctorData.specializations.map((spec, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-lg p-2 sm:p-3 text-center"
                >
                  <span className="text-xs sm:text-sm text-blue-800 font-medium">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specializations & Achievements */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Certifications */}
          {/* <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 lg:mr-4">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Certifications
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {doctorData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Achievements */}
          {/* <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 lg:mr-4">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Achievements
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {doctorData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-gray-700">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-4 sm:p-6 lg:p-8 mt-6 sm:mt-8 text-center text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
            Ready to Schedule an Appointment?
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mb-4 sm:mb-6">
            Experience exceptional cardiac care with Dr.{" "}
            {doctorData.name.split(" ")[1]}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center">
            <a
              href="#appointment"
              className="bg-white cursor-pointer text-blue-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="tel:7302204937"
              className="border cursor-pointer border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Doctor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
