import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { CloseOutlined } from "@ant-design/icons";
import "./StyleSheets/styles.css";
import "./StyleSheets/about.css";
import { Card, Flex, Modal } from "antd";
const AboutClickComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = window.innerWidth < 768;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const imgStyle: React.CSSProperties = {
    display: "block",
    width: 400,
  };

  return (
    <>
      <div className="folder-wrapper">
        <FaFolder
          onClick={showModal}
          style={{
            color: "#A3A9FF",
            cursor: "pointer",
            fontSize: "100px",
            filter: "drop-shadow(2px 2px 2px #999)",
          }}
        />
        <span className="folder-text">About</span>
      </div>
      <Modal
        width={isMobile ? "90%" : "85%"}
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
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>About</span>

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

        <Flex
          className="about-info"
          justify="center"
          align="center"
          style={{ marginTop: "10px" }}
        >
          <img
            className="headshot"
            alt="headshot"
            src="./images/headshot.png"
            style={imgStyle}
          />
          <Flex vertical justify="center" style={{ padding: 32 }}>
            <h2>Hi, I'm Caroline!</h2>
            <p className="about-desc">
              I am a UX/Front-end Engineer currently pursuing a B.S. in Computer
              Science and Design at Northeastern. Through my coursework, I have
              been able to sharpen my programming skills in
              JavaScript/TypeScript, Java, Python, and SQL, alongside front-end
              frameworks such as React and Bootstrap. I have experience using
              creative tools such as Figma, Adobe Illustrator, Adobe Photoshop,
              and Adobe After Effects. I love combining design and code to
              create intuitive digital experiences, as I have a strong passion
              for human computer interaction. I have previously done a co-op at
              Verisk, and I am an incoming co-op at Optum. I currently serve as
              the president of WeDev, Northeastern's iOS Development Club, and
              partake in Northeastern's women in technology club. In my free
              time I enjoy reading, weightlifting, and designing.
            </p>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default AboutClickComponent;
