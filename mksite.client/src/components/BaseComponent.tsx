import { Container, Col } from "react-bootstrap";
import { Resume } from "../pages/Resume";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { HomePage } from "../pages/HomePage";

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

  return (
    <Container fluid="md">
      <Col>
        <Sidebar
          handlePageChange={navigateContent}
          currentPage={activePage}
          links={links}
        ></Sidebar>
      </Col>
      <Col md="7">{renderSwitch(activePage)}</Col>
    </Container>
  );
};

export default BaseComponent;
