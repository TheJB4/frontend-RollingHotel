import Table from "react-bootstrap/Table";
import Item from "../Item";
import { FiFilePlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getHabitaciones } from "../../../helpers/queries";

function Habitacion() {
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
        <div className="grow">
            <div className="bg-naranja py-5">
                <h1 className="display-1 text-light text-center title">
                    Administrador
                </h1>
            </div>
            <div className="px-1 py-4 px-md-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="my-0 fw-bold">Habitaciones</h1>
                    <Link
                        to="/admin/habitacion/alta"
                        className="btn btn-naranja"
                    >
                        <FiFilePlus />
                    </Link>
                </div>
                <hr />
                <Table
                    hover
                    responsive
                    className="shadow overflow-x-hidden align-middle text-center"
                >
                    <thead className="table-secondary">
                        <tr>
                            <th>nro</th>
                            <th>disponible</th>
                            <th>precio</th>
                            <th>descripcion</th>
                            <th>opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!habitaciones.length ? (
                            <tr>
                                <td colSpan={5} className="text-danger">
                                    No hay habitaciones cargadas
                                </td>
                            </tr>
                        ) : (
                            habitaciones.map((item) => {
                                return (
                                    <Item
                                        habitacion={item}
                                        key={item._id}
                                        setHabitaciones={setHabitaciones}
                                    />
                                );
                            })
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Habitacion;
