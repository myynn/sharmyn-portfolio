import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Send } from "lucide-react";
import "./css/contact.css";

function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="contact"
      className="contact-section"
      onMouseMove={handleMouseMove}
      style={{
        "--star-x": `${(mousePosition.x - 50) * 0.75}px`,
        "--star-y": `${(mousePosition.y - 50) * 0.75}px`,
      }}
    >
      <div className="contact-grid-layer"></div>

      <div className="contact-stars" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="contact-copy">
          <p className="contact-subtitle">CONTACT</p>

          <h2>
            Connect with <span>Me</span>
          </h2>

          <p>
            I’m open to internships, conversations, or new opportunities.
            Feel free to reach out!
          </p>
        </div>

        <div className="paper-plane-area">
          <div className="plane-animation" aria-hidden="true">
            <div className="plane-trail"></div>
            <div className="plane-trail trail-two"></div>

            <motion.div
              className="paper-plane"
              animate={{
                x: [0, 14, 0],
                y: [0, -10, 0],
                rotate: [-8, 3, -8],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Send />
            </motion.div>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/myynn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/sharmyn-ho"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a href="mailto:sharmynho2007@gmail.com">
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;