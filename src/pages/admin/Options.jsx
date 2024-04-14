import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Options({ type, borrar, id }) {
    return (
        <div className="d-flex gap-1">
            <Button variant="danger" onClick={borrar}>
                <FaTrashAlt />
            </Button>
            <Link
                to={`/admin/${type}/actualizar/${id}`}
                className="btn btn-secondary border"
            >
                <FiEdit />
            </Link>
        </div>
    );
}

export default Options;
