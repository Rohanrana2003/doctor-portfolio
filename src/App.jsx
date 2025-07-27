import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Doctor from "./components/Doctor";
import ClinicInfo from "./components/ClinicInfo";
import { useEffect } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { doctorMeenakshiData, doctorSachinData } from "./constant";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ClinicInfo />
              </>
            }
          />
          <Route
            path="/Doctor-divanshee"
            element={<Doctor data={doctorMeenakshiData} />}
          />
          <Route
            path="/Doctor-Sachin"
            element={<Doctor data={doctorSachinData} />}
          />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
