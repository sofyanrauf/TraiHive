import AboutUs from "../component/AboutUs";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Top from "../component/Top";
import Sejarah from "../component/Sejarah";
import Budaya from "../component/Budaya";

const AboutUS = () => {
  return (
    <>
      <div>
        <Navbar />
        <AboutUs />
        <Sejarah />
        <Budaya />

        <Footer />
      </div>
    </>
  );
};

export default AboutUS;
