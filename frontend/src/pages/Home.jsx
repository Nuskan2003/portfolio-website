import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Stats />

      <Skills />

      <Experience />

      <Projects />

      <Contact />

      <Footer />

      <ScrollToTopButton />
    </>
  );
}

export default Home;