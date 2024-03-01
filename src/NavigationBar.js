import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authAction } from "./store/authUserSlice";
import { apiCall } from "./pages/auth/apiCall";
import { authDeleteUserURL } from "./pages/weather/urls";
import { loadingAction } from "./store/loadingData";

function NavigationBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.auth.user;
  });
  const handleOut = async () => {
    dispatch(loadingAction.toggleLoading(true));
    const data = await apiCall("DELETE", authDeleteUserURL);
    console.log(data);
    if (data.status === "ok") {
      dispatch(authAction.setUser(null));
    }
    dispatch(loadingAction.toggleLoading(false));
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
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
            <Nav.Link as={Link} to="/auth/login">
              Auth
            </Nav.Link>
            {user ? (
              <Nav.Link as={Link} to="/auth/login" onClick={handleOut}>
                Sign Out
              </Nav.Link>
            ) : null}
            <NavDropdown title="Files" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/upload">
                Upload
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/download">
                Download
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/google">
              Google Maps
            </Nav.Link>
            <Nav.Link as={Link} to="/calculator">
              Calculator
            </Nav.Link>
            <Nav.Link as={Link} to="/todoList">
              ToDo List
            </Nav.Link>
            <Nav.Link as={Link} to="/video">
              Video
            </Nav.Link>
            <Nav.Link as={Link} to="/FormQuestions">
              FormQuestions
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
