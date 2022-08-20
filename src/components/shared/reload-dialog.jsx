import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ReloadDialog(props) {
  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
    props.eventClose(true);
  }

  const handleOk = () => {
    window.location.reload();
    setShow(false);
  }

  const reload = () => {
    setShow(true);
  }

  return (
    <>
      <span onClick={reload}>
        <i className="bi bi-bootstrap-reboot"></i>
      </span>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header>
          <Modal.Title>Reset Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure want to reset your game progress, Your progress will be lost.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleOk}>Yes</Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReloadDialog;