import { FaEnvelope } from "react-icons/fa";
export default function Mail() {
  return (
    <div className="mail-container">
      <a
        href="mailto:carolinetpham@outlook.com?subject=Let's%20Connect&body=Hi%20Caroline,"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope
          style={{
            fontSize: "80px",
            color: "#A46FE5",
            cursor: "pointer",
            filter: "drop-shadow(2px 2px 2px #999)",
          }}
        />
      </a>
      <span className="icon-text">Email</span>
    </div>
  );
}
