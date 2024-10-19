import React, { useState, ReactElement } from "react";
import { FaFolder } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./StyleSheets/styles.css";
import "./StyleSheets/experience.css";

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
        "Utilized Microsoft SQL Server Management Studio to troubleshoot and debug software-related problems",
        "Executed test analyses to validate and ensure software met quality standards and compliance requirements",
        "Produced meeting records and software documentation, optimizing communication and alignment across teams",
      ],
    },
    {
      title: "Khoury College of Computer Science",
      subtitle: "Teaching Assistant, Human Computer Interaction",
      date: "Sep 2024 - Present",
      description: [
        "Hold weekly office hours to support students with HCI concepts, usability engineering, and course assignments",
        "Provide feedback on UI practices and processes, encouraging iterative design improvements",
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

  let color = ["#ffffb7", "#fff192", "#ffea61"];

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
              <VerticalTimeline lineColor="#ffdd3c">
                {timelineItems.map((item, index) => (
                  <VerticalTimelineElement
                    key={index}
                    date={item.date}
                    dateClassName="custom-date-style"
                    contentStyle={{
                      borderRadius: "15px",
                      background: color[index % 3],
                      color: "black",
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
                      }}
                    >
                      {item.title}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontStyle: "italic",
                      }}
                    >
                      {item.subtitle}
                    </h4>

                    <ul>
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
