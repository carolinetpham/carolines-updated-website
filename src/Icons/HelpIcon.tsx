import { Modal } from "antd";
import { useState } from "react";
import { MdHelpCenter } from "react-icons/md";
import "./icons.css";

interface FoldersProps {
  username: string;
}

const HelpIcon = ({ username }: FoldersProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = window.innerWidth < 768;

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <MdHelpCenter className="help-icon" onClick={showModal} />
      <Modal open={isModalOpen} closable={false} footer={null}>
        <div className="tutorial-popup">
          <h2>Hi, {username}!</h2>
          <p>Click on the folders or the icons to explore more about me :)</p>
          <div className="tutorial-buttons">
            <button className="ok-button" onClick={handleCancel}>
              Got it!
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HelpIcon;
