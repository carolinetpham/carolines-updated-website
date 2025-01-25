import { FaLinkedin } from "react-icons/fa";
import "./icons.css";
export default function Linkedin() {
  return (
    <div className="linkedin-wrapper">
      <a
        href="https://www.linkedin.com/in/caroline-t-pham/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          style={{
            fontSize: "80px",
            color: "#fddcfb",
            cursor: "pointer",
            filter: "drop-shadow(2px 2px 2px #242424)",
          }}
        />
      </a>
      <span className="icon-text">LinkedIn</span>
    </div>
  );
}
