import Navbar from "src/components/NavBar.jsx";
import Hero from "src/components/Hero.jsx";
import About from "src/components/About.jsx";
import Skills from "src/components/Skills.jsx";
import Projects from "src/components/Projects.jsx";
import Awards from "src/components/Awards.jsx";
import Contact from "src/components/Contact.jsx";
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