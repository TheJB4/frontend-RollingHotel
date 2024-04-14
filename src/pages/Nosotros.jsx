import { Container } from "react-bootstrap";
import staff from "../assets/staff.webp";
import perfil from "../assets/perfil.jpeg";
import { GoArrowDown } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nosotros() {
    return (
        <Container fluid className="grow px-0">
            <div className="bg-dark py-5">
                <h1 className="display-1 text-light text-center title">
                    Nosotros
                </h1>
            </div>
            <div className="d-flex align-items-stretch max-h">
                <div className="bg-special-blue arrow w-50 d-flex align-items-center justify-content-center">
                    <span className="fs-72 text-light">
                        <GoArrowDown />
                    </span>
                </div>
                <div className="about">
                    <img
                        src={staff}
                        alt="foto de staff codeando"
                        className="img-fluid object-fit-cover h-500"
                    />
                </div>
            </div>
            <div className="py-5">
                <h2 className="fw-bold text-center display-2">
                    Staff de Rolling Hotel
                </h2>
                <div className="container-fluid mt-5">
                    <div className="row flex-column flex-md-row justify-content-center gap-4">
                        <div className="col text-center">
                            <img
                                src={perfil}
                                alt="foto Joaquin Medina"
                                className="img-fluid rounded-circle"
                                width="200px"
                            />
                            <p className="fw-bold display-6 mt-3">
                                Joaquin Medina
                            </p>
                            <div className="fs-3">
                                <Link
                                    to="https://github.com/cacho-medina"
                                    className="mx-2 text-special-blue"
                                >
                                    <FaGithub />
                                </Link>
                                <Link
                                    to="https://linkedin.com/in/joaquin-medina22"
                                    className="mx-2 text-special-blue"
                                >
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div>
                        <div className="col text-center">
                            <img
                                src={perfil}
                                alt="foto Joaquin Medina"
                                className="img-fluid rounded-circle"
                                width="200px"
                            />
                            <p className="fw-bold display-6 mt-3">
                                Juan Mercado
                            </p>
                            <div className="fs-3">
                                <Link to="#" className="mx-2 text-special-blue">
                                    <FaGithub />
                                </Link>
                                <Link to="#" className="mx-2 text-special-blue">
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Nosotros;
