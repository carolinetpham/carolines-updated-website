import { IoIosPaper } from "react-icons/io";
import "./icons.css";
export default function Github() {
  return (
    <div className="resume-wrapper">
      <a
        href="https://drive.google.com/file/d/1ibBbgN_Sk9_X35gm-HqcSw8gLDkIb4JP/view?usp=sharing"
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
