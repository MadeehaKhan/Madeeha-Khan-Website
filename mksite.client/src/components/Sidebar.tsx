import { useState } from "react";
import { Nav } from "react-bootstrap";
import styles from "../assets/Sidebar.module.css";

type SidebarProps = {
  currentPage: string;
  handlePageChange(key: string): void;
  links: string[];
};

export const Sidebar = (props: SidebarProps) => {
  //TODO: edit class dropdown-menu and nav-link to style the thing
  //also move it lower
  const { currentPage, handlePageChange, links } = props;
  const [activePage, setActivePage] = useState(currentPage);
  const handleSelect = (eventKey: any) => {
    setActivePage(eventKey);
    handlePageChange(eventKey);
    //match eventkey to element and add classname
  };

  return (
    <Nav
      onSelect={(eventKey) => handleSelect(eventKey)}
      defaultActiveKey={activePage}
      className={`flex-column ${styles["sidebarNav"]}`}
    >
      <div className={`${styles.sideBarElements}`}>
        {links.map((link) => {
          return (
            <Nav.Link
              className={`${styles["sidebarNav-link"]}`}
              eventKey={link}
              key={link}
            >
              {link == activePage
                ? `「 ${link.toLowerCase()} 」`
                : link.toLowerCase()}
            </Nav.Link>
          );
        })}
      </div>
    </Nav>
  );
  //TODO: fill about + contact + home
};
