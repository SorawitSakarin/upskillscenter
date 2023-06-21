import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

interface Props {
  index: number;
  item: Array<any>;
  headTable: Array<any>;
}

const TableManagerBody: React.FC<Props> = ({ index, item, headTable }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
  };

  return (
    <tr key={index}>
      {Object.values(item).map((e: any, i) => (
        <td key={i}>
          <p>{e}</p>
        </td>
      ))}
      <td key={item.length}>
        <Button variant="outline-primary" onClick={handleOpen}>
          edit
        </Button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Editing </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {Object.values(item).map((e: any, i) => {
              return (
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>{headTable[i]}</Form.Label>
                  <Form.Control type="text" placeholder={e} autoFocus />
                </Form.Group>
              );
            })}
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

export default TableManagerBody;
