import "./navbarheader.css";
import Container from 'react-bootstrap/Container';
import CartWidget from './cartwidget/CartWidget'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarHeader() {
    return (
        <div>
             <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">ChocoSugar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#products">Productos</Nav.Link>
                        <Nav.Link href="#about">Nosotros</Nav.Link>
                        <Nav.Link href="#contact">Contactos</Nav.Link>
                        <Nav.Link href="#cart">Ir al Carrito</Nav.Link>
                        <CartWidget/>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarHeader