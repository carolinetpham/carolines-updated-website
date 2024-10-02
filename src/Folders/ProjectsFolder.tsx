import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import "./styles.css";

const ProjectsClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleProjectsFolderClick = () => {
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
          onClick={handleProjectsFolderClick}
          style={{
            color: "#A3A9FF",
            cursor: "pointer",
            fontSize: "100px",
            filter: "drop-shadow(2px 2px 2px #999)",
          }}
        />
        <span className="folder-text">Projects</span>
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
            <h2 className="projects-title">Projects</h2>
            <div className="row row-cols-1 row-cols-md-5 g-4">
              <div className="projects-dashboard col">
                <div
                  className="card rounded-3 overflow-hidden"
                  style={{ width: "18rem" }}
                >
                  <img
                    src="./images/pet-fetch-image.png"
                    className="card-img-top"
                    alt="image of home page of petfetch application"
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">PetFetch</h5>
                    <p className="card-text">
                      Designed and implemented REST APIs in Flask to support
                      CRUD operations, and built a responsive UI using Streamlit
                      tailored to user personas. Deployed the application using
                      Docker containers and utilized Git for version control,
                      ensuring a streamlined development workflow.
                    </p>
                    <a
                      href="https://github.com/carolinetpham/Petalytics-PetFetch"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Repository Link
                    </a>
                  </div>
                </div>
                <div
                  className="card rounded-3 overflow-hidden"
                  style={{ width: "18rem" }}
                >
                  <img
                    src="./images/aeye-image.png"
                    className="card-img-top"
                    alt="image of aeye logo"
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">AEye</h5>
                    <p className="card-text">
                      Conducted needfinding and usability tests, led a Wizard of
                      Oz study, and developed prototypes to gather user feedback
                      and refine app design. Created a high-fidelity prototype
                      in Figma to ensure a seamless and engaging user
                      experience.
                    </p>
                    <a
                      href="https://www.figma.com/design/JHx83jOa8YN8Zv5R6Wq4lU/AEye?node-id=207-282&node-type=canvas"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Figma Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsClickComponent;
