import { IoIosPaper } from "react-icons/io";
import "./icons.css";
export default function Github() {
  return (
    <div className="resume-wrapper">
      <a
        href="https://drive.google.com/file/d/1_QMTxTG494m9UuXVi6FLHTFzYU-mR6RJ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosPaper
          style={{
            fontSize: "80px",
            color: "#fddcfb",
            cursor: "pointer",
            filter: "drop-shadow(2px 2px 2px #242424)",
          }}
        />
      </a>
      <span className="icon-text">Resume</span>
    </div>
  );
}
