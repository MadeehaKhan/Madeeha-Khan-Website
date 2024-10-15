import { Container, Row } from "react-bootstrap";
import style from "../assets/Home.module.css";

export const Home = () => {
  return (
    <Container className={`${style['home']}`}>
      <h1 className={`${style['hi']}`}>hi :)</h1>
      <Row></Row>
      <Row></Row>
      <h2 className={`${style['welcome']}`}>welcome to my site!</h2>
    </Container>
  );
};