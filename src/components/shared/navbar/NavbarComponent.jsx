import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Trading XM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Link 1</Nav.Link>
            <Nav.Link href="#features">Link 2</Nav.Link>
            <Nav.Link href="#pricing">Link 3</Nav.Link>
            <Nav.Link href="#home">Link 4</Nav.Link>
            <Nav.Link href="#features">Link 5</Nav.Link>
            <Nav.Link href="#pricing">Link 6</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBarComponent;