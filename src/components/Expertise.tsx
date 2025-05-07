import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
  faJava,
  faDigitalOcean,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Java",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Python",
  "SQL",
  "Shell Scripting",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "Jenkins",
  "Gradle",
  "Maven",
  "Linux",
  "Postman",
  "Selenium",
];

const labelsThird = [
  "Spring Boot",
  "React.js",
  "React Native",
  "Next.js",
  "Nest.js",
  "Angular",
  "Node.js",
  "Express.js",
  "Flask",
  "Material-UI",
  "Tailwind CSS",
];

const labelsFourth = [
  "MongoDB",
  "MySQL",
  "SQL",
  "PostgreSQL",
  "Oracle",
  "SQL Server",
  "Firebase",
];

const labelsFifth = [
  "NPM",
  "Selenium",
  "OpenAI",
  "Splunk",
  "REST",
  "gRPC",
  "JSON",
  "Git",
  "GitHub",
  "Linux",
  "Agile/Scrum",
  "TCP/IP",
  "OOPs",
  "Design Patterns",
  "MS Word",
  "MS Excel",
  "MS PowerPoint",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h3>Languages</h3>
            <p>
              I have developed strong expertise in multiple programming
              languages through both academic study and practical projects. I’ve
              applied these skills to build efficient backend systems and
              responsive frontends, gaining a deep understanding of how to solve
              complex problems and create scalable solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frameworks</h3>
            <p>
              With extensive experience in modern web and mobile frameworks, I
              have built scalable, responsive applications that seamlessly
              integrate frontend and backend functionality. My work across
              academic and professional projects has given me a solid grasp of
              full-stack development and dynamic user experiences.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDigitalOcean} size="3x" />
            <h3>Database Systems & Management</h3>
            <p>
              I have hands-on experience with various database systems. I’ve
              used these to design, manage, and optimize databases for both
              relational and non-relational data, ensuring efficient storage and
              retrieval across diverse applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFourth.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I have a strong background in implementing automation processes
              and optimizing development workflows. By streamlining CI/CD
              pipelines, automating testing, and enhancing deployment processes,
              I ensure efficient, reliable, and scalable software delivery. My
              focus on automation has enabled faster development cycles and
              improved overall system performance.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCodepen} size="3x" />
            <h3>Other Skills</h3>
            <p>
              I have experience with various tools and technologies, including
              API design, version control, automation, and software design
              patterns, along with a strong foundation in Agile methodologies
              and system protocols. I'm also skilled in using productivity tools
              for effective documentation and presentations.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFifth.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
