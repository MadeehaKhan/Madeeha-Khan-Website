import { useState } from "react";
import { Nav } from "react-bootstrap";
import styles from "../assets/Sidebar.module.css";

type SidebarProps = {
  currentPage: string;
  handlePageChange(key: string): void;
  links: string[];
};

export const Sidebar = (props: SidebarProps) => {
  const { currentPage, handlePageChange, links } = props;
  const [activePage, setActivePage] = useState(currentPage);
  const handleSelect = (eventKey: string | null) => {
    if (eventKey) { 
    setActivePage(eventKey);
    handlePageChange(eventKey);
    }
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
};
