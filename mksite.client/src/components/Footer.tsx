import { forwardRef } from "react";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import style from "../assets/Footer.module.css";

const Attributions = forwardRef((props, ref) => {
  return <p ref={ref}>Attributions</p>;
});

export const Footer = () => {
  //section for attributions
  //link to github
  //ownership and built with
  return (
    <Container className={`${style["footer"]}`}>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip>
            "Background from:"
            <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">
              Free SVG Backgrounds and Patterns by SVGBackgrounds.com
            </a>
          </Tooltip>
        }
      >
        <Attributions></Attributions>
      </OverlayTrigger>
    </Container>
  );
};
