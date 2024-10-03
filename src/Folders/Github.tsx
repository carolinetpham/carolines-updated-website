import { FaGithub } from "react-icons/fa";
export default function Github() {
  return (
    <div className="github-wrapper">
      {/* Wrap the GitHub icon in a link to your GitHub profile */}
      <a
        href="https://github.com/carolinetpham" /* Replace with your GitHub URL */
        target="_blank" /* Open the link in a new tab */
        rel="noopener noreferrer" /* Security feature for external links */
      >
        <FaGithub
          style={{
            fontSize: "80px",
            color: "#A3A9FF",
            cursor: "pointer",
            filter: "drop-shadow(2px 2px 2px #999)",
          }}
        />
      </a>
      <span className="icon-text">GitHub</span>
    </div>
  );
}
