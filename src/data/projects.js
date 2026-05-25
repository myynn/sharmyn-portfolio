import mentora from "../assets/images/Mentora-Web-App.png";
import strokeguard from "../assets/images/StrokeGuard.png";
import sustainabite from "../assets/images/SustainaBite-App.png";
import wandersafe from "../assets/images/IoT-WanderSafe.png";
import navify from "../assets/images/Navify-app.png";

export const projects = [
  {
    title: "Navify",
    image: navify,
    description:
      "A Design Thinking and Agile project focused on improving the campus lost and found experience through a more organised and user-centred digital solution. Designed in Figma and planned using JIRA, the project follows Define, Ideate, and Prototype phases to demonstrate UI/UX design, sprint planning, usability testing, and iterative prototyping.",
    tech: ["Figma", "JIRA", "Design Thinking", "Agile"],
    github: null,
    live: null,
    caseStudy: "/navify-case-study.pdf",
    prototype: "https://www.figma.com/community/file/1533562181571810962/amdt-part3-sharmynho-2400847f",
  },
  {
    title: "SustainaBite",
    image: sustainabite,
    description:
      "A food sustainability mobile application designed to tackle surplus food waste by helping businesses redistribute excess food stock more effectively. Built using Flutter and Firebase, the platform integrates features such as NETS payment, scheduling tools, notifications, and geolocation services to improve accessibility and user experience.",
    tech: ["Flutter", "Firebase", "NETS API", "Android Studio"],
    github: "https://github.com/myynn/sustainabite-food-sustainability-app",
    live: null,
  },
  {
    title: "StrokeGuard",
    image: strokeguard,
    description:
      "A machine learning healthcare project focused on early stroke risk prediction through data analytics and classification models. Built using Python and Streamlit, the project explores how predictive models can support preventive healthcare through data preprocessing, visualisation, and predictive analysis.",
    tech: ["Python", "pandas", "scikit-learn", "Streamlit"],
    github: "https://github.com/myynn/mldp-p03-sharmynho",
    live: "https://mldp-sharmyn-strokeguard.streamlit.app/",
  },
  {
    title: "Mentora",
    image: mentora,
    description:
      "A peer-to-peer tutoring platform built using the MERN stack to make academic support more structured, accessible, and reliable for students. The platform helps students find suitable tutors, coordinate lesson schedules and expectations, and improve accountability in peer learning.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/myynn/mentora-peer-tutoring-platform",
    live: null,
  },
  {
    title: "WanderSafe",
    image: wandersafe,
    description:
      "An IoT and cloud-based monitoring system built to support caregivers of dementia patients through real-time motion tracking and safety alerts. Using AWS cloud services and PIR sensors, the system provides caregiver notifications, dashboard monitoring analytics, and night-time safety alerts to improve caregiver confidence and senior safety.",
    tech: ["Python", "AWS", "M5Stack", "PIR Sensor"],
    github: null,
    live: null,
  },
];