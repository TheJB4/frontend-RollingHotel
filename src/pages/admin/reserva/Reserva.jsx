import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getReservas } from "../../../helpers/queries";
import Item from "./Item";
import Cargar from "./Cargar";

function Reserva() {
    const [modalShow, setModalShow] = useState(false);
    const [reservas, setReservas] = useState([]);
    const obtenerReservas = async () => {
        const res = await getReservas();
        if (res.ok) {
            const data = await res.json();
            setReservas(data);
        }
    };
    useEffect(() => {
        obtenerReservas();
    }, []);
    return (
        <>
            <Cargar
                show={modalShow}
                onHide={() => setModalShow(false)}
                obtenerReservas={obtenerReservas}
            />
            <div className="grow">
                <div className="bg-danger py-5">
                    <h1 className="display-1 text-light text-center title">
                        Reservas
                    </h1>
                </div>
                <div className="container px-1 py-4 px-md-4">
                    <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                        <Button
                            variant="danger"
                            onClick={() => setModalShow(true)}
                            className="fw-bold"
                        >
                            Nueva Reserva
                        </Button>
                    </div>
                    <hr />
                    <Table
                        hover
                        responsive
                        className="shadow overflow-x-hidden align-middle text-center"
                    >
                        <thead className="table-secondary">
                            <tr>
                                <th>detalles</th>
                                <th>opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!reservas.length ? (
                                <tr>
                                    <td colSpan={2} className="text-danger">
                                        No hay reservas registradas
                                    </td>
                                </tr>
                            ) : (
                                reservas.map((item) => {
                                    return (
                                        <Item
                                            reserva={item}
                                            key={item._id}
                                            setReservas={setReservas}
                                        />
                                    );
                                })
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Reserva;
