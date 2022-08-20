import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./shared.scss";

function InstructionDialog({ body, eventOk, eventCancel }) {
  const [setShow, setSetShow] = useState(true);
  const handleCancel = () => {
    setSetShow(false);
    eventCancel(true);
  };
  const handleOk = () => {
    setSetShow(false);
    eventOk(true);
  };

  return (
    <>
      <Modal size="sm" show={setShow} onHide={() => setSetShow(false)}>
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            Mind Puzzle
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">Make square using the blocks, and make sure you use all blocks.</div>
          <div className="spinner-eff spinner-eff-1 m-auto my-3">
            <div className="bar bar-top"></div>
            <div className="bar bar-right"></div>
            <div className="bar bar-bottom"></div>
            <div className="bar bar-left"></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleOk}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InstructionDialog;
