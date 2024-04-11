import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getHabitaciones } from "../../helpers/queries";
import { RiAdminLine } from "react-icons/ri";

function Administrador() {
    const [habitaciones, setHabitaciones] = useState([]);
    const obtenerHabitaciones = async () => {
        const res = await getHabitaciones();
        if (res.ok) {
            const data = await res.json();
            setHabitaciones(data);
        }
    };
    useEffect(() => {
        obtenerHabitaciones();
    }, []);
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
                <h2 className="fw-bold mb-4"> Hola admin!</h2>
                <div className="container text-center py-2">
                    <div className="py-2 row gap-2 justify-content-center">
                        <div className="col-12 col-md-3 col-lg-4 px-2 rounded py-4 bg-secondary d-flex flex-column justify-content-center align-items-center p-2">
                            <p className="fw-bold fs-3">Usuarios</p>
                            <p>1</p>
                            <Link className="btn btn-light" to="/admin/usuario">
                                Ver mas...
                            </Link>
                        </div>
                        <div className="col-12 col-md-3 col-lg-4 px-2 rounded py-4 bg-warning d-flex flex-column justify-content-center align-items-center p-2">
                            <p className="fw-bold fs-3">Habitaciones</p>
                            <p>{habitaciones.length}</p>
                            <Link
                                className="btn btn-light"
                                to="/admin/habitacion"
                            >
                                Ver mas...
                            </Link>
                        </div>
                        <div className="col-12 col-md-3 col-lg-4 px-2 rounded py-4 bg-info d-flex flex-column justify-content-center align-items-center p-2">
                            <p className="fw-bold fs-3">Reservas</p>
                            <p>1</p>
                            <Link className="btn btn-light" to="/admin/reserva">
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
