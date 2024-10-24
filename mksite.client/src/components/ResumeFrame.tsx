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
  experience: ExperienceModel | null;
};

type ExperienceProps = {
  experience: ExperienceListModel[];
};

const CertificateFrame = forwardRef(
  (props: { certifications: CertificateModel[] }) => {
    const { certifications } = props;
    return certifications.map((certification) => {
      const { id, courseName, institution, details } = certification;
      return (
        <Container key={id}>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-bottom">{details}</Tooltip>}
          >
            <div>
              <img
                width="100px"
                height="100px"
                src={Certificate}
                alt={`${courseName} from ${institution}`}
              ></img>
              <figcaption>
                {courseName} from {institution}
              </figcaption>
            </div>
          </OverlayTrigger>
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
        <Container key={id} className={`${styles["competencyContainer"]}`}>
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
      <a href={link} target="_blank">
        {organization}
      </a>
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
                ></ExperienceFrame>
              </Accordion.Body>
            </Accordion.Item>
            <Row></Row>
            <Accordion.Item eventKey="1" className={`${styles["resumeItem"]}`}>
              <Accordion.Header className={`${styles["accordionHeader"]}`}>
                Core Competencies
              </Accordion.Header>
              <Accordion.Body>
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
              <Accordion.Body>
                {experience.certifications && (
                  <CertificateFrame
                    certifications={experience.certifications}
                  ></CertificateFrame>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <a
            href="../assets/mk_Resume.pdf"
            target="_blank"
            className={`${styles["resume-link"]}`}
            type="application/pdf"
          >
            <b>{`${"full resume here".toUpperCase()}`}</b>
          </a>
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
            ></ExperienceFrame>
          </Row>
        </Container>
      )}
    </>
  );
};
