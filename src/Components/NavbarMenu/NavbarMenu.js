import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarMenu.css";


const NavbarMenu = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // const [size, setsize] = useState(false)
  // const changeSize = () => {
  //     if(window.scrollY >= 95) {
  //         setsize(true)
  //     } else {
  //         setsize(false)
  //     }
  // }
  // window.addEventListener("scroll", changeSize);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="Navbar-menu shadow"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            eventkey={2}
            className={
              "navbar-logo img navbar-logo-size img"
            }
          >
            <img src="images/logon.png" alt="dental clinic logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleClick}
          >
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              style={{ color: "black", transform: "Scale(1.3)" }}
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" eventKey={2} onClick={closeMobileMenu}>
                <i className="fas fa-home"></i>
              </Nav.Link>
              <NavDropdown title="GENERAL" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/Cleaning-and-Exam-of-teeth"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Cleanings & Exams{" "}
                  <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/WhiteFilling"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  {" "}
                  White Fillings <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/dental-emergency-care"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Emergency Care <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/root-canal-treatment-dentist"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  {" "}
                  Root Canals <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/ProcelainCrown-of-teeth"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Porcelain Crowns <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/Holistic-dentistry-of-teeth"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Holistic Dentistry{" "}
                  <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="COSMETIC" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/Teeth-Whitening-dentist"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Teeth whitening <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/Dental-veneer"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Dental Veneers <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/Dental-crown"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Dental Crown <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  as={Link}
                  to="/inlays-onlays-cosmetic-treatment"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Inlays & Onlays <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/Dental-Implant-of-cosmetic-dentistry"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Dental Implants<i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/dental-bonding-of-teeth"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Dental Bonding <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="SURGICAL" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/root-canal-therapy-of-teeth"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Root canal therapy{" "}
                  <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/wisdom-tooth-extraction"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Wisdom tooth extraction{" "}
                  <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/Dental-Implant-of-cosmetic-dentistry"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Dental Implants <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/reconstructive-procedure-of-surgical-dentist"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Reconstructive procedures{" "}
                  <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="KIDS DENTISTRY" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/tooth-color-filling-of-teeth"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Tooth Colored Filling{" "}
                  <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/kids-dentist-teeth-cleaning"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Cleaning & Prevention{" "}
                  <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/kids-tooth-extraction"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Extraction <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/kids-sealant"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Sealants <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/Emergencies-of-kids"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Emergencies <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#review" onClick={closeMobileMenu}>
                REVIEWS
              </Nav.Link>
              <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/videos-of-maxillofacial-clinic"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Our Video <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/photo-gallery"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  Photo Gallery <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#doctor"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  About Doctor <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  eventKey={2}
                  onClick={closeMobileMenu}
                >
                  About Clinic <i className="fas fa-arrow-circle-right"></i>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/Book-online"
                eventKey={2}
                onClick={closeMobileMenu}
                className="bookonline-btn"
              >
                BOOK ONLINE
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
