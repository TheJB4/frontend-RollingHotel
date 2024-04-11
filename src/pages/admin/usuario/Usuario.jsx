import Table from "react-bootstrap/Table";
import Item from "../Item";
import { FiFilePlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Administrador() {
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
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="my-0 fw-bold">Usuarios</h1>
                </div>
                <hr />
                <Table
                    hover
                    responsive
                    className="rounded-1 shadow overflow-x-hidden align-middle text-center"
                >
                    <thead className="table-secondary">
                        <tr>
                            <th>nombre</th>
                            <th>apellido</th>
                            <th>email</th>
                            <th>rol</th>
                            <th>opciones</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </Table>
            </div>
        </div>
    );
}

export default Administrador;
