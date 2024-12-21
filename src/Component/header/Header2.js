import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Dropdown, DropdownButton, Button
} from "react-bootstrap";
import { Sun, Moon ,HouseDoor } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import "../header/header2.css";

const Header2 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark", !darkMode);
    document.body.classList.toggle("text-light", !darkMode);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  })

  // sticky Header 
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
      header.classList.remove('is-sticky')
  }




  return (

    <header className="header-section">
      <Container>

        <Navbar expand="lg" className="p-0">
          {/* Logo Section  */}
          <Navbar.Brand>
          <HouseDoor size={30} className="me-2" style={{ color: "#4D869C" }} />
            <NavLink to="/"> AssiutStay</NavLink>
          </Navbar.Brand>
          {/* End Logo Section  */}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/*mobile Logo Section  */}
            <Offcanvas.Header>
              <h1 className="logo">AssiutStay</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            {/*end mobile Logo Section  */}

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" >
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/" >
                  ABOUT US
                </NavLink>
                {/* <NavLink className="nav-link" to="/" >
                    TOURS
                  </NavLink> */}

                <NavDropdown
                  title="PAGES"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >


                  <NavLink className="nav-link text-dark" to="/" >
                    STAFF
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/" >
                    POPULAR ACTIVTES
                  </NavLink>


                </NavDropdown>
                {/* <NavLink className="nav-link" to="/" >
                    GALLERY
                  </NavLink> */}
                <NavLink className="nav-link" to="/" >
                  CONTACT
                </NavLink>

                

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <div className="icon d-flex">
            <Button
                    variant="outline-light"
                    onClick={toggleDarkMode}
                    size="sm"
                    className="me-3"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: darkMode ? '#f1f1f1' : '#000'
                    }}
            
                  >
                    {darkMode ? <Sun size={16} color="black" /> : <Moon size={16} color="black" />}
                  </Button>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={selectedLanguage}
                    variant="outline-white"
                    size="sm"
                    className="me-3 "
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none'
                    }}
                  >
                    <Dropdown.Item onClick={() => handleLanguageChange("EN")} style={{ color: 'black' }}>
                      EN
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLanguageChange("AR")} style={{ color: 'black' }}>
                      AR
                    </Dropdown.Item>
                  </DropdownButton>
          </div>

          <div className="ms-md-4 ms-2">
            <NavLink className="primaryBtn d-none d-sm-inline-block">
              Book Now
            </NavLink>
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>
        </Navbar>

      </Container>
    </header>
  );
};

export default Header2;