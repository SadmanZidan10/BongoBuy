import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default About;