import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import "./StyleSheets/styles.css";
import "./StyleSheets/projects.css";

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
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="projects-dashboard col">
                <div
                  className="card rounded-3 overflow-hidden"
                  style={{ width: "18rem" }}
                >
                  <img
                    src="./images/sustain-belt-image.png"
                    className="card-img-top"
                    alt="image of home page of sustainbelt website"
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">EverFit Belt Website Design</h5>
                    <p className="card-text">
                      Designed a mock website in Figma to showcase my paper
                      prototype of my fictional object -- an automatic belt that
                      uses EEG sensors to adapt to an individual's body.
                      Incorporated three pages to allow users to learn more
                      about the product.
                    </p>
                    <a
                      href="https://www.figma.com/proto/oY9IUcYpIFhehE0Ak7Pxis/SustainBelt?node-id=1-3&t=hnI0pP4YXXNmECXa-1&starting-point-node-id=3%3A2"
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Figma Link
                    </a>
                  </div>
                </div>
                <div
                  className="card rounded-3 overflow-hidden"
                  style={{ width: "18rem" }}
                >
                  <img
                    src="./images/updated-portfolio-image.png"
                    className="card-img-top"
                    alt="image of home page of updated portfolio"
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Updated Personal Portfolio</h5>
                    <p className="card-text">
                      Designed and developed an interactive portfolio dashboard
                      using React. Created intuitive folder-style navigation
                      components with CSS animations and transitions, enhancing
                      user engagement. Utilized React Router for smooth
                      client-side navigation and integrated custom hooks for
                      state management.
                    </p>
                    <a
                      href="https://github.com/carolinetpham/carolines-updated-website"
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      rel="noopener noreferrer"
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
                      rel="noopener noreferrer"
                    >
                      Figma Link
                    </a>
                  </div>
                </div>
                <div
                  className="card rounded-3 overflow-hidden"
                  style={{ width: "18rem" }}
                >
                  <img
                    src="./images/old-portfolio-image.png"
                    className="card-img-top"
                    alt="image of my old portfolio's home page"
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Old Personal Portfolio</h5>
                    <p className="card-text">
                      Independently mastered React and Bootstrap to build a
                      visually compelling interface, showcasing skills in UI/UX
                      design and front-end development. Integrated a contact
                      page for email communication, enhancing user engagement.
                    </p>
                    <a
                      href="https://github.com/carolinetpham/carolines-personal-portfolio"
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    src="./images/virtual-bj-image.png"
                    className="card-img-top"
                    alt="image of project gui"
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Virtual Bullet Journal</h5>
                    <p className="card-text">
                      Designed a Java GUI application using
                      Model-View-Controller patterns and engineered a secure
                      data storage mechanism following SOLID principles to
                      enhance the user experience.
                    </p>
                    <a
                      href="https://github.com/carolinetpham/bullet-journal-planner"
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository Link
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
