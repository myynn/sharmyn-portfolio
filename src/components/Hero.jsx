import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import "src/css/Hero.css";

function Hero() {
  const name = "SHARMYN  HO".split("");
  const fullText =
    "Meaningful Solutions Start with Curiosity.";

  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const typingSpeed = isDeleting ? 35 : 55;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      } else if (!isDeleting && typedText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(fullText.slice(0, typedText.length - 1));
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, fullText]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const showResumeAlert = () => {
    alert("Do reach out to me at sharmynho2007@gmail.com for my resume!");
  };

  return (
    <section
      id="home"
      className="hero-section"
      onMouseMove={handleMouseMove}
      style={{
        "--mouse-x": `${mousePosition.x}%`,
        "--mouse-y": `${mousePosition.y}%`,
      }}
    >
      <div className="hero-gradient-layer"></div>

      <div
        className="shooting-stars"
        aria-hidden="true"
        style={{
            "--star-x": `${(mousePosition.x - 50) * 0.9}px`,
            "--star-y": `${(mousePosition.y - 50) * 0.9}px`,
        }}
      >
        {Array.from({ length: 18 }).map((_, index) => (
            <span key={index}></span>
        ))}
      </div>

      <motion.p
        className="hero-hello"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        Hello, I'm
      </motion.p>

      <h1 className="hero-name" aria-label="Sharmyn Ho">
        {name.map((letter, index) => (
          <motion.span
            key={index}
            className="hero-letter"
            whileHover={{
              y: index % 3 === 0 ? -18 : index % 3 === 1 ? 14 : -10,
              x: index % 2 === 0 ? -6 : 6,
              scale: 1.12,
              color: "#3b82f6",
              rotate: index % 2 === 0 ? -8 : 8,
              textShadow:
                "0 0 8px rgba(59,130,246,0.28), 0 0 18px rgba(96,165,250,0.38)",
            }}
            transition={{ type: "spring", stiffness: 420, damping: 14 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h1>

      <p className="hero-description">
        {typedText}
        <span className="typing-cursor">|</span>
      </p>

      <div className="hero-links" aria-label="Social and resume links">
        <a
          href="https://github.com/myynn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/sharmyn-ho"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:sharmynho2007@gmail.com"
          aria-label="Send email to Sharmyn"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        <button
          type="button"
          onClick={showResumeAlert}
          className="resume-btn"
          aria-label="Request resume"
        >
          <FaFileAlt />
          <span>Resume</span>
        </button>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <span className="scroll-chevrons">
            <span></span>
            <span></span>
        </span>
      </a>
    </section>
  );
}

export default Hero;