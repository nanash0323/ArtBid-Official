import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-black ">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: 'white' }}>PinoyFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="#action2"style={{ color: 'white' }}>Profile</Nav.Link>
            <NavDropdown
            title={<span style={{ color: 'white' }}>Inventory</span>}
            id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3"style={{ color: 'white' }}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4"style={{ color: 'white' }}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"style={{ color: 'white' }}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled style={{ color: 'white' }}>
              Logout
            </Nav.Link>
          </Nav>
            <Form className="d-flex bg-black" style={{ border: '1px solid black' }}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{ border: '1px solid black' }} // Adds black border to the input field
        />
        <Button variant="outline-success" style={{ color: 'white', border: '1px solid black' }}>
          Search
        </Button>
      </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;