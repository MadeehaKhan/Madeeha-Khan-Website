import {
  Container,
  Row,
  Accordion,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { ListItem } from "./SharedComponents";
import {
  CertificateModel,
  CompetencyModel,
  ExperienceListModel,
  ExperienceModel,
} from "../models/ExperienceModel";
import styles from "../assets/ResumeFrame.module.css";
import { forwardRef } from "react";
import ReactLogo from "../assets/logos/React.svg";
import AngularLogo from "../assets/logos/Angular.svg";
import PythonLogo from "../assets/logos/Python.svg";
import CSLogo from "../assets/logos/CSharp.svg";
import AWSLogo from "../assets/logos/AWS.svg";
import PBILogo from "../assets/logos/PowerBI.svg";
import DockerLogo from "../assets/logos/Docker.svg";
import JiraLogo from "../assets/logos/Jira.svg";
import NodeLogo from "../assets/logos/Node.svg";
import Certificate from "../assets/Certificate.svg";

//TODO: add user prompt to contact after viewing resume

type FrameProps = {
  type: string;
  experience: ExperienceModel;
};

type ExperienceProps = {
  experience: ExperienceListModel[];
  type: string;
};

//TODO: move the frames to another file
const CertificateFrame = forwardRef(
  (props: { certificates: CertificateModel[] }) => {
    const { certificates } = props;
    return certificates.map((certificate) => {
      const { id, courseName, institution, details, link } = certificate;
      return (
        <Container key={id}>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-bottom">{details}</Tooltip>}
          >
            <img
              width="150px"
              src={Certificate}
              alt={`${courseName} completed from ${institution}`}
            ></img>
          </OverlayTrigger>
          <p>
            {courseName}&nbsp;  
            {link ? (
              <a href={link} target="_blank">
                from {institution}
              </a>
            ) : (
              `from ${institution}`
            )}
          </p>
        </Container>
      );
    });
  }
);

const CompetencyFrame = forwardRef(
  (props: { competencies: CompetencyModel[] }) => {
    const { competencies } = props;
    const competencyLogos = [
      ReactLogo,
      AngularLogo,
      CSLogo,
      PythonLogo,
      NodeLogo,
      PBILogo,
      DockerLogo,
      JiraLogo,
      AWSLogo,
    ];
    return competencies.map((competency) => {
      const { id, title, details } = competency;
      return (
        <Container key={id}>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-bottom">{details}</Tooltip>}
          >
            <img
              width="50px"
              height="50px"
              src={competencyLogos[id - 1]}
              alt={title}
            ></img>
          </OverlayTrigger>
        </Container>
      );
    });
  }
);

const ExperienceHeader = (props: { organization: string; link?: string }) => {
  const { organization, link } = props;
  return (
    <h5 className={`${styles["experienceHeader"]}`}>
      {link ? (
        <a href={link} target="_blank">
          {organization}
        </a>
      ) : (
        organization
      )}
    </h5>
  );
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
      {props.type == "programming" && (
        <a
          href="https://drive.google.com/file/d/1BXMgjkLGES2L7sbiwoFAgc_ILJ8ZTYSg/view?usp=sharing"
          target="_blank"
          className={`${styles["resume-link"]}`}
        >
          <b>{`${"full resume here".toUpperCase()}`}</b>
        </a>
      )}
    </>
  );
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
