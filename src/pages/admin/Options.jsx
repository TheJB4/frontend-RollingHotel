import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Options({ borrarHabitacion, id }) {
    return (
        <div className="d-flex gap-1">
            <Button variant="danger" onClick={borrarHabitacion}>
                <FaTrashAlt />
            </Button>
            <Link
                to={`/admin/habitacion/actualizar/${id}`}
                className="btn btn-secondary border"
            >
                <FiEdit />
            </Link>
        </div>
    );
}

export default Options;
