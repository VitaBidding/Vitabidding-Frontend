import React from "react";
import Modal from "react-bootstrap/Modal";

function ValidationModal({ show, handleClose, message }) {
  return (
    <Modal size="sm" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
      <Modal.Header style={{ height: "30px" }} closeButton>
        등록실패
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-around">{message}</Modal.Body>
    </Modal>
  );
}

export default ValidationModal;
