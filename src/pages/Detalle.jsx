import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { getHabitacionById } from "../helpers/queries";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaBath } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoSnowSharp } from "react-icons/io5";
import { MdOutlineSignalWifi4Bar } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";

function Detalle() {
    const { id } = useParams();
    const [habitacion, setHabitacion] = useState([]);
    const obtenerHabitacion = async () => {
        const res = await getHabitacionById(id);
        if (res.ok) {
            const data = await res.json();
            setHabitacion(data);
        } else {
            Swal.fire({
                title: "ERROR!",
                text: `la habitacion no existe!`,
                icon: "error",
            });
        }
    };

    useEffect(() => {
        obtenerHabitacion();
    }, []);
    return (
        <Container fluid className="px-0 grow">
            <div className="bg-blue-transparent py-5">
                <h1 className="display-1 text-dark text-center fw-bold">
                    Habitacion {habitacion.numero}
                </h1>
            </div>
            <div className="container">
                <div className="d-flex flex-column pt-4 py-md-5 flex-md-row gap-md-5 justify-content-md-evenly">
                    <div>
                        <img
                            src={habitacion.imagen}
                            alt={`foto de habitacion ${habitacion.numero}`}
                            className="img-fluid w-500 shadow-beige"
                        />
                    </div>
                    <div className="py-4">
                        <h2 className="fw-bold text-decoration-underline mb-4">
                            Instalaciones
                        </h2>
                        <p>
                            <span>
                                <PiTelevisionSimpleFill />
                            </span>{" "}
                            Tv por cable
                        </p>
                        <p>
                            <span>
                                <FaBath />
                            </span>{" "}
                            Baño privado
                        </p>
                        <p>
                            <span>
                                <BsFillTelephoneFill />
                            </span>{" "}
                            Telefono
                        </p>
                        <p>
                            <span>
                                <IoSnowSharp />
                            </span>{" "}
                            Aire acondicionado
                        </p>
                        <p>
                            <span>
                                <MdOutlineSignalWifi4Bar />
                            </span>{" "}
                            Wifi
                        </p>
                        <p>
                            <span>
                                <MdFreeBreakfast />
                            </span>{" "}
                            Desayuno
                        </p>
                    </div>
                </div>
                <hr className="m-0" />
                <div className="container py-4 px-0 px-lg-5">
                    <h2 className="fw-bold text-decoration-underline mb-4">
                        Descripcion
                    </h2>
                    <p className="text-wrap">{habitacion.descripcion}</p>
                    <p>
                        <span className="fw-bold">camas:</span>{" "}
                        {habitacion.camas}
                    </p>
                    <p>
                        <span className="fw-bold">precio:</span> $
                        {habitacion.precio}
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default Detalle;
