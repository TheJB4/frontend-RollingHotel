import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Options from "../Options";
import { deleteReserva, getReservas } from "../../../helpers/queries";
import Swal from "sweetalert2";

function DetalleModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Detalles de reserva
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-1 px-md-2">
                <h4 className="fw-bold mb-4">User Id</h4>
                <p>{props.reserva.userId}</p>
                <h4 className="fw-bold mb-4">hab Id</h4>
                <p>{props.reserva.habId || "No hay informacion adicional"}</p>
                <h4 className="fw-bold mb-4">Informacion adicional</h4>
                <p>{props.reserva.informacion || "No hay informacion adicional"}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="danger">
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function Item({ reserva, setReservas }) {
    const [modalShow, setModalShow] = useState(false);

    const borrarReserva = () => {
        Swal.fire({
            title: "Estas seguro de eliminar la reserva?",
            text: "Una vez hecho esto no se puede recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#b3c4c1",
            confirmButtonText: "Eliminar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteReserva(reserva._id);
                if (res.status === 200) {
                    Swal.fire({
                        title: "Reserva eliminada!",
                        text: `La reserva fue eliminada correctamente`,
                        icon: "success",
                    });
                    const res = await getReservas();
                    if (res.status === 200) {
                        const data = await res.json();
                        setReservas(data);
                    }
                } else {
                    Swal.fire({
                        title: "ERROR!",
                        text: `La reserva no se pudo eliminar`,
                        icon: "error",
                    });
                }
            }
        });
    };
    useEffect(() => {}, []);
    return (
        <>
            <DetalleModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                reserva={reserva}
            />
            <tr>
                <td>
                    <Button
                        variant=""
                        onClick={() => setModalShow(true)}
                        className="fw-medium text-decoration-underline"
                    >
                        Ver
                    </Button>
                </td>
                <td className="d-flex align-items-center justify-content-center gap-1">
                    <Options
                        type="reserva"
                        borrar={borrarReserva}
                        id={reserva._id}
                    />
                </td>
            </tr>
        </>
    );
}

export default Item;
