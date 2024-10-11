import { useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import { getAboutData as about } from "../services/AboutService";
import { CarouselData } from "../models/AboutModel";
import styles from "../assets/About.module.css";

export const About = () => {
  const [carouselData, setCarouselData] = useState<CarouselData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    about<CarouselData[]>()
      .then((result) => {
        setCarouselData(result);
        setLoading(false);
      })
      .catch(() => {});
  }, [loading]);
  return (
    <Container>
      <Row>
        <h2>About Madeeha:</h2>
        <article>{`I need a job <3.`}</article>
      </Row>
      <Carousel className={`${styles["carouselBody"]}`}>
        {carouselData &&
          carouselData.map(({ id, url, altText, caption }) => {
            return (
              <Carousel.Item key={id}>
                <img
                  className={`${styles["carouselImage"]}`}
                  src={url}
                  alt={altText}
                ></img>
                <Carousel.Caption>
                  <h3>{caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </Container>
  );
};
