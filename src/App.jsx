import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import "./css/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
    </>
  );
}

export default App;