import EducationClickComponent from "./EducationFolder";
import Github from "../Icons/Github";
import ProjectsClickComponent from "./ProjectsFolder";
import Linkedin from "../Icons/Linkedin";
import ExperienceClickComponent from "./ExperienceFolder";

export default function Folders() {
  return (
    <div id="folders-containers">
      <div id="row-one">
        <ProjectsClickComponent />
        <Github />
      </div>
      <div id="row-two">
        <EducationClickComponent />
        <Linkedin />
      </div>
      <div id="row-three">
        <ExperienceClickComponent />
      </div>
    </div>
  );
}
