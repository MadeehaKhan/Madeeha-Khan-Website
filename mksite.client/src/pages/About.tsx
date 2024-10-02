import { Carousel, Container, Row } from "react-bootstrap";

export const About = () => {
  return (
    <Container>
      <Row>
        <h2>About Madeeha:</h2>
        <article>Super hot. Perfect.</article>
      </Row>
      <Row></Row>
      <Carousel>
        <Carousel.Item>
          <img></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
