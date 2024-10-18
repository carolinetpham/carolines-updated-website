import { IoIosPaper } from "react-icons/io";
import "./icons.css";
export default function Github() {
  return (
    <div className="resume-wrapper">
      <a
        href="https://drive.google.com/file/d/1oiF1Wu4GbbR3Vy2QILjLjtTgMXqTobDO/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosPaper
          style={{
            fontSize: "80px",
            color: "#A46FE5",
            cursor: "pointer",
            filter: "drop-shadow(2px 2px 2px #999)",
          }}
        />
      </a>
      <span className="icon-text">Resume</span>
    </div>
  );
}
