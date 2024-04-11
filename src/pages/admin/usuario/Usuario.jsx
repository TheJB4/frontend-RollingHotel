import Table from "react-bootstrap/Table";
import Item from "./Item";
import { useState, useEffect } from "react";
import { getUsuarios } from "../../../helpers/queries";
import { FaUser } from "react-icons/fa";

function Administrador() {
    const [usuarios, setUsuarios] = useState([]);
    const obtenerUsuarios = async () => {
        const res = await getUsuarios();
        if (res.ok) {
            const data = await res.json();
            setUsuarios(data);
        }
    };

    useEffect(() => {
        obtenerUsuarios();
    }, []);
    return (
        <div className="grow">
            <div className="bg-secondary py-5">
                <h1 className="display-1 text-light text-center title">
                    <span>
                    <FaUser />
                    </span>
                    Usuarios
                </h1>
            </div>
            <div className="px-1 py-4 px-md-4">
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
                            <th>telefono</th>
                            <th>estado</th>
                            <th>rol</th>
                            <th>opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!usuarios.length ? (
                            <tr>
                                <td colSpan={7} className="text-danger">
                                    No hay habitaciones cargadas
                                </td>
                            </tr>
                        ) : (
                            usuarios.map((item) => {
                                return (
                                    <Item
                                        usuario={item}
                                        key={item._id}
                                        setUsuarios={setUsuarios}
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

export default Administrador;
