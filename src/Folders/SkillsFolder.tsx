import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IconType } from "react-icons";
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaReact,
  FaDocker,
  FaGit,
  FaGithub,
  FaJira,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiIntellijidea,
  SiVisualstudiocode,
  SiStreamlit,
  SiFlask,
  SiMysql,
  SiGradle,
  SiFigma,
  SiEclipseide,
  SiJunit5,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTypescript,
} from "react-icons/si";

import "./styles.css";

const SkillsClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSkillsFolderClick = () => {
    setIsModalOpen(true); // Open the modal when the folder icon is clicked
    setTimeout(() => {
      setIsModalVisible(true);
    }, 10);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 400);
  };

  const skills = [
    {
      category: "Languages",
      items: [
        { logo: FaJava, name: "Java" },
        { logo: FaJsSquare, name: "JavaScript" },
        { logo: SiTypescript, name: "TypeScript" },
        { logo: FaHtml5, name: "HTML" },
        { logo: FaCss3Alt, name: "CSS" },
        { logo: FaDatabase, name: "SQL" },
        { logo: FaPython, name: "Python" },
      ],
    },
    {
      category: "Tools",
      items: [
        { logo: SiFigma, name: "Figma" },
        { logo: FaJira, name: "Jira" },
        { logo: FaDocker, name: "Docker" },
        { logo: SiGradle, name: "Gradle" },
        { logo: FaGit, name: "Git" },
        { logo: FaGithub, name: "GitHub" },
        { logo: SiVisualstudiocode, name: "VS Code" },
        { logo: SiEclipseide, name: "Eclipse" },
        { logo: SiIntellijidea, name: "IntelliJ" },
        { logo: SiAdobephotoshop, name: "Photoshop" },
        { logo: SiAdobeillustrator, name: "Illustrator" },
      ],
    },
    {
      category: "Libraries and Frameworks",
      items: [
        { logo: FaReact, name: "React" },
        { logo: FaBootstrap, name: "Bootstrap" },
        { logo: SiMysql, name: "MySQL" },
        { logo: SiStreamlit, name: "Streamlit" },
        { logo: SiFlask, name: "Flask" },
        { logo: SiJunit5, name: "JUnit" },
      ],
    },
  ];

  interface SkillItemProps {
    item: {
      name: string;
      logo: IconType;
    };
  }

  const SkillItem: React.FC<SkillItemProps> = ({ item }) => (
    <div className="logo-container">
      <item.logo
        className="logo"
        style={{ fontSize: "50px", color: "#FB7569" }}
      />
      <p>{item.name}</p>
    </div>
  );

  return (
    <div className="folder-container">
      <div className="folder-wrapper">
        <FaFolder
          onClick={handleSkillsFolderClick}
          style={{
            color: "#FF948A",
            cursor: "pointer",
            fontSize: "100px",
            filter: "drop-shadow(2px 2px 2px #999)",
          }}
        />
        <span className="folder-text">Skills</span>
      </div>
      {isModalOpen && (
        <div
          className={`modal-overlay ${isModalVisible ? "fade-in" : "fade-out"}`}
        >
          <div
            className={`modal ${
              isModalVisible ? "animate-modal" : "close-modal"
            }`}
          >
            <MdCancel onClick={handleCloseModal} className="close-button" />
            <h2 className="skills-title">Technical Skills</h2>
            <div id="#skills">
              <div className="skills-description">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <h1
                      className={`${skill.category
                        .toLowerCase()
                        .replace(/ /g, "-")}-title`}
                    >
                      {skill.category}:
                    </h1>
                    <div
                      className={`category ${skill.category
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {skill.items.map((item, index) => (
                        <SkillItem key={index} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsClickComponent;
