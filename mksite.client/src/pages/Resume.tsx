import { Nav } from "react-bootstrap";
import { ResumeFrame } from "../components/ResumeFrame";
import { useEffect, useState } from "react";
import { getRelevantExperience as experience } from "../services/ResumeService";
import { ExperienceModel } from "../models/ExperienceModel";
import style from "../assets/Resume.module.css";

export const Resume = () => {
  //TODO: style nav
  const [resumeControl, setResumeControl] = useState<string>("programming");
  const [experienceData, setExperienceData] = useState<ExperienceModel | null>(
    null
  );
  useEffect(() => {
    experience<ExperienceModel>(`/experience/${resumeControl}`)
      .then((result) => {
        setExperienceData(result);
      })
      .catch(() => {});
  }, [resumeControl]);

  const handleTab = (eventKey: string | null) => {
    if (eventKey && eventKey != resumeControl) {
      setResumeControl(eventKey);
    }
  };

  return (
    <Nav
      variant="underline"
      defaultActiveKey={resumeControl}
      onSelect={(eventKey) => handleTab(eventKey)}
      className={`${style["resumeNav"]}`}
    >
      <Nav.Item>
        <Nav.Link
          eventKey="programming"
          className={`${style["resumeNav-link"]}`}
        >
          Developer
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="teaching" className={`${style["resumeNav-link"]}`}>
          Teacher
        </Nav.Link>
      </Nav.Item>
      {experienceData ? (
        <ResumeFrame
          type={resumeControl}
          experience={experienceData}
        ></ResumeFrame>
      ) : (
        <></>
      )}
    </Nav>
  );
};
