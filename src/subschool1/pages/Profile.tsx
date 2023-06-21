import React, { useContext, useState, useEffect } from "react";
import {  Form } from "react-bootstrap";
import { AuthContext } from "../../context/auth-context";
import {  useNavigate } from "react-router-dom";
import loginBackground from "../assets/LoginBackground.svg";
import "./personalinformation.css";
import Logo from "/upskillscenter.png";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const style = {
    backgroundImage: `url(${loginBackground})`,
  };
  const schoolName = "RSTD";
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    goal: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Input values:", inputValues);
    navigate("/home");
  };


  return (
    <div className="" >
      <div className="profile-body">
        <div className="pi-card">
          <img src={Logo} className="pi-logo" />
          <div style={{ position: "relative", marginTop: "26px",marginBottom: "26px" }}>
            <h1>Personal Information</h1>
          </div>
          <div className="pi-form ">
            <Form onSubmit={handleSubmit} className="pi-form">
              <div className="pi-form-row gap-6">
                <Form.Group
                  controlId="formBasicFirstName"
                  style={{ width: "50%" }}
                >
                  <Form.Label>
                    <h2>Name</h2>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    // value={inputValues.firstName}/
                    value = {student.firstName}
                    disabled
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    style={{ padding: "10px" }}
                    // required

                  />
                </Form.Group>

                <Form.Group
                  controlId="formBasicLastName"
                  style={{ width: "50%" }}
                >
                  <Form.Label>
                    <h2>Surname</h2>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    // value={inputValues.lastName}
                    value = {student.lastName}
                    disabled
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    style={{ padding: "10px" }}
                    // required
                  />
                </Form.Group>
              </div>
              <div className="pi-form-row gap-6">
                <Form.Group
                  controlId="formBasicGender"
                  style={{ width: "50%" }}
                >
                  <Form.Label>
                    <h2>Gender</h2>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="gender"
                    // value={inputValues.gender}
                    value = {student.gender}
                    disabled
                    onChange={handleInputChange}
                    style={{ padding: "10px" }}
                    // required
                  >
                    {/* <option value="">--Select gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option> */}
                  </Form.Control>
                </Form.Group>

                <Form.Group
                  controlId="formBasicDateOfBirth"
                  style={{ width: "50%" }}
                >
                  <Form.Label>
                    <h2>Date of Birth</h2>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="dateOfBirth"
                    // value={inputValues.dateOfBirth}
                    value = {student.dateOfBirth}
                    disabled
                    onChange={handleInputChange}
                    style={{ padding: "10px" }}
                    // required
                  />
                </Form.Group>
              </div>
              <div className="pi-form-row gap-6">
                <Form.Group controlId="formBasicEmail" style={{ width: "50%" }}>
                  <Form.Label>
                    <h2>Email Address</h2>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    // value={inputValues.email}
                    value = {student.email}
                    disabled
                    onChange={handleInputChange}
                    placeholder="name@emample.com"
                    style={{ padding: "10px" }}
                    // required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPhone" style={{ width: "50%" }}>
                  <Form.Label>
                    <h2 style={{ bottom: "0px" }}>Phone Number</h2>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    // value={inputValues.phone}
                    value = {student.phoneNumber}
                    disabled
                    onChange={handleInputChange}
                    placeholder="XX-XXXXXXXX"
                    style={{ padding: "10px" }}
                    // required
                  />
                </Form.Group>
              </div>
              <div className="pi-form-row">
                <Form.Group controlId="formBasicGoal" style={{ width: "100%" }}>
                  <Form.Label>
                    <h2>Goal</h2>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="goal"
                    // value={inputValues.goal}
                    value = {student.goal}
                    disabled
                    onChange={handleInputChange}
                    placeholder="Enter your goal"
                    style={{ padding: "10px" }}
                    // required
                  />
                </Form.Group>
              </div>
              <div className="pi-form-row-btn">
                {/* <button type="submit" className="pi-btn-submit">
                  <h2>Submit</h2>
                </button> */}
              </div>
            </Form>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Profile;

const student = {
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    dateOfBirth: "1/20/2008",
    email: "john.doe@example.com",
    phoneNumber: "081-123-4567",
    goal: "Learn and test online learning with Upskillscenter",
  };