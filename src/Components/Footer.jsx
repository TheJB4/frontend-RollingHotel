import logo from "../assets/hotel.svg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="text-center text-light fw-bold">
            <div className="bg-dark py-4 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center px-md-5">
                <div>
                    <img src={logo} alt="logo rolling hotel" height="50px" />
                    <p>Rolling Hotel</p>
                </div>
                <div>
                    <h3 className="fw-bold fs-5">Redes Sociales</h3>
                    <div className="d-flex justify-content-center gap-2">
                        <Link
                            to="/redes"
                            className="btn btn-naranja rounded-circle fs-5"
                        >
                            <span>
                                <FaInstagram />
                            </span>
                        </Link>
                        <Link
                            to="/redes"
                            className="btn btn-naranja rounded-circle fs-5"
                        >
                            <span>
                                <FaFacebook />
                            </span>
                        </Link>
                        <Link
                            to="/redes"
                            className="btn btn-naranja rounded-circle fs-5"
                        >
                            <span>
                                <FaWhatsapp />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-naranja-light py-2">
                <small className="fw-bold">
                    © 2024 Todos los derechos reservados
                </small>
            </div>
        </footer>
    );
}

export default Footer;
