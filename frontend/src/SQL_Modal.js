import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './styles.css';

function SQL_Modal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
      console.log(inputValue);
      handleClose();
    };
  return (
    <>
      <Button variant="light" onClick={handleShow}>
        {props.buttonText} sql
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id = "M_Tittle">SQL Input</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="SQL" name="input_SQL" placeholder="Enter the SQL" onChange={(e) => setInputValue(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
           <Button variant="primary" onClick={handleSubmit}>
                    Submit
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SQL_Modal;
