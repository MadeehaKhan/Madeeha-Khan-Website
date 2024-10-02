import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCustom() {
  //TODO: fix and implement in ResumeFrame component
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Wow, she sounds pretty cool.</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>I'm looking for work! Please feel free to reach out.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Contact</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalCustom;
