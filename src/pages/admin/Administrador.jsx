import Table from "react-bootstrap/Table";
//import Item from "./Item";
import { FiFilePlus } from "react-icons/fi";
import { Link } from "react-router-dom";

/* const habitaciones = [
    {

    }
] */

function Administrador() {
    return (
        <div>
            <div className="bg-naranja py-5">
                <h1 className="display-1 text-light text-center title">
                    Administrador
                </h1>
            </div>
            <div className="px-1 py-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="my-0 fw-bold">Habitaciones</h1>
                    <Link
                        to="/admin/habitacion/crear"
                        className="btn btn-naranja"
                    >
                        <FiFilePlus />
                    </Link>
                </div>
                <hr />
                <Table
                    hover
                    responsive
                    className="rounded-1 shadow overflow-x-hidden align-middle text-center"
                >
                    <thead className="table-secondary">
                        <tr>
                            <th>nro</th>
                            <th>disponible</th>
                            <th>precio</th>
                            <th>imagen</th>
                            <th>descripcion</th>
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
