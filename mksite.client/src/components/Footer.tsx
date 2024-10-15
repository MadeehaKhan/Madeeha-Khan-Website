import { Col, Container } from "react-bootstrap";
import GithubIcon from "../assets/logos/Github.svg";
import style from "../assets/Footer.module.css";


export const Footer = (props) => {
  //section for attributions
  //link to github
  //ownership and built with
  return (
    <Container className={`${style["footer"]}`}>
      <Col className={`${style["github"]}`}>
      <a href={`https://github.com/MadeehaKhan/`} target="_blank"><img src={GithubIcon} alt="Github Icon" width="50px" height="50px"></img></a>
      </Col>
    </Container>
  );
};
