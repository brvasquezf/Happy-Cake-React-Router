import { Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigations = () => {
  return (
    // <Navbar bg='dark' variant='dark' expand='lg'>
    //     <Navbar.Toggle aria-controls='basic-navbar-nav' /> 
    //     <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="me-auto">
    //       <Nav.Link as={Link} to="/home" className="text-white">
    //         Home
    //       </Nav.Link>
    //       <Nav.Link as={Link} to="/contact" className="text-white">
    //         Contact
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
        
    // </Navbar>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/assets/react.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Happy Cake
          </Navbar.Brand>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigations