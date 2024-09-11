import React from "react";
import Modal from "react-bootstrap/Modal";
import Updatepage from "./update.page";
const UpdateModal = ({ show, handleClose, upproduct }) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header style={{ height: "30px" }} closeButton></Modal.Header>
      <Modal.Body className="d-flex justify-content-around">
        <Updatepage upproduct={upproduct} UphandleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default UpdateModal;
