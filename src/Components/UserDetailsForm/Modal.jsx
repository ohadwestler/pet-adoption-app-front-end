import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalForm({children, type, show, handleClose, handleSubmit}) {
  const title = type === "signup" ? "Sign Up" : "Login";
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        {title}
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {title}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalForm;
