import { Container, Row, Accordion } from "react-bootstrap";
import resume from "../dicitonaries/resume.json";
import { ListItem } from "./SharedComponents";
import {getRelevantExperience as experience }  from "./../services/ResumeEndpoint";

//TODO: add styling
//TODO: add user prompt to contact after viewing resume

type FrameProps = {
  type: string;
};

type ExperienceProps = {
  experience: Experience[];
};

type Experience = {
  title: string;
  duties: string;
  timing: string;
  description: string[];
  organization: string;
  link?: string;
};

const ExperienceFrame = (props: ExperienceProps) => {
  const values = experience();
  console.log("Values")
  console.log(values.then(() => {
    
  }));
  return (
    <>
      {
      props.experience.map((item: Experience, i) => {
        let { title, timing, description, duties, organization } = item;
        return (
          <Container key={i}>
            <Row>
              <h5> {organization}</h5>{" "}
            </Row>
            <Row>
              <dl className="dl-horizontal">
                <dt>{title}</dt>
                <dd>{timing}</dd>
              </dl>
            </Row>
            <Row>{duties}</Row>
            <Row>
              <ul>{description.map(ListItem)}</ul>
            </Row>
          </Container>
        );
      })}
    </>
  );
};

export const ResumeFrame = (props: FrameProps) => {
  let { type } = props;
  let object = type == "teaching" ? resume.teaching : resume.programming;
  return object == resume.programming ? (
    <Accordion defaultActiveKey="0">
      <Row>
        <h2>{object.heading.title}</h2>
      </Row>
      <Row>
        <p>{object.heading.intro}</p>
      </Row>
      <Row></Row>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Relevant Experience</Accordion.Header>
          <Accordion.Body>
            <ExperienceFrame experience={object.experience}></ExperienceFrame>
          </Accordion.Body>
        </Accordion.Item>
        <Row></Row>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Core Competencies</Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              {object.coreCompetencies.map(ListItem)}
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
        <h2>{object.heading.title}</h2>
      </Row>
      <Row>
        <p>{object.heading.intro}</p>
      </Row>
      <Row></Row>
      <Row>
        <h3>Relevant Experience</h3>
        <ExperienceFrame experience={object.experience}></ExperienceFrame>
      </Row>
      <Row></Row>
    </Container>
  );
};
