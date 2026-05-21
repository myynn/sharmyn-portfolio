import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import headshot1 from "./assets/images/Sharmyn-Headshot.jpg";
import headshot2 from "./assets/images/Sharmyn_Headshot2.jpg";

import "../css/about.css";

const images = [headshot1, headshot2];

function About() {
  const [current, setCurrent] = useState(0);

  const changeImage = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="about-heading">
        <p className="section-subtitle">ABOUT ME</p>

        <h2>
          Building with <span>Curiosity, Creativity</span> and <span>Collaboration</span>
        </h2>
      </div>
      <div className="about-panel">

        <span className="about-star star-one">✦</span>
        <span className="about-star star-two">✧</span>
        <span className="about-star star-three">✦</span>
        <span className="about-star star-four">✧</span>

        <div className="about-visual">
          
          <button
            className="about-image-frame"
            onClick={() => setCurrent((current + 1) % images.length)}
            aria-label="Change profile photo"
          >
            <img
              key={current}
              src={images[current]}
              alt="Sharmyn Ho"
              className="about-image"
            />
          </button>

          <div className="photo-switcher" aria-label="Photo selector">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => changeImage(index)}
                className={current === index ? "photo-mark active" : "photo-mark"}
                aria-label={`Show photo ${index + 1}`}
              >
                ◆
              </button>
            ))}
          </div>
        </div>

        <div className="about-divider"></div>

        <div className="about-text">

          <p>
            <span className="about-highlight">Hi! I’m Sharmyn</span>, a Year 3
            Information Technology student at Temasek Polytechnic who spends a lot
            of time thinking about why digital experiences are designed the way
            they are.
          </p>

          <p>
            I’m especially interested in user experience, problem-solving, and 
            how technology can be used to solve real-world challenges in thoughtful 
            and accessible ways.
          </p>

          <p>
            Alongside what I’ve learned in the classroom, a lot of my growth has 
            also come from hackathons and leadership opportunities as an NTUC Starter 
            Awards scholar. These experiences have taught me how to balance 
            responsibilities, approach challenges analytically, and collaborate with 
            others to deliver detail-oriented solutions.
          </p>

          <p>
            Outside of tech, I used to be involved in track and field and basketball. 
            Through sports, I learned discipline, resilience, and the importance of 
            both individual growth and teamwork, values that continue to shape how I 
            approach learning and life today.
          </p>

          <p className="about-final">
            I believe creativity and technology go hand in hand, and that’s what
            continues to draw me to learning and growing in this field, 
            along with all the possibilities that come with it.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;