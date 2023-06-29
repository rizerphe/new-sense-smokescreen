import "./App.sass";
import Navbar from "./navbar";
import News from "./news";
import Bias from "./bias";
import CTABlock from "./CTA";
import Footer from "./Footer";
import About from "./About";

function App() {
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

export default App;
