import { useState, useEffect, useRef } from "react";
import EducationClickComponent from "./EducationFolder";
import Github from "../Icons/Github";
import ProjectsClickComponent from "./ProjectsFolder";
import Linkedin from "../Icons/Linkedin";
import ExperienceClickComponent from "./ExperienceFolder";
import Mail from "../Icons/Mail";
import SkillsClickComponent from "./SkillsFolder";
import Resume from "../Icons/Resume";
import BottomNavBar from "../Components/BottomNavBar";

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

  const tutorialSteps = [
    {
      step: 0,
      title: `Hi ${username}, welcome!`,
      description: "Would you like to go through a short tutorial?",
    },
    {
      step: 1,
      title: "Click on these folders to explore!",
      description: "Each folder represents different sections you can access.",
      ref: skillsRef,
    },
    {
      step: 2,
      title: "Click on these icons to learn more about me!",
      description: "Each icon represents an external link.",
      ref: resumeRef,
    },
  ];

  // Update position based on current step
  useEffect(() => {
    const targetRef = tutorialSteps[currentStep]?.ref;

    if (targetRef && targetRef.current) {
      const { top, left, width } = targetRef.current.getBoundingClientRect();
      setPosition({
        top: top + window.scrollY - 15,
        left: left + width / 2 - 60,
      });
    }
  }, [currentStep]);

  const handleStartTutorial = () => {
    setShowTutorial(true);
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSkipTutorial = () => {
    setShowTutorial(false);
    setCurrentStep(-1);
  };

  return (
    <div id="folders-container">
      <div id="row-one">
        <ProjectsClickComponent />
        <EducationClickComponent />
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

      {showTutorial && currentStep > 0 && (
        <div
          className={`highlight-folder tooltip-step${currentStep}`}
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
          <div className={`tooltip tooltip-step${currentStep}`}>
            <h3>{tutorialSteps[currentStep].title}</h3>
            <p>{tutorialSteps[currentStep].description}</p>
            {currentStep < tutorialSteps.length - 1 ? (
              <button className="end-button" onClick={handleNextStep}>
                Next
              </button>
            ) : (
              <button className="end-button" onClick={handleSkipTutorial}>
                Got it!
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
