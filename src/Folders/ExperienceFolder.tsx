import React, { useState, ReactElement } from "react";
import { FaFolder } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles.css";

const ExperienceClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleExperienceFolderClick = () => {
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

  const timelineItems = [
    {
      title: "Verisk",
      subtitle: "Software Support Analyst Co-op",
      date: "Jan 2024 - Jun 2024",
      description: [
        "Upgraded and installed software for external clients and internal groups",
        "Ran analysis in order to validate software and assure software is up to quality standards",
        "Collaborated with cross-functional teams to troubleshoot and debug software-related problems",
        "Documented meetings and created documentation for software applications",
      ],
    },
    {
      title: "Khoury College of Computer Science",
      subtitle: "Teaching Assistant, Human Computer Interaction",
      date: "Sep 2024 - Present",
      description: [
        "Hold office hours in order to assist students with Human Computer Interaction coursework",
        "Grade and provide feedback to students to assist with design processes and practices",
      ],
    },
    {
      title: "Northeastern University",
      subtitle: "Office Assistant, Journalism Department",
      date: "Sep 2023 - Present",
      description: [
        "Provide administrative support to the office by efficiently managing requested tasks",
        "Coordinate appointments ensuring timely communication and organization within the department",
        "Manage office supplies, reception duties, greeted visitors, and provided assistance as needed",
      ],
    },
  ];
  let icons = [
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <a href="https://www.verisk.com/" target="_blank" rel="noreferrer">
        <img
          src="https://companieslogo.com/img/orig/VRSK-5db4d89e.png?t=1649106626"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          alt="Verisk Logo"
        />
      </a>
    </div>,
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <a
        href="https://www.khoury.northeastern.edu/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1646179419088715776/11ivFHHz_400x400.jpg"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          alt="Khoury College Logo"
        />
      </a>
    </div>,
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <a href="https://www.northeastern.edu/" target="_blank" rel="noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/150px-Northeastern_seal.svg.png"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          alt="NEU Seal"
        />
      </a>
    </div>,
  ];

  let color = ["#ffde1a", "#ffce00", "#ffa700"];

  return (
    <div className="folder-container">
      <div className="folder-wrapper">
        <FaFolder
          onClick={handleExperienceFolderClick}
          style={{
            color: "#FBED90",
            cursor: "pointer",
            fontSize: "100px",
            filter: "drop-shadow(2px 2px 2px #999)",
          }}
        />
        <span className="folder-text">Experience</span>
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
            <h2 className="folder-title">Work Experience</h2>
            <div className="mx-auto">
              <VerticalTimeline lineColor="#ff8d00">
                {timelineItems.map((item, index) => (
                  <VerticalTimelineElement
                    key={index}
                    date={item.date}
                    dateClassName="custom-date-style"
                    contentStyle={{
                      borderRadius: "15px",
                      background: color[index % 3],
                      color: "white",
                    }}
                    contentArrowStyle={{
                      borderRight: `7px solid ${color[index % 3]}`,
                    }}
                    iconStyle={{ background: color[index % 3], color: "#000" }}
                    icon={icons[index]}
                    style={{
                      fontFamily: "'Playwrite DE Grund', cursive",
                      fontSize: "16px",
                    }}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontWeight: "bold",
                        filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
                      }}
                    >
                      {item.title}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontStyle: "italic",
                        filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
                      }}
                    >
                      {item.subtitle}
                    </h4>

                    <ul
                      style={{
                        filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
                      }}
                    >
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceClickComponent;
