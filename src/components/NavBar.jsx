import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBarStyle.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';



export const NavBar = () => {
  return (
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <div className='firstNav'>
          <img className='logo' src={logo} alt='' />
          <h1  className='slogan'>Tetería y Pastelería </h1>
        </div>
        <div className='secondNav'>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as ={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as ={Link} to="/menu">Nuestras té-licias</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
