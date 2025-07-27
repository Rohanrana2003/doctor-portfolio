import {
  Heart,
  Activity,
  Stethoscope,
  Pill,
  Eye,
  Star,
  CheckCircle,
  Users,
  Calendar,
  BookOpen,
  Shield,
  Zap,
} from "lucide-react";

const Services = ({ services }) => {
  // const services = [
  //   {
  //     id: 1,
  //     name: "Diabetes Management",
  //     description: "Comprehensive care for type 1 and type 2 diabetes",
  //     icon: Heart,
  //     color: "blue",
  //   },
  //   {
  //     id: 2,
  //     name: "Blood Sugar Monitoring",
  //     description:
  //       "Advanced glucose tracking and continuous monitoring solutions",
  //     icon: Activity,
  //     color: "green",
  //   },
  //   {
  //     id: 3,
  //     name: "Insulin Therapy",
  //     description:
  //       "Personalized insulin plans and injection technique training",
  //     icon: Pill,
  //     color: "purple",
  //   },
  //   {
  //     id: 4,
  //     name: "Diabetic Eye Care",
  //     description:
  //       "Retinal screening and vision protection for diabetic patients",
  //     icon: Eye,
  //     color: "orange",
  //   },
  //   {
  //     id: 5,
  //     name: "Foot Care Management",
  //     description: "Diabetic foot screening and ulcer prevention strategies",
  //     icon: Star,
  //     color: "pink",
  //   },
  //   {
  //     id: 6,
  //     name: "Nutritional Counseling",
  //     description: "Customized meal plans and dietary guidance for diabetics",
  //     icon: CheckCircle,
  //     color: "teal",
  //   },
  //   {
  //     id: 7,
  //     name: "Lifestyle Coaching",
  //     description:
  //       "Exercise programs and healthy lifestyle modification support",
  //     icon: Users,
  //     color: "indigo",
  //   },
  //   {
  //     id: 8,
  //     name: "Regular Check-ups",
  //     description: "Scheduled monitoring and preventive care appointments",
  //     icon: Calendar,
  //     color: "red",
  //   },
  //   {
  //     id: 9,
  //     name: "Patient Education",
  //     description: "Diabetes awareness workshops and self-management training",
  //     icon: BookOpen,
  //     color: "yellow",
  //   },
  //   {
  //     id: 10,
  //     name: "Complication Prevention",
  //     description: "Early detection and prevention of diabetic complications",
  //     icon: Shield,
  //     color: "emerald",
  //   },
  //   {
  //     id: 11,
  //     name: "HbA1c Testing",
  //     description: "Advanced blood tests for long-term glucose control",
  //     icon: Zap,
  //     color: "violet",
  //   },
  //   {
  //     id: 12,
  //     name: "Thyroid Management",
  //     description: "Comprehensive thyroid disorder diagnosis and treatment",
  //     icon: Stethoscope,
  //     color: "cyan",
  //   },
  // ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      cyan: "bg-cyan-50 border-cyan-200 text-cyan-800",
      emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
      green: "bg-green-50 border-green-200 text-green-800",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800",
      pink: "bg-pink-50 border-pink-200 text-pink-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      red: "bg-red-50 border-red-200 text-red-800",
      teal: "bg-teal-50 border-teal-200 text-teal-800",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
    };
    return colorMap[color] || "bg-gray-50 border-gray-200 text-gray-800";
  };

  const getIconColorClasses = (color) => {
    const colorMap = {
      blue: "text-blue-600",
      cyan: "text-cyan-600",
      emerald: "text-emerald-600",
      green: "text-green-600",
      indigo: "text-indigo-600",
      orange: "text-orange-600",
      pink: "text-pink-600",
      purple: "text-purple-600",
      red: "text-red-600",
      teal: "text-teal-600",
      yellow: "text-yellow-600",
    };
    return colorMap[color] || "text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Our Medical Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive diabetes care and endocrine services designed to help
            you live your healthiest life
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-2 ${getColorClasses(
                  service.color
                )} p-4 sm:p-6 cursor-pointer`}
              >
                {/* Icon */}
                <div className="mb-3 sm:mb-4">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${getColorClasses(
                      service.color
                    )} flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${getIconColorClasses(
                        service.color
                      )}`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
