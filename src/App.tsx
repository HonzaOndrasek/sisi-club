import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Inspiration from "./components/Inspiration";
import Join from "./components/Join";
import Nav from "./components/Nav";
import PicnicBand from "./components/PicnicBand";
import Testimonials from "./components/Testimonials";
import Trips from "./components/Trips";
import ValuesStrip from "./components/ValuesStrip";

export default function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <ValuesStrip />
      <About />
      <PicnicBand />
      <Trips />
      <Inspiration />
      <Testimonials />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
}
