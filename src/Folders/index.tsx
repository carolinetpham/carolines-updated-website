import EducationClickComponent from "./EducationFolder";
import Github from "../Icons/Github";
import ProjectsClickComponent from "./ProjectsFolder";
import Linkedin from "../Icons/Linkedin";
import ExperienceClickComponent from "./ExperienceFolder";
import Mail from "../Icons/Mail";
import SkillsClickComponent from "./SkillsFolder";
import BottomNavBar from "../Components/BottomNavBar";

interface FoldersPageProps {
  username: string;
}

const FoldersPage: React.FC<FoldersPageProps> = ({ username }) => {
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
        <Mail />
      </div>
      <div id="row-four">
        <SkillsClickComponent />
      </div>
      <BottomNavBar />
    </div>
  );
};

export default FoldersPage;
