import Header from "./components/Header";
import Slide from "./components/Slide";
import Services from "./components/Services";
import About from "./components/About";
import CoreValue from "./components/CoreValue";
import Testimonials from "./components/Testimonials";
import Parallex from "./components/Parallex";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Company from "./components/Company";
import Team from "./components/Team";
import Subscribe from "./components/Subscribe";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <Slide />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="core-value">
        <CoreValue />
      </div>
      <div id="parallex">
        <Parallex />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="subscribe">
        <Subscribe />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <div id="company">
        <Company />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
