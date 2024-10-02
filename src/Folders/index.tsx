import EducationClickComponent from "./EducationFolder";
import ProjectsClickComponent from "./ProjectsFolder";

export default function Folders() {
  return (
    <div id="folders">
      <ProjectsClickComponent />
      <EducationClickComponent />
    </div>
  );
}
