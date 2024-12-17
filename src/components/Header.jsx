import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // Function to check if the token is expired
  function isTokenExpired(token) {
    try {
      // Assuming token is a JWT token, split and decode the payload
      const decoded = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
      return decoded.exp * 1000 < Date.now(); // Return true if the token has expired
    } catch (e) {
      return true; // If decoding fails or token structure is invalid, treat it as expired
    }
  }

  // Get the token from localStorage
  const token = localStorage.getItem('authToken');

  // Check if the token exists and if it's expired
  const isAuthenticated = token && !isTokenExpired(token);

  const handleLogout = () => {
    try {
      // Remove token from localStorage on logout
      localStorage.removeItem('authToken');
      console.log('Token removed from localStorage');
    } catch (error) {
      console.error('Error removing token from localStorage', error);
    }

    // Redirect to the login page after logging out
    navigate('/login');
  };

  // If the token is expired or missing, automatically log the user out
  if (!isAuthenticated && token) {
    // Token is expired or missing, so log the user out
    handleLogout();
  }

  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: 'white' }}>PinoyFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/profile" style={{ color: 'white' }}>Profile</Nav.Link>
            <NavDropdown
              title={<span style={{ color: 'white' }}>Inventory</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3" style={{ color: 'white' }}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={{ color: 'white' }}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{ color: 'white' }}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* Conditionally render the Sign Up and Logout links */}
            {!isAuthenticated ? (
              <>
                <Nav.Link as={NavLink} to="/signup" style={{ color: 'white' }}>
                  Sign Up
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login" style={{ color: 'white' }}>
                  Login
                </Nav.Link>
              </>
            ) : (
              <Nav.Link href="#" style={{ color: 'white' }} onClick={handleLogout}>
                Logout
              </Nav.Link>
            )}
          </Nav>

          <Form className="d-flex bg-black" style={{ border: '1px solid black' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ border: '1px solid black' }}
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
