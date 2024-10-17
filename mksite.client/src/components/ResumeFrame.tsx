import {
  Container,
  Row,
  Accordion,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { ListItem } from "./SharedComponents";
import {
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

//TODO: add user prompt to contact after viewing resume

type FrameProps = {
  type: string;
  experience: ExperienceModel | null;
};

type ExperienceProps = {
  experience: ExperienceListModel[];
};

const CompetencyFrame = forwardRef(
  (props: { competencies: CompetencyModel[] }, ref) => {
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
              ref={ref}
              width="75px"
              height="75px"
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
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <a
            href=""
            target="_blank"
            className={`${`${styles["resume-link"]}`}`}
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
