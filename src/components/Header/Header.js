import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // alert("Click to navigate login page");
    navigate("/login");
  }

  const handleRegister = () => {
    navigate("/register");
  }
  return (
    <div className="header-container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* <Navbar.Brand href="#home">Tommy</Navbar.Brand> */}
          <NavLink to="/" className="navbar-brand">Tommy</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/users" className="nav-link">User</NavLink>
              <NavLink to="/admins" className="nav-link">Admin</NavLink>
              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/users">User</Nav.Link>
              <Nav.Link href="/admins">Admin</Nav.Link> */}
            </Nav>
            <Nav>
              <button className='btn-login' onClick={() => handleLogin()}>Log in</button>
              <button className='btn-signup'onClick={() => handleRegister()} >Sign up</button>
              {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item>Log in</NavDropdown.Item>
                <NavDropdown.Item>Log out</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
