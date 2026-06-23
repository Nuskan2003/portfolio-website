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
import AnimatedBackground from "../components/AnimatedBackground";

function Home() {
  return (
    <>
      <AnimatedBackground />

      <div className="relative z-10">
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
      </div>
    </>
  );
}

export default Home;