import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { forwardRef } from "react";
import {
  ExperienceListModel,
  CertificateModel,
  CompetencyModel,
} from "../models/ExperienceModel";
import { ListItem } from "./SharedComponents";
import styles from "../assets/ResumeFrame.module.css";
import info from "../assets/info.json";
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

type ExperienceProps = {
  experience: ExperienceListModel[];
  type: string;
};

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

export const ExperienceFrame = (props: ExperienceProps) => {
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
                <b>{generalDescription}</b>
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
          href={info.resume}
          target="_blank"
          className={`${styles["resume-link"]}`}
        >
          <b>{`${"full resume here".toUpperCase()}`}</b>
        </a>
      )}
    </>
  );
};

export const CompetencyFrame = forwardRef(
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

export const CertificateFrame = forwardRef(
  (props: { certificates: CertificateModel[] }) => {
    const { certificates } = props;
    return certificates.map((certificate) => {
      const { id, courseName, institution, details, link, github } =
        certificate;
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
            {github ? <a href={github} target="_blank">
                {courseName}
              </a> :<> {courseName}</>}&nbsp;
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
