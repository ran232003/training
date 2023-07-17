import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/apiAssignment">
              apiAssignment
            </Nav.Link>
            <NavDropdown title="Weather" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/weatherHome">
                Home
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/weatherFavorites">
                Favorites
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/NestedDropDown">
              NestedDropDown
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
