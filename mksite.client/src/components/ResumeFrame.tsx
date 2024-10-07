import { Container, Row, Accordion } from "react-bootstrap";
import { ListItem } from "./SharedComponents";
import {
  ExperienceListModel,
  ExperienceModel,
} from "../models/ExperienceModel";
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
              <h5> {organization}</h5>{" "}
            </Row>
            <Row>
              <dl className="dl-horizontal">
                <dt>{role}</dt>
                <dd>{duration}</dd>
              </dl>
            </Row>
            <Row>{generalDescription}</Row>
            <Row>
              <ul>{itemizedDescription.map(ListItem)}</ul>
            </Row>
          </Container>
        );
      })}
    </>
  );
};

export const ResumeFrame = (props: FrameProps) => {
  const { type, experience } = props;
  console.log({ experience });
  if (!experience) return <h1>AHHHHHH</h1>;
  return (
    <>
      {type == "programming" ? (
        <Accordion defaultActiveKey="0">
          <Row>
            <h2>{experience.title}</h2>
          </Row>
          <Row>
            <p>{experience.introduction}</p>
          </Row>
          <Row></Row>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Relevant Experience</Accordion.Header>
              <Accordion.Body>
                <ExperienceFrame
                  experience={experience.experienceList}
                ></ExperienceFrame>
              </Accordion.Body>
            </Accordion.Item>
            <Row></Row>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Core Competencies</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  {experience.coreCompetencies?.map(ListItem)}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Certifications</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
