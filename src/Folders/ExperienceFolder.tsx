import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { CloseOutlined } from "@ant-design/icons";
import "./StyleSheets/styles.css";
import "./StyleSheets/experience.css";
import { Modal, Timeline } from "antd";

const ExperienceClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = window.innerWidth < 768;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="folder-wrapper">
        <FaFolder
          onClick={showModal}
          style={{
            color: "#fff2b3",
            cursor: "pointer",
            fontSize: "100px",
            filter: "drop-shadow(2px 2px 2px #242424)",
          }}
        />
        <span className="folder-text">Experience</span>
      </div>
      <Modal
        width={isMobile ? "90%" : "60%"}
        open={isModalOpen}
        closable={false}
        footer={null}
        style={{
          padding: 0,
          height: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Fixed Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            backgroundColor: "#fff",
            borderBottom: "1px solid #ddd",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Experience
          </span>

          <CloseOutlined
            onClick={handleCancel}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
            }}
          />
        </div>
        <div className="work-timeline">
          <Timeline
            className="timeline-items"
            pending={
              <>
                <span>Currently...</span> <br />
                <strong>Software Developer Intern </strong>
                <br />
                <em>Advanced Data Risk Management (ADRM)</em> <br />
                <span>Jun 2025 - Present</span>
                <ul></ul> 
              </>
            }
            items={[
              {
                children: (
                  <>
                    <strong>Software Quality Analyst Co-op</strong> <br />
                    <em>Verisk, Extreme Event Solutions</em> <br />
                    <span>Jan - Jun 2024</span>
                    <ul>
                      <li>
                        Utilized Microsoft SQL Server Management Studio to
                        troubleshoot and debug software-related problems.
                      </li>
                      <li>
                        Executed test analyses to validate and ensure software
                        met quality standards and compliance requirements.
                      </li>
                      <li>
                        Produced meeting records and software documentation,
                        optimizing communication and alignment across teams.
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <strong>
                      Human Computer Interaction Teaching Assistant
                    </strong>{" "}
                    <br />
                    <em>Khoury College of Computer Sciences</em> <br />
                    <span>Sep - Dec 2024</span>
                    <ul>
                      <li>
                        Held weekly office hours to support students with HCI
                        concepts, usability engineering, and course assignments.
                      </li>
                      <li>
                        Provided feedback on UI practices and processes,
                        encouraging iterative design improvements.
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <strong>Software Engineer Co-op</strong> <br />
                    <em>Optum (UHG)</em> <br />
                    <span>Jan - Jun 2025</span>
                    <ul>
                      <li>
                        Built a dashboard using Java and HTML to visualize
                        real-time API health, improving observability for
                        engineering teams.
                      </li>
                      <li>
                        Developed an automated email reporting system in Java to
                        generate test-failure summaries, streamlining QA
                        processes.
                      </li>
                      <li>
                        Parsed SQL data to populate front-end templates,
                        ensuring accurate and consistent delivery of system
                        status updates.
                      </li>
                      <li>
                        Implemented GitHub Actions workflows to automate
                        SonarQube and Prisma Cloud scans, enhancing code quality
                        checks.
                      </li>
                    </ul>
                  </>
                ),
              },
            ]}
          />
        </div>
      </Modal>
    </>
  );
};
export default ExperienceClickComponent;
