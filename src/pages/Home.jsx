import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel";
import BrowseCategory from "../components/BrowseCategory";
import TrendingProducts from "../components/TrendingProducts";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Carousel />
        <BrowseCategory />
        <TrendingProducts />
      </div>
      <AboutUs/>
      <Footer />
    </div>
  );
};

export default Home;