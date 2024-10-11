import { Nav } from "react-bootstrap";

export const ListItem = (point: string, index: number) => {
  return <li key={index}> {point} </li>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LinkListItem = (styles: any, eventKey: string) => {
  return (
    <Nav.Link className={styles} eventKey={eventKey} key={eventKey}>
      {eventKey.toLowerCase()}
    </Nav.Link>
  );
};
