import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

interface Props {
  popup: boolean;
  popupHandler: any;
}

const LoginPopup: React.FC<Props> = ({ popup, popupHandler }) => {
  return (
    <Modal show={popup}>
      <div
        style={{
          width: "1750px",
          height: "1045px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <p>hi</p>
      </div>
      <Button onClick={popupHandler}>close</Button>
    </Modal>
  );
};

export default LoginPopup;
