import Features from "./component/Features";
import Footer from "./component/Footer";
import Gambar from "./component/Gambar";
import Navbar from "./component/Navbar";
import Testimonial from "./component/Testimonial";
import Herosection from "./component/Herosection";
import Serve from "./component/Serve";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Herosection />
        <Features />

        <Testimonial />
        <Gambar />
        <Footer />
      </div>
    </>
  );
};

export default Home;
