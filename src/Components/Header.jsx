import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <Navbar key="sm" expand="md" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#" className="text-light">
                        Rolling Hotel
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-sm`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                        className="text-ligth"
                    >
                        <Offcanvas.Header
                            closeButton="white"
                            className="bg-dark text-light"
                        >
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-sm`}
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
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
