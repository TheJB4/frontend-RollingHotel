import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/hotel.svg";
import { Link } from "react-router-dom";
import { MdLocalHotel } from "react-icons/md";

function Header() {
    return (
        <>
            <Navbar key="sm" expand="md" bg="dark" data-bs-theme="dark">
                <Container fluid>
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
                                <span>
                                    <MdLocalHotel />
                                </span>{" "}
                                Rolling Hotel
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="bg-dark">
                            <Nav className="ms-auto text-center align-items-center gap-4 justify-content-center">
                                <Link
                                    to="/"
                                    className="text-decoration-none text-light"
                                >
                                    Inicio
                                </Link>
                                <NavDropdown
                                    id="dropdown-informacion"
                                    title="Informacion"
                                    menuVariant="dark"
                                    className="text-light"
                                >
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/habitaciones"
                                        className="text-decoration-none text-light"
                                    >
                                        Habitaciones
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/novedades"
                                        className="text-decoration-none text-light"
                                    >
                                        Novedades
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Link
                                    to="/nosotros"
                                    className="text-decoration-none text-light"
                                >
                                    Nosotros
                                </Link>
                                <Link
                                    to="/contacto"
                                    className="text-decoration-none text-light"
                                >
                                    Contacto
                                </Link>
                                <Link
                                    to="/login"
                                    className="text-decoration-none text-light btn btn-outline-naranja px-lg-4"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/admin"
                                    className="text-decoration-none btn btn-blue rounded-0 px-4"
                                >
                                    Administrador
                                </Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
