import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Inspiration from "./components/Inspiration";
import Instagram from "./components/Instagram";
import Join from "./components/Join";
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";
import Trips from "./components/Trips";
import ValuesStrip from "./components/ValuesStrip";

// Section order per client feedback: the story of Sisi leads, the walks
// follow, and Lenka & Falco come after — with the Instagram grid bridging
// the walks and the founder, since the site supports @sisiclub.
export default function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <ValuesStrip />
      <Inspiration />
      <Trips />
      <Instagram />
      <About />
      <Testimonials />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
}
