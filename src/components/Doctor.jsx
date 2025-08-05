import React from "react";
import About from "./About";
import Services from "./Services";
import Appointment from "./Appointment";
import Contact from "./Contact";

const Doctor = ({ data }) => {
  window.scrollTo(0, 0);

  return (
    <div>
      <About doctorData={data.about} />
      <Services services={data.services} />
    </div>
  );
};

export default Doctor;
