import EducationClickComponent from "./EducationFolder";
import Github from "./Github";
import ProjectsClickComponent from "./ProjectsFolder";

export default function Folders() {
  return (
    <div id="folders-containers">
      <div id="row-one">
        <ProjectsClickComponent />
        <Github />
      </div>
      <div id="row-two">
        <EducationClickComponent />
      </div>
    </div>
  );
}
