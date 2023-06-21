import React from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


interface NavBarBlockModalProps{
    showBlockModal:boolean;
    setShowBlockModal : any;
    nextPath:string;
    setNextPath:any;
}

const NavBarBlockModal:React.FC<NavBarBlockModalProps> = ({showBlockModal,setShowBlockModal,nextPath},setNextPath) =>{

    const navigate = useNavigate();
    const onHide = () =>{
        setShowBlockModal(false);
        setNextPath("");
    }

    const leaveHandler = () =>{
        setShowBlockModal(false);
        navigate(nextPath);
        setNextPath("");
        
    }

    return(
        <Modal show={showBlockModal} onHide={onHide} centered  dialogClassName="modal-body">
            <Modal.Body>
            <div style={{padding:'24px',flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'center', gap:'12px'}}>
                <h1>Warning</h1>
                <p style={{ fontSize: "16px" }}>Are you sure you want to leave this page?</p>
                <div style={{display:'flex',justifyContent:'center',gap:'24px'}}>
                    <button style={{padding:'10px',borderRadius:'8px', border:'1.4px solid black'}} onClick={onHide}>Cancel</button>
                    <button style={{padding:'10px',backgroundColor:"#F37103",borderRadius:'8px'}} onClick={leaveHandler}>Leave this page</button>
                </div>
            </div>
            </Modal.Body>
      </Modal>
    )
}


export default NavBarBlockModal;