import { motion } from "framer-motion";
import { skillCategories } from "src/data/skills.js";
import "src/css/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <p className="section-subtitle">MY SKILLS</p>
        <h2>
          Continuously <span>Learning</span> and <span>Innovating</span> with
        </h2>
      </motion.div>

      <div className="skills-board">
        <span className="skills-deco deco-one">✦</span>
        <span className="skills-deco deco-two">✧</span>
        <span className="skills-deco deco-three">✧</span>
        <span className="skills-deco deco-four">✦</span>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-card"
              key={category.title}
              initial={{ opacity: 0, y: 35, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              whileHover={{ y: -8, rotate: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="skill-card-top">
                <span>{category.label}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-items">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      className="skill-pill"
                      key={skill.name}
                      whileHover={{ scale: 1.06, y: -3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon />
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;