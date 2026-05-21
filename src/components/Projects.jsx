import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";
import "../css/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <p className="section-subtitle">FEATURED PROJECTS</p>
        <h2>
          Turning <span>Ideas</span> into <span>Real-World Solutions</span>
        </h2>
      </motion.div>

      <div className="projects-board">
        <span className="projects-deco project-star-one">✦</span>
        <span className="projects-deco project-star-two">✧</span>
        <span className="projects-deco project-star-three">✦</span>

        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                index % 2 !== 0 ? "project-card-reverse" : ""
              }`}
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.title} screenshot`} />
              </div>

              <div className="project-content">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{project.title}</h3>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <p>{project.description}</p>

                <div className="project-buttons">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Site
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {!project.live && !project.github && (
                    <span className="project-private">Case study available on request</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;