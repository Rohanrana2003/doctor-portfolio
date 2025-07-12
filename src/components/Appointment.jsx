import React from "react";

const Appointment = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="appointment-content">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Book an <span className="text-amber-700">Appointment</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Schedule your consultation with Dr. Devanshi Sharma. We offer
            flexible appointment times to accommodate your busy schedule.
          </p>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Clinic Hours
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between max-w-xs">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between max-w-xs">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium">10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between max-w-xs">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium">Emergency Only</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Emergency Contact
            </h3>
            <p className="text-gray-600 mb-2">
              For urgent medical concerns outside clinic hours:
            </p>
            <p className="text-amber-700 font-bold text-xl">+91 98765 43210</p>
          </div>
        </div>
        <div className="appointment-form bg-gray-50 p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="date">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Reason for Visit
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Briefly describe your health concern"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-700 text-white py-3 px-4 rounded-lg font-bold hover:bg-amber-800 transition-colors duration-300"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
