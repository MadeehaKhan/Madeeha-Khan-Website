import { Nav } from "react-bootstrap";

export const ListItem = (point: string, index: number) => {
  return <li key={index}> {point} </li>;
};

export const LinkListItem = (styles: any, eventKey: string) => {
  return (
    <Nav.Link className={styles} eventKey={eventKey} key={eventKey}>
      {eventKey.toLowerCase()}
    </Nav.Link>
  );
};
