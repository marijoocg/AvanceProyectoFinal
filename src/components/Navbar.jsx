import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'

function BasicExample() {
    const logo="https://cdn-icons-png.flaticon.com/512/201/201623.png"
    const user="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png";
  return (
    <Navbar bg="#69BFAF" expand="lg">
      <Container>
       <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> {' '}
        </Navbar.Brand>
        <Navbar.Brand href="MainPage">Travel Agency</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="MainPage">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="Flight">Flights</NavDropdown.Item>
              <NavDropdown.Item href="#Hotel">Hotels</NavDropdown.Item>
              <NavDropdown.Item href="History">Reservations</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Brand>
                <img
                    src={user}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"  
                />
            </Navbar.Brand>
            <Nav.Link href="Login">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;