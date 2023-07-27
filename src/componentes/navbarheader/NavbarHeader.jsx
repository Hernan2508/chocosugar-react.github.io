import "./navbarheader.css";
import Container from 'react-bootstrap/Container';
import CartWidget from '../cartwidget/CartWidget'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from "react-router-dom";


function NavbarHeader() {
    return (
        <div>
             <Navbar expand="lg" className="bg-body-tertiary">
                <Container className="contenedor-navbar">
                    <Link to='/'><img className= "logo" src="../src/assets/LogoGeneral.png" alt="Logotipo-Chico-Ingesmart"></img></Link>
                    <Link className= "logo-name" to='/'>ChocoSugar</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navegador">
                        <Link to='/'>Home</Link>
                        <NavLink to={`/category/Tortas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tortas</NavLink>
                        <NavLink to={`/category/Galletas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Galletas</NavLink>
                        <NavLink to={`/category/Cupcakes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cupcakes</NavLink>
                        <NavLink href="#cart">Ir al Carrito</NavLink>
                        <CartWidget/>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarHeader