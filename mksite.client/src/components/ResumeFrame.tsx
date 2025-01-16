import { Container, Row, Accordion } from "react-bootstrap";
import { ExperienceModel } from "../models/ExperienceModel";
import info from "../assets/info.json";
import {
  ExperienceFrame,
  CertificateFrame,
  CompetencyFrame,
} from "./FrameComponents";

import { WIP } from "../components/WIP";
import styles from "../assets/ResumeFrame.module.css";

//TODO: add user prompt to contact after viewing resume

type FrameProps = {
  type: string;
  experience: ExperienceModel;
};

export const ResumeFrame = (props: FrameProps) => {
  const { type, experience } = props;
  return (
    <>
      {type == "programming" ? (
        <Container className={`${styles["resumeAccordion"]}`}>
          <Accordion defaultActiveKey="0">
            <Row className={`${styles["resumeHeader"]}`}>
              <h2>{experience.title}</h2>
              <p>{experience.introduction}</p>
              <a
                href={info.resume}
                target="_blank"
                className={`${styles["resume-link"]}`}
              >
                <b>{`${"full resume".toUpperCase()}`}</b>
              </a>
            </Row>
            <Accordion.Item eventKey="0" className={`${styles["resumeItem"]}`}>
              <Accordion.Header className={`${styles["accordionHeader"]}`}>
                Relevant Experience
              </Accordion.Header>
              <Accordion.Body>
                <ExperienceFrame
                  experience={experience.experienceList}
                  type={type}
                ></ExperienceFrame>
              </Accordion.Body>
            </Accordion.Item>
            <Row></Row>
            <Accordion.Item eventKey="1" className={`${styles["resumeItem"]}`}>
              <Accordion.Header className={`${styles["accordionHeader"]}`}>
                Core Competencies
              </Accordion.Header>
              <Accordion.Body className={`${styles["competencyContainer"]}`}>
                {experience.coreCompetencies && (
                  <CompetencyFrame
                    competencies={experience.coreCompetencies}
                  ></CompetencyFrame>
                )}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={`${styles["resumeItem"]}`}>
              <Accordion.Header className={`${styles["accordionHeader"]}`}>
                Certifications
              </Accordion.Header>
              <Accordion.Body className={`${styles["competencyContainer"]}`}>
                {experience.certifications && (
                  <CertificateFrame
                    certificates={experience.certifications}
                  ></CertificateFrame>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      ) : (
        <Container className={`${styles["teacherResume"]}`}>
          <Row className={`${styles["teacherResume-desc"]}`}>
            <h2>{experience.title}</h2>
            <p>{experience.introduction}</p>
          </Row>
          <Row className={`${styles["teacherResume-exp"]}`}>
            <ExperienceFrame
              experience={experience.experienceList}
              type={type}
            ></ExperienceFrame>
          </Row>
        </Container>
      )}
    </>
  );
};
