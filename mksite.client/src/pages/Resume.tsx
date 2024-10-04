import { Container, Nav, Row } from "react-bootstrap";
import { ResumeFrame } from "../components/ResumeFrame";
import { useEffect, useState } from "react";
import { getRelevantExperience as experience } from "../services/ResumeService";
import { ExperienceModel } from "../models/ExperienceModel";
import { Loader } from "../components/SharedComponents";

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
      experience<ExperienceModel>(`/experience/${resumeControl}`).then(
        (results) => setExperienceData(results)
      );
    }
  };

  //TODO: add link to pdf of full resume
  return (
    <Container>
      <Nav
        variant="unerline"
        defaultActiveKey={resumeControl}
        onSelect={(eventKey) => handleTab(eventKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="programming">Developer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="teaching">Teacher</Nav.Link>
        </Nav.Item>
      </Nav>
      {experienceData ? (
        <ResumeFrame
          type={resumeControl}
          experience={experienceData}
        ></ResumeFrame>
      ) : (
        <Loader></Loader>
      )}
      <Row></Row>
    </Container>
  );
};
