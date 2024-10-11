import { Container, Col, Row } from "react-bootstrap";
import { Resume } from "../pages/Resume";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { HomePage } from "../pages/HomePage";
import { Footer } from "./Footer";
import style from "../assets/BaseComponent.module.css";

const BaseComponent = () => {
  //controls to display middle element
  const [activePage, setActivePage] = useState("Home");
  const links = ["Home", "Resume", "About", "Contact"];

  const navigateContent = (page: string) => {
    //console.log(`going from ${activePage} to ${page}!`);
    setActivePage(page);
  };

  const renderSwitch = (page: string) => {
    switch (page) {
      case "Resume":
        return <Resume></Resume>;
      case "Home":
        return <HomePage></HomePage>;
      case "About":
        return <About></About>;
      case "Contact":
        return <Contact></Contact>;
    }
  };

  const colStyle = {
    paddingLeft: "0",
    paddingRight: "0",
  };

  return (
    <Container className={`${style["base"]}`}>
      <Row>
        <Col></Col>
        <Col md="2">
          <Sidebar
            handlePageChange={navigateContent}
            currentPage={activePage}
            links={links}
          ></Sidebar>
        </Col>
        <Col md="8">{renderSwitch(activePage)}</Col>
        <Col
          style={
            activePage == "Resume" || activePage == "About" ? colStyle : {}
          }
        ></Col>
      </Row>
      <Row>
        <Footer></Footer>
      </Row>
    </Container>
  );
};

export default BaseComponent;
