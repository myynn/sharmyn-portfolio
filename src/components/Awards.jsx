import { useEffect, useState } from "react";
import { Trophy, Rocket } from "lucide-react";
import { motion } from "framer-motion";

import award1 from "./assets/images/Sharmyn-NTUCStarterAwards.jpg";
import award2 from "./assets/images/DellInnovateFest.jpg";
import award3 from "./assets/images/DellInnovateFest2.jpg";

import "../css/awards.css";

const awardImages = [award1, award2, award3];

function Awards() {
  const [current, setCurrent] = useState(0);

  const changeImage = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % awardImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="awards"
      className="awards-section"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="awards-heading">
        <p className="section-subtitle">AWARDS & HACKATHONS</p>
        <h2>
          Milestones I’m <span>Proud of</span>
        </h2>
      </div>

      <div className="awards-board">
        <span className="awards-deco award-star-one">✦</span>
        <span className="awards-deco award-star-two">✧</span>
        <span className="awards-deco award-star-three">✦</span>

        <div className="awards-gallery">
          <button
            className="awards-image-frame"
            onClick={() => setCurrent((current + 1) % awardImages.length)}
            aria-label="Change award photo"
          >
            <img src={awardImages[current]} alt="Awards and hackathon moment" />
          </button>

          <div className="award-switcher" aria-label="Award photo selector">
            {awardImages.map((_, index) => (
              <button
                key={index}
                onClick={() => changeImage(index)}
                className={current === index ? "award-mark active" : "award-mark"}
                aria-label={`Show award photo ${index + 1}`}
              >
                ◆
              </button>
            ))}
          </div>
        </div>

        <div className="awards-content">
          <div className="award-box">
            <div className="award-title">
              <Trophy />
              <h3>Awards</h3>
            </div>

            <ul>
              <li>NTUC Starter Awards 2025</li>
              <li>Director's List AY24/25</li>
              <li>Edusave Certificate of Academic Achievement 2025</li>
            </ul>
          </div>

          <div className="award-box">
            <div className="award-title">
              <Rocket />
              <h3>Hackathons</h3>
            </div>

            <ul>
              <li>Dell InnovateDash 2025 (1st Place)</li>
              <li>Dell InnovateFest 2025 (Finalist)</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Awards;