import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../img/logo.png";
import CartWidget from "../cart/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar id="navBg" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Link to={`/`}>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Gabilidades logo"
              />
            </Navbar.Brand>
          </Link>
          <Link to={`/`}><Navbar.Brand href="#home">GABILIDADES</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#features">Inicio</Nav.Link>
              <Nav.Link href="#pricing">Nosotros</Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pulseras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Tobilleras
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Collares</NavDropdown.Item>
              </NavDropdown>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
