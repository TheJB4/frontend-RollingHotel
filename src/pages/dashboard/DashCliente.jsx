import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cargar from "../admin/reserva/Cargar";

function DashCliente() {
    const name = JSON.parse(sessionStorage.getItem("usuario")).nombre;
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Cargar show={modalShow} onHide={() => setModalShow(false)} />
            <div className="grow">
                <div className="bg-blue-grey py-5">
                    <h1 className="display-1 text-dark text-center title">
                        <span>
                            <FaUser />
                        </span>{" "}
                        Dashboard
                    </h1>
                </div>
                <div className="py-5 px-1">
                    <h2 className="fw-bold display-4 mb-4"> Hola {name}!</h2>
                    <div className="container text-center py-4">
                        <div className="py-2 row gap-4 gap-md-5 justify-content-center">
                            <div className="col-12 col-md-5 px-2 rounded py-5 bg-outline-special-blue d-flex flex-column align-items-center p-2 text-special-blue">
                                <p className="fw-bold fs-3 text-decoration-underline">
                                    Mis reservas
                                </p>
                                <Link
                                    className="btn btn-blue fw-bold px-4 rounded-0"
                                    to="/panel/mis-reservas"
                                >
                                    Ver mas...
                                </Link>
                            </div>
                            <div className="col-12 col-md-5 px-2 rounded py-5 bg-outline-naranja d-flex flex-column justify-content-center align-items-center p-2 text-light">
                                <p className="fw-bold fs-3 text-decoration-underline">
                                    Nueva reserva
                                </p>
                                <button
                                    onClick={() => setModalShow(true)}
                                    className="btn btn-naranja fw-bold px-4 rounded-0"
                                >
                                    Reservar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-beige px-2 py-5 p-md-5 d-flex flex-column justify-content-center text-center gap-4 flex-md-row justify-content-md-evenly">
                    <h2 className="fw-bold m-0 fs-3">Tenes alguna duda?</h2>
                    <Link
                        to="/contacto"
                        className="btn w-250 mx-auto mx-md-0 btn-dark rounded-0 fw-bold fs-20"
                    >
                        Contactanos
                    </Link>
                </div>
            </div>
        </>
    );
}

export default DashCliente;
