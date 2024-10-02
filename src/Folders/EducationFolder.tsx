import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import "./styles.css";

const ClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEducationFolderClick = () => {
    setIsModalOpen(true); // Open the modal when the folder icon is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      <FaFolder
        onClick={handleEducationFolderClick}
        style={{
          color: "#C6FFC7",
          cursor: "pointer",
          fontSize: "50px",
          filter: "drop-shadow(2px 2px 2px #999)",
        }}
      />
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>
              <b>Education</b>
            </h2>
            <h3>
              Candidate for B.S. in Computer Science and Design at Northeastern
              University
            </h3>
            <h4>Relevant Course Work:</h4>
            <ul>
              <li>Web Development</li>
              <li>Human Computer Interaction</li>
              <li>Object-Oriented Design</li>
              <li>Database Design</li>
              <li>Algorithms and Data</li>
              <li>Design Processes and Practices</li>
              <li>Designing Interactive Experiences</li>
            </ul>
            <MdCancel onClick={handleCloseModal} className="close-button" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickComponent;
