import React from "react";
import { Modal } from "react-bootstrap";

interface ModalProps {
  show: boolean;
  onHide: () => void;
  onSignOut: () => void;
}

const LeaveTestModal: React.FC<ModalProps> = ({
  show,
  onHide,
  onSignOut,
}) => {
  return (
    <Modal show={show} onHide={onHide} centered  dialogClassName="modal-body">
      <Modal.Body>
        <div style={{padding:'24px',flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'center', gap:'12px'}}>
          <h1>Notice</h1>
          <p style={{ fontSize: "16px" }}>Would you like to leave the test now?</p>
          <div style={{display:'flex',justifyContent:'center',gap:'24px'}}>
            <button style={{padding:'10px',borderRadius:'8px', border:'1.4px solid black'}} onClick={onHide}>Cancel</button>
            <button style={{padding:'10px',backgroundColor:"#F37103",borderRadius:'8px'}} onClick={onSignOut}>Sign Out</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LeaveTestModal;
