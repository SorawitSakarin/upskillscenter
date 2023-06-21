import React, { useContext, useState, useRef, useEffect } from "react";
import Logo from "/upskillscenter.png";
import NavBarBlockModal from "../../components/modals/NavBarBlockModal";
import SignoutModal from "../../components/modals/SignoutModal";
import { AuthContext } from "../../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import downArrow from "../../assets/icons/24_24 px/Default-1.svg";
import upArrow from "../../assets/icons/24_24 px/Default-25.svg";
import profileLogo from "../../assets/icons/24_24 px/Default-22.svg";
import dashboardLogo from "../../assets/icons/24_24 px/Default-23.svg";
import logoutLogo from "../../assets/icons/24_24 px/Default-24.svg";
import "./Navbar.css";

const NavBarSchool: React.FC = () => {
  const auth = useContext(AuthContext);
  const fullName = "John Doe";
  const navigate = useNavigate();

  const [showSignout, setShowSignout] = useState(false);
  const handleCloseSignOut = () => setShowSignout(false);
  const handleSignOut = () => {
    auth.logout();
    handleCloseSignOut();
  };
  const toggleOpenDropdown = () => setIsOpenDropdown(!isOpenDropdown);

  const currentLocation = useLocation().pathname.split("/")[1]; // Current location
  const blockPathArray = ["posttest", "pretest"]; // Location path which show block modal when click
  const noNavBarPathArray = ["login", "personalinformation"]; // Location path which does not show Navbar
  const noNavBarPath = noNavBarPathArray.includes(currentLocation); //true or false

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutsideDropdown = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  const [showBlockModal, setShowBlockModal] = useState(false);
  const [nextPath, setNextPath] = useState("");

  const goToThisPage = (path: string) => {
    if (blockPathArray.includes(currentLocation)) {
      setNextPath(path);
      setIsOpenDropdown(false);
      setShowBlockModal(true);
    } else {
      navigate(path);
      setIsOpenDropdown(false);
    }
  };

  return (
    <div style={{ boxShadow: "1px 1px 10px grey" }}>
      {!noNavBarPath && (
        <nav className="navbar">
          <div></div>
          <div className="navbar-left">
            <div onClick={() => goToThisPage("/home")} className="logo " >
              <img src={Logo} alt="Logo-school" style={{ width: "48px" }} />
            </div>
            <div  onClick={() => goToThisPage("/fundamental")} className={`navbar-link ${currentLocation === "fundamental" ? "link-active" : ""}`}>
              <h2>Fundamental</h2>
            </div>
            <div  onClick={() => goToThisPage("/tips")} className={`navbar-link ${currentLocation === "tips" ? "link-active" : ""}`}>
              <h2>Tips & Technique</h2>
            </div>
            <div  onClick={() => goToThisPage("/exam")} className={`navbar-link ${currentLocation === "exam" ? "link-active" : ""}`}>
              <h2>Exam</h2>
            </div>
          </div>
          <div className="navbar-right">
            <div  onClick={() => goToThisPage(`/profile`)} className={`navbar-link ${currentLocation === "profile" ? "link-active" : ""}`}>
              <h2>{fullName}</h2>
            </div>
            
            <div ref={ref}>
              <button onClick={toggleOpenDropdown}>
                {isOpenDropdown ? (
                  <img src={upArrow} alt="downarrow" width={24} />
                ) : (
                  <img src={downArrow} alt="uparrow" width={24} />
                )}
              </button>
              {isOpenDropdown && (
                <div className={`dropdown-items`}>
                  <div>
                    <img src={profileLogo} alt="profile" width={16} />
                    <button  onClick={() => goToThisPage(`/profile`)}>
                      Profile
                    </button>
                  </div>
                  <div>
                    <img src={dashboardLogo} alt="dashboard" width={16} />
                    <button  onClick={() => goToThisPage(`/dashboard`)}>
                      Dashboard
                    </button>
                  </div>
                  <div>
                    <img src={logoutLogo} alt="logout" width={16} />
                    <button onClick={() => setShowSignout(true)}>Logout</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div></div>
          <SignoutModal
            show={showSignout}
            onHide={handleCloseSignOut}
            onSignOut={handleSignOut}
          />
          <NavBarBlockModal
            showBlockModal={showBlockModal}
            setShowBlockModal={setShowBlockModal}
            setNextPath={setNextPath}
            nextPath={nextPath}
          />
        </nav>
      )}
    </div>
  );
};

export default NavBarSchool;
