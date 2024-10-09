import { Container, Row, Accordion } from "react-bootstrap";
import { ListItem } from "./SharedComponents";
import {
  ExperienceListModel,
  ExperienceModel,
} from "../models/ExperienceModel";
import styles from "../assets/ResumeFrame.module.css";
//TODO: add styling
//TODO: add user prompt to contact after viewing resume

type FrameProps = {
  type: string;
  experience: ExperienceModel | null;
};

type ExperienceProps = {
  experience: ExperienceListModel[];
};

const ExperienceFrame = (props: ExperienceProps) => {
  return (
    <>
      {props.experience.map((item: ExperienceListModel) => {
        const {
          id,
          organization,
          role,
          duration,
          generalDescription,
          itemizedDescription,
        } = item;
        return (
          <Container key={id}>
            <Row>
              <h5 className={`${styles["experienceHeader"]}`}> {organization}</h5>{" "}
            </Row>
            <Row>
              <dl className={`dl-horizontal`}>
                <dt>{role}</dt>
                <dd>{duration}</dd>
              </dl>
            </Row>
            <div className={`${styles['description']}`}>
            <p className={`${styles['genDescription']}`}>{generalDescription}</p>
            <Row className={`${styles['itemDescription']}`}>
              <ul>{itemizedDescription.map(ListItem)}</ul>
            </Row>
            </div>
          </Container>
        );
      })}
    </>
  );
};

//TODO: add link to pdf of full resume
export const ResumeFrame = (props: FrameProps) => {
  const { type, experience } = props;
  //TODO: real error handling
  if (!experience) return <h1>AHHHHHH</h1>;
  return (
    <>
      {type == "programming" ? (
        <Accordion
          defaultActiveKey="0"
          className={`${styles["resumeAccordion"]}`}
        >
          <Row className={`${styles["resumeHeader"]}`}>
            <h2>{experience.title}</h2>
            <p>{experience.introduction}</p>
          </Row>
          <Accordion.Item eventKey="0">
            <Accordion.Header className={`${styles["accordionHeader"]}`}>Relevant Experience</Accordion.Header>
            <Accordion.Body>
              <ExperienceFrame
                experience={experience.experienceList}
              ></ExperienceFrame>
            </Accordion.Body>
          </Accordion.Item>
          <Row></Row>
          <Accordion.Item eventKey="1">
            <Accordion.Header className={`${styles["accordionHeader"]}`}>Core Competencies</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                {experience.coreCompetencies?.map(ListItem)}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className={`${styles["accordionHeader"]}`}>Certifications</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Container>
          <Row>
            <h2>{experience.title}</h2>
          </Row>
          <Row>
            <p>{experience.introduction}</p>
          </Row>
          <Row></Row>
          <Row>
            <h3>Relevant Experience</h3>
            <ExperienceFrame
              experience={experience.experienceList}
            ></ExperienceFrame>
          </Row>
          <Row></Row>
        </Container>
      )}
    </>
  );
};
