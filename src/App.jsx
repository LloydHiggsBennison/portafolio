import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DownloadCV from "./components/DownloadCV";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import { SpeedInsights } from "@vercel/speed-insights/react";


function App() {
  return (
    <>
      <Layout>
        <section id="hero">
          <Hero />
        </section>
        <section id="about-me">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="downloadcv">
          <DownloadCV />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </Layout>
      <SpeedInsights />
    </>
  );
}

export default App;