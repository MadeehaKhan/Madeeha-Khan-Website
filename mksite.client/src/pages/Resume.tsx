/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Nav, Row } from "react-bootstrap";
import { ResumeFrame } from "../components/ResumeFrame";
import { useState } from "react";

export const Resume = () => {
  //TODO: style nav
  const [resumeControl, setResumeControl] = useState("programming");

  const handleTab = (eventKey: any) => {
    setResumeControl(eventKey);
  };

  //TODO: add link to pdf of full resume
  return (
    <Container>
      <Nav
        variant="unerline"
        defaultActiveKey="programming"
        onSelect={(eventKey) => handleTab(eventKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="programming">Developer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="teaching">Teacher</Nav.Link>
        </Nav.Item>
      </Nav>
      <ResumeFrame type={resumeControl}></ResumeFrame>
      <Row></Row>
    </Container>
  );
};
