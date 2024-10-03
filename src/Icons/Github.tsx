import { FaGithub } from "react-icons/fa";
export default function Github() {
  return (
    <div className="github-wrapper">
      <a
        href="https://github.com/carolinetpham"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          style={{
            fontSize: "80px",
            color: "#A46FE5",
            cursor: "pointer",
            filter: "drop-shadow(2px 2px 2px #999)",
          }}
        />
      </a>
      <span className="icon-text">GitHub</span>
    </div>
  );
}
