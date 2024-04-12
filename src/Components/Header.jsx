import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/hotel.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <Navbar key="sm" expand="md" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="onTap m-0">
                        <img src={logo} alt="logo Rolling Hotel" width="50px" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-md`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                        className="text-ligth"
                    >
                        <Offcanvas.Header
                            closeButton="white"
                            className="bg-dark text-light"
                        >
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-md`}
                            >
                                Rolling Hotel
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="bg-dark text-light">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link>
                                    <Link
                                        to="/"
                                        className="text-decoration-none text-light"
                                    >
                                        Inicio
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link
                                        to="/habitaciones"
                                        className="text-decoration-none text-light"
                                    >
                                        Habitaciones
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link
                                        to="/quienessomos"
                                        className="text-decoration-none text-light"
                                    >
                                        Quienes somos
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link
                                        to="/novedades"
                                        className="text-decoration-none text-light"
                                    >
                                        Novedades
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link
                                        to="/contacto"
                                        className="text-decoration-none text-light"
                                    >
                                        Contacto
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link
                                        to="/Login"
                                        className="text-decoration-none text-light"
                                    >
                                        Login
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link
                                        to="/admin"
                                        className="text-decoration-none text-light"
                                    >
                                        Administrador
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
