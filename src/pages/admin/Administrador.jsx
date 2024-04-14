import { Link } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";

function Administrador() {
    const name = JSON.parse(sessionStorage.getItem("usuario")).nombre;
    return (
        <div className="grow container-fluid px-0">
            <div className="bg-naranja py-5">
                <h1 className="display-1 text-light text-center title">
                    <span>
                        <RiAdminLine />
                    </span>
                    Administrador
                </h1>
            </div>
            <div className="py-4 px-1">
                <h2 className="fw-bold display-4 mb-4"> Hola {name}!</h2>
                <div className="container text-center py-2">
                    <div className="py-2 row gap-2 justify-content-center">
                        <div className="col-12 col-md-4 col-lg-3 px-2 rounded py-4 bg-oscuro d-flex flex-column justify-content-center align-items-center p-2 text-light">
                            <p className="fw-bold fs-3 text-decoration-underline">
                                Usuarios
                            </p>
                            <Link
                                className="btn btn-outline-light fw-bold px-4 rounded-0"
                                to="/admin/usuario"
                            >
                                Ver mas...
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 px-2 rounded py-4 bg-special-blue d-flex flex-column justify-content-center align-items-center p-2 text-light">
                            <p className="fw-bold fs-3 text-decoration-underline">
                                Habitaciones
                            </p>
                            <Link
                                className="btn btn-outline-light fw-bold px-4 rounded-0"
                                to="/admin/habitacion"
                            >
                                Ver mas...
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 px-2 rounded py-4 bg-red d-flex flex-column align-items-center p-2 text-light">
                            <p className="fw-bold fs-3 text-decoration-underline">
                                Reservas
                            </p>
                            <Link
                                className="btn btn-outline-light fw-bold px-4 rounded-0"
                                to="/admin/reserva"
                            >
                                Ver mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Administrador;
