import { useEffect, useState } from "react";
import "src/css/NavBar.css";

const sections = ["home", "about", "skills", "projects", "awards", "contact"];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;

      if (nearBottom) {
        setActive("contact");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActive(section);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={active === section ? "nav-link active" : "nav-link"}
          onClick={() => setActive(section)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;