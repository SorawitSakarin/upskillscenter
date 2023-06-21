import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

interface HeaderProps {
  userType: 'admin' | 'student';
}

const MainNavBar: React.FC<HeaderProps> = ({ userType }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Upskill</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          {userType === 'admin' ? (
            <>
              <Nav.Link href="/student-manager">Student Manager</Nav.Link>
              <Nav.Link href="/school-manager">School Manager</Nav.Link>
              <Nav.Link href="/exam-manager">Exam Manager</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/post-test">Post Test</Nav.Link>
              <Nav.Link href="/fundamental">Fundamental</Nav.Link>
              <Nav.Link href="/tips">Tips</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavBar;
