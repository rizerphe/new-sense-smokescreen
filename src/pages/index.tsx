//import "../components/App.sass";
import Navbar from "../components/navbar";
import News from "../components/news";
import Bias from "../components/bias";
import CTABlock from "../components/CTA";
import Footer from "../components/Footer";
import About from "../components/About";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <News />
      <Bias />
      <CTABlock />
      <About />
      <Footer />
    </>
  );
}
