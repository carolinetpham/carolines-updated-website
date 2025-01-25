import { useState, useEffect, useRef } from "react";
import AboutClickComponent from "./AboutFolder";
import Github from "../Icons/Github";
import ProjectsClickComponent from "./ProjectsFolder";
import Linkedin from "../Icons/Linkedin";
import ExperienceClickComponent from "./ExperienceFolder";
import Mail from "../Icons/Mail";
import SkillsClickComponent from "./SkillsFolder";
import Resume from "../Icons/Resume";
import BottomNavBar from "../Components/BottomNavBar";
import "../index.css";

interface FoldersProps {
  username: string;
}

export default function FoldersPage({ username }: FoldersProps) {
  const [showTutorial, setShowTutorial] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // References to folder and icon containers
  const skillsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleSkipTutorial = () => {
    setShowTutorial(false);
    setCurrentStep(-1);
  };

  return (
    <div id="folders-container">
      <div id="row-one">
        <ProjectsClickComponent />
        <AboutClickComponent />
        <ExperienceClickComponent />
        <div ref={skillsRef}>
          <SkillsClickComponent />
        </div>
      </div>
      <div id="row-two">
        <Github />
        <Linkedin />
        <Mail />
        <div ref={resumeRef}>
          <Resume />
        </div>
      </div>
      <BottomNavBar />

      {currentStep === 0 && (
        <div className="welcome-popup">
          <h2>Hi, {username}!</h2>
          <p>Click on the folders or the icons to explore more about me :) </p>
          <div className="tutorial-buttons">
            <button className="ok-button" onClick={handleSkipTutorial}>
              Got it!
            </button>
          </div>
        </div>
      )}
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
