import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDocker,
  FaAws,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiFlutter,
  SiDart,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiJira,
  SiJest,
  SiJenkins,
  SiKnime,
  SiFirebase
} from "react-icons/si";

import {
  PiMicrosoftWordLogoFill,
  PiMicrosoftPowerpointLogoFill,
  PiMicrosoftExcelLogoFill,
} from "react-icons/pi";

export const skillCategories = [
  {
    title: "Languages",
    label: "01",
    skills: [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: FaPython, name: "Python" },
      { icon: SiDart, name: "Dart" },
      { icon: FaDatabase, name: "SQL" },
    ],
  },
  {
    title: "Frameworks / Libraries",
    label: "02",
    skills: [
      { icon: FaReact, name: "React" },
      { icon: SiExpress, name: "Express.js" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiFlutter, name: "Flutter" },
    ],
  },
  {
    title: "Tools / Testing",
    label: "03",
    skills: [
      { icon: FaGitAlt, name: "Git" },
      { icon: FaGithub, name: "GitHub" },
      { icon: SiPostman, name: "Postman" },
      { icon: SiJenkins, name: "Jenkins" },
      { icon: FaDocker, name: "Docker" },
      { icon: SiJira, name: "Jira" },
      { icon: FaFigma, name: "Figma" },
      { icon: PiMicrosoftExcelLogoFill, name: "Excel" },
      { icon: SiKnime, name: "KNIME" },
    ],
  },
  {
    title: "Data / Cloud",
    label: "04",
    skills: [
      { icon: SiMysql, name: "MySQL" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: FaAws, name: "AWS" },
      { icon: SiFirebase, name: "Firebase" },
    ],
  },
];