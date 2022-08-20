import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ExitDialog(props) {
  const [show, setShow] = useState(props.getalertData);

  const handleClose = () => {
    setShow(false);
    props.eventClose(true);
  };

  const handleOk = () => {
    setShow(false);
    props.eventOk(true);
  };

  const exit = () => {
    setShow(true);
  };

  return (
    <>
      <span>
        <i className="bi bi-stop-circle" onClick={exit}></i>
      </span>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Exit Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Are you sure want to exit?
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleOk}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExitDialog;
