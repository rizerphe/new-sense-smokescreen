//import "../components/App.sass";
import "../components/App.sass";
import News from "../components/news";
import Bias from "../components/bias";
import CTABlock from "../components/CTA";
import Footer from "../components/Footer";
import About from "../components/About";

export default function HomePage() {
  return (
    <>
      <News />
      <Bias />
      <CTABlock />
      <About />
      <Footer />
    </>
  );
}
