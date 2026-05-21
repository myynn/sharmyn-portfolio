import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Awards from "./components/Awards.jsx";
import Contact from "./components/Contact.jsx";
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