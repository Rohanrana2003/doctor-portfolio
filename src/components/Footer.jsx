import React from "react";
import { Stethoscope, Phone, Mail, MapPin, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2">
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center"
              >
                <img
                  className="w-full h-full"
                  src="/assets/logo.png"
                  alt="logo"
                />
              </div>
            </div>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-4">
              Providing exceptional healthcare services with compassion and
              expertise. Your health is our priority.
            </p>
            <div className="flex items-center space-x-1 text-[16px] md:text-3xl text-blue-300">
              <Heart className="w-4 h-4 md:w-6 md:h-6" />
              <span>Caring for your wellbeing</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="text-lg md:text-2xl font-semibold mb-4 text-blue-300">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-800/50 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 md:w-6 md:h-6 text-blue-300" />
                </div>
                <div>
                  <a
                    href="tel:+917302204937"
                    className="text-sm md:text-[18px] font-medium"
                  >
                    +91 7302204937
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-800/50 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 md:w-6 md:h-6 text-blue-300" />
                </div>
                <div>
                  <a
                    href="mailTo: sujeevaclinic@gmail.com"
                    className="text-sm md:text-[18px] font-medium"
                  >
                    sujeevaclinic@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-17 h-9  bg-blue-800/50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6 text-blue-300" />
                </div>
                <div>
                  <p className="text-sm md:text-[18px]  font-medium">
                    SCO 9, Ground Floor, Block B2, Near SBI Bank, Wave Estate
                    Sector 85, Mohali-140308, Punjab
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-1">
            {/* Hours */}
            <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-800">
              <h4 className="text-sm md:text-2xl font-semibold text-blue-300 mb-2">
                Working Hours
              </h4>
              <div className="space-y-1 md:space-y-2 text-xs md:text-lg text-gray-300">
                <div className="flex justify-between">
                  <span>Mon - Sat:</span>
                  <span>4:00 PM - 7:00 PM </span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                {/* <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-xs md:text-sm text-gray-400 text-center">
              © 2025 HealthCare Expert Care. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
