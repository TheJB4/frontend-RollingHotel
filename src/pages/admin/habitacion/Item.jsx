import { deleteHabitacion, getHabitaciones } from "../../../helpers/queries";
import Options from "../Options";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function ImgModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Habitacion {props.numero}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-1 px-md-2">
                <h4 className="fw-bold mb-4">Descripcion</h4>
                <p>{props.descripcion}</p>
                <h4 className="fw-bold mb-4">Detalles</h4>
                <p>ubicacion: piso {props.piso}</p>
                <p>cantidad de camas: {props.camas}</p>
                <h4 className="fw-bold mb-4">Imagen</h4>
                <div className="d-flex justify-content-center">
                    <img
                        src={props.img}
                        alt={`Imagen de habitacion ${props.numero}`}
                        className="img-fluid object-fit-cover"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="danger">
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function Item({ habitacion, setHabitaciones }) {
    const {
        camas,
        descripcion,
        disponible,
        imagen,
        numero,
        piso,
        precio,
        _id,
    } = habitacion;
    const [modalShow, setModalShow] = useState(false);
    const borrarHabitacion = () => {
        Swal.fire({
            title: "Estas seguro de eliminar la habitacion?",
            text: "Una vez hecho esto no se puede recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#b3c4c1",
            confirmButtonText: "Eliminar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteHabitacion(_id);
                if (res.status === 200) {
                    Swal.fire({
                        title: "Habitacion eliminada!",
                        text: `La habitacion "${numero}" fue eliminada correctamente`,
                        icon: "success",
                    });
                    const res = await getHabitaciones();
                    if (res.status === 200) {
                        const data = await res.json();
                        setHabitaciones(data);
                    }
                } else {
                    Swal.fire({
                        title: "ERROR!",
                        text: `La habitacion "${numero}" no se pudo eliminar`,
                        icon: "error",
                    });
                }
            }
        });
    };
    return (
        <>
            <ImgModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                numero={numero}
                img={imagen}
                camas={camas}
                piso={piso}
                descripcion={descripcion}
            />
            <tr className={`${disponible ? "" : "table-danger"}`}>
                <td className="text-truncate">{numero}</td>
                <td className="text-truncate">{disponible ? "si" : "no"}</td>
                <td className="text-truncate">$ {precio}</td>
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
                        type="habitacion"
                        borrar={borrarHabitacion}
                        id={_id}
                    />
                </td>
            </tr>
        </>
    );
}

export default Item;
