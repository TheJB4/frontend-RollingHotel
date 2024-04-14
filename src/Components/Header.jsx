import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/hotel.svg";
import { Link } from "react-router-dom";
import { MdLocalHotel } from "react-icons/md";
import Swal from "sweetalert2";

function Header({ loggedUser, setUserLogged, path }) {
    const logout = () => {
        Swal.fire({
            title: "Estas seguro que deseas cerrar sesion?",
            icon: "warning",
            showCancelButton: true,
            background: "#1c1c21",
            iconColor: "#534ff2",
            color: "#fff",
            confirmButtonColor: "#3c3ab4",
            cancelButtonColor: "#f17676",
            confirmButtonText: "Cerrar sesion",
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem("usuario");
                setUserLogged("");
            }
        });
    };
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
                                {path !== "/admin" ? (
                                    <>
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
                                        {!loggedUser.email ? (
                                            <Link
                                                to="/login"
                                                className="text-decoration-none text-light btn btn-outline-naranja px-lg-4 rounded-0"
                                            >
                                                ingresar
                                            </Link>
                                        ) : (
                                            <Link
                                                to="/admin"
                                                className="text-decoration-none btn btn-blue rounded-0 px-4"
                                            >
                                                admin panel
                                            </Link>
                                        )}
                                    </>
                                ) : !loggedUser.email ? (
                                    <Link
                                        to="/login"
                                        className="text-decoration-none text-light btn btn-outline-naranja px-lg-4 rounded-0"
                                    >
                                        ingresar
                                    </Link>
                                ) : (
                                    <>
                                        <button
                                            className="btn btn-danger rounded-0"
                                            onClick={logout}
                                        >
                                            salir
                                        </button>
                                    </>
                                )}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
