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
                    <Link to='/'><img className= "logo" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-chocosugar.appspot.com/o/logo%2FLogoGeneral.png?alt=media&token=7574cd4f-cd90-4d09-9cb3-db862dda6c22" alt="Logotipo-Chico-Ingesmart"></img></Link>
                    <Link className= "logo-name" to='/'>ChocoSugar</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navegador">
                        <Link to='/'>Home</Link>
                        <NavLink to={`/category/Tortas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tortas</NavLink>
                        <NavLink to={`/category/Galletas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Galletas</NavLink>
                        <NavLink to={`/category/Cupcakes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cupcakes</NavLink>
                        <NavLink to="/cart">Ir al Carrito</NavLink>
                        <NavLink style={{textDecoration:'none'}} to="/cart"><CartWidget/></NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarHeader