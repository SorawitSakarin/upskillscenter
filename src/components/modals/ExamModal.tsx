// SignOutWarning.tsx
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './SignoutModal.css';

interface ExamProps {
  show: boolean;
  onHide: () => void;
  onSignOut: () => void;
  path:string;
}

const ExamModal: React.FC<ExamProps> = ({
  show,
  onHide,
  onSignOut,
  path
}) => {

  const title = 'Notice';
  const description = 'You have already done this exam'
  const leftBtn = 'Redo';
  const rightBtn = 'Answer key';
  const navigate = useNavigate();

  return (
    <Modal show={show} onHide={onHide} centered  dialogClassName="modal-body">
      <Modal.Body>
        <div style={{padding:'24px',flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'center', gap:'12px'}}>
          <h1>{title}</h1>
          <p className="p-h2">{description}</p>
          <div style={{display:'flex',justifyContent:'center',gap:'24px'}}>
            <button style={{padding:'10px',borderRadius:'8px', border:'1.4px solid black'}} onClick={onHide}>{leftBtn}</button>
            <button style={{padding:'10px',backgroundColor:"#F37103",borderRadius:'8px'}} onClick={()=>navigate(path)}>{rightBtn}</button>
            <button style={{padding:'10px',backgroundColor:"#F37103",borderRadius:'8px'}} onClick={()=>navigate(path)}>{rightBtn}</button>
          
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ExamModal;
