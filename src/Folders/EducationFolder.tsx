import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import "./styles.css";

const EducationClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEducationFolderClick = () => {
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

  return (
    <div className="folder-container">
      <div className="folder-wrapper">
        <FaFolder
          onClick={handleEducationFolderClick}
          style={{
            color: "#C6FFC7",
            cursor: "pointer",
            fontSize: "100px",
            filter: "drop-shadow(2px 2px 2px #999)",
          }}
        />
        <span className="folder-text">Education</span>
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
            <h2 className="education-title">
              <b>Education</b>
            </h2>
            <h3 className="education-subtitle">
              Candidate for B.S. in Computer Science and Design at Northeastern
              University
            </h3>
            <div className="education-description">
              <h4 className="education-courses">Relevant Course Work:</h4>
              <ul className="course-list">
                <li>Web Development</li>
                <li>Human Computer Interaction</li>
                <li>Object-Oriented Design</li>
                <li>Database Design</li>
                <li>Algorithms and Data</li>
                <li>Design Processes and Practices</li>
                <li>Designing Interactive Experiences</li>
              </ul>
              <h4 className="clubs">Clubs:</h4>
              <ul className="clubs-list">
                <li>Women in Technology</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationClickComponent;
