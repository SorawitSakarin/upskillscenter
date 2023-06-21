import React, { useContext, useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import loginBackground from "../assets/LoginBackground.svg";
import "./login.css";
import logo from "/upskillscenter.png";

const LoginSchool1: React.FC = () => {
  const navigate = useNavigate();
  const [alertPopup, setAlertPopup] = useState(false);
  const auth = useContext(AuthContext);
  const style = {
    backgroundImage: `url(${loginBackground})`,
  };
  const [inputValues, setInputValues] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAlertPopup(false);
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Input values:", inputValues);
    if(inputValues.userName ==='admin' && inputValues.password ==='admin'){
      auth.login("student", "token");
      navigate("/personalinformation");
    } else{
      setAlertPopup(true);
    }
  };

  return (
    <div className="login-background" style={style}>
      <div className="login-body appear">
        <div className="login-card">
          <img src={logo} className="login-logo" />
          <div style={{ position: "relative", marginTop: "26px" }}>
            <h1> Sign in</h1>
          </div>
          <div className="login-form">
            <Form onSubmit={handleSubmit}>
              <div>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label><h2>User name</h2></Form.Label>
                  <Form.Control
                    type="test"
                    name="userName"
                    value={inputValues.userName}
                    onChange={handleInputChange}
                    placeholder="User name"
                    required
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label><h2>Password</h2></Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={inputValues.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                  />
                </Form.Group>
              </div>

              <div className="login-btn-submit">
                <button type="submit">
                <h2>Login</h2>
                </button>
              </div>
            </Form>
          </div>
          {alertPopup && (
            <div className="login-failed">
              {" "}
              <FiAlertTriangle size={24} />{" "}
              <p className="p-h4">User name or Password is not correct!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSchool1;
