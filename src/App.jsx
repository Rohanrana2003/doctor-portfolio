import About from "./components/About";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
