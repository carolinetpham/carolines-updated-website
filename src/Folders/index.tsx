import { useState, useEffect, useRef } from "react";
import EducationClickComponent from "./EducationFolder";
import Github from "../Icons/Github";
import ProjectsClickComponent from "./ProjectsFolder";
import Linkedin from "../Icons/Linkedin";
import ExperienceClickComponent from "./ExperienceFolder";
import Mail from "../Icons/Mail";
import SkillsClickComponent from "./SkillsFolder";
import BottomNavBar from "../Components/BottomNavBar";

interface FoldersProps {
  username: string;
}

export default function FoldersPage({ username }: FoldersProps) {
  const [showTutorial, setShowTutorial] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  
  // Reference to the Skills folder container
  const skillsRef = useRef<HTMLDivElement>(null);

  const tutorialSteps = [
    {
      step: 0,
      title: `Hi ${username}, welcome!`,
      description: "Would you like to go through a short tutorial?",
    },
    {
      step: 1,
      title: "Click on these icons to explore!",
      description: "Each folder represents different sections you can access.",
    },
  ];

  // Calculate the position of the Skills folder
  useEffect(() => {
    if (skillsRef.current) {
      const { top, left, width } = skillsRef.current.getBoundingClientRect();
      setPosition({ top: top + window.scrollY -15, left: left + width / 2 - 70});
    }
  }, [showTutorial, currentStep]);

  const handleStartTutorial = () => {
    setShowTutorial(true);
    setCurrentStep(1);
  };

  const handleSkipTutorial = () => {
    setShowTutorial(false);
    setCurrentStep(-1);
  };

  return (
    <div id="folders-container">
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
        <div ref={skillsRef}>
          <SkillsClickComponent />
        </div>
      </div>
      <BottomNavBar />

      {currentStep === 0 && (
        <div className="welcome-popup">
          <h2>Hi, {username}!</h2>
          <p>Would you like to go through a tutorial?</p>
          <div className="tutorial-buttons">
            <button className="yes-button" onClick={handleStartTutorial}>
              Yes
            </button>
            <button className="no-button" onClick={handleSkipTutorial}>
              No
            </button>
          </div>
        </div>
      )}

      {showTutorial && currentStep === 1 && (
        <div
          className="highlight-folder"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
          <div className="tooltip">
            <h3>{tutorialSteps[1].title}</h3>
            <p>{tutorialSteps[1].description}</p>
            <button className="end-button" onClick={handleSkipTutorial}>
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
