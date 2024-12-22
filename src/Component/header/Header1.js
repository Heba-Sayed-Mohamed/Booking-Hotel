// import React, { useState } from "react";
// import { Dropdown, DropdownButton, Container, Navbar, Nav, Button } from "react-bootstrap";
// import { Facebook, Instagram, Twitter, Sun, Moon } from "react-bootstrap-icons";

// function Header1() {
//   const [darkMode, setDarkMode] = useState(false); 
//   const [selectedLanguage, setSelectedLanguage] = useState("EN");

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("bg-dark", !darkMode); 
//     document.body.classList.toggle("text-light", !darkMode); 
//   };

//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//   };

//   return (
//     <Navbar
//       expand="lg"
//       style={{ backgroundColor: "#1b212c", borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px", marginBottom: "50px" }} 
//       className="py-2"
//     >
//       <Container>
//         <Navbar.Brand href="#" style={{ color: "#ffffff" }}> 
//           Book Your Stay
//         </Navbar.Brand>
//         <Nav className="ms-auto d-flex align-items-center">
//           <Button
//             variant="outline-light"
//             onClick={toggleDarkMode}
//             size="sm"
//             className="me-3"
//           >
//             {darkMode ? <Sun size={16} /> : <Moon size={16} />}
//           </Button>
         
//           <DropdownButton
//             id="dropdown-basic-button"
//             title={selectedLanguage}
//             variant="outline-light"
//             size="sm"
//             className="me-3"
//           >
//             <Dropdown.Item onClick={() => handleLanguageChange("EN")}>
//               EN
//             </Dropdown.Item>
//             <Dropdown.Item onClick={() => handleLanguageChange("AR")}>
//               AR
//             </Dropdown.Item>
//           </DropdownButton>

//           <Nav.Link href="#" style={{ color: "#ffffff" }}>
//             <Facebook size={16} />
//           </Nav.Link>
//           <Nav.Link href="#" style={{ color: "#ffffff" }} className="mx-2">
//             <Instagram size={16} />
//           </Nav.Link>
//           <Nav.Link href="#" style={{ color: "#ffffff" }}>
//             <Twitter size={16} />
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header1;
import React, { useState } from "react";
import { Dropdown, DropdownButton, Container, Navbar, Nav, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Sun, Moon } from "react-bootstrap-icons";

function Header1() {
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

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#1b212c", borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px", marginBottom: "50px" }} 
      className="py-2"
    >
      <Container>
        <Navbar.Brand href="#" style={{ color: "#ffffff" }}> 
          Book Your Stay
        </Navbar.Brand>

        {/* زر الطي في الشاشات الصغيرة */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Button
              variant="outline-light"
              onClick={toggleDarkMode}
              size="sm"
              className="me-3"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
           
            <DropdownButton
              id="dropdown-basic-button"
              title={selectedLanguage}
              variant="outline-light"
              size="sm"
              className="me-3"
            >
              <Dropdown.Item onClick={() => handleLanguageChange("EN")}>
                EN
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguageChange("AR")}>
                AR
              </Dropdown.Item>
            </DropdownButton>

            <Nav.Link href="#" style={{ color: "#ffffff" }}>
              <Facebook size={16} />
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "#ffffff" }} className="mx-2">
              <Instagram size={16} />
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "#ffffff" }}>
              <Twitter size={16} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header1;
