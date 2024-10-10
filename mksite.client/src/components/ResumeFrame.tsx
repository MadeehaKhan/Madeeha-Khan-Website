import {
  Container,
  Row,
  Accordion,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { ListItem } from "./SharedComponents";
import {
  ExperienceListModel,
  ExperienceModel,
} from "../models/ExperienceModel";
import styles from "../assets/ResumeFrame.module.css";
import { forwardRef } from "react";
//TODO: add styling
//TODO: add user prompt to contact after viewing resume

type FrameProps = {
  type: string;
  experience: ExperienceModel | null;
};

type ExperienceProps = {
  experience: ExperienceListModel[];
};

const ExperienceHeader = forwardRef(
  //TODO: add the link somehow
  (props: { organization: string; link?: string }, ref: any) => {
    const { organization, link } = props;
    return (
      <h5 ref={ref} className={`${styles["experienceHeader"]}`}>
        <a href={link} target="_blank">
          {organization}
        </a>
      </h5>
    );
  }
);

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
          link,
        } = item;
        return (
          <Container key={id}>
            <Row>
              <ExperienceHeader
                organization={organization}
                link={link}
              ></ExperienceHeader>
            </Row>
            <dl className={`dl-horizontal`}>
              <dt>{role}</dt>
              <dd>{duration}</dd>
            </dl>
            <div className={`${styles["description"]}`}>
              <p className={`${styles["genDescription"]}`}>
                {generalDescription}
              </p>
              <Row className={`${styles["itemDescription"]}`}>
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
          <Accordion.Item eventKey="0" className={`${styles["resumeItem"]}`}>
            <Accordion.Header className={`${styles["accordionHeader"]}`}>
              Relevant Experience
            </Accordion.Header>
            <Accordion.Body>
              <ExperienceFrame
                experience={experience.experienceList}
              ></ExperienceFrame>
            </Accordion.Body>
          </Accordion.Item>
          <Row></Row>
          <Accordion.Item eventKey="1">
            <Accordion.Header className={`${styles["accordionHeader"]}`}>
              Core Competencies
            </Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                {experience.coreCompetencies?.map(ListItem)}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className={`${styles["accordionHeader"]}`}>
              Certifications
            </Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Container className={`${styles["teacherResume"]}`}>
          <Row className={`${styles["teacherResume-desc"]}`}>
            <h2>{experience.title}</h2>
            <p>{experience.introduction}</p>
          </Row>
          <Row>
            <h4>Relevant Experience</h4>
            <ExperienceFrame
              experience={experience.experienceList}
            ></ExperienceFrame>
          </Row>
        </Container>
      )}
    </>
  );
};
