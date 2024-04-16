import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { check, postReserva } from "../../../helpers/queries";
import Swal from "sweetalert2";

function Cargar(props) {
    const [disponibles, setDisponibles] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
    } = useForm();

    async function chequearDisponibilidad() {
        const camas = getValues("camas");
        const entrada = getValues("entrada");
        const salida = getValues("salida");
        const habDis = await check(camas, entrada, salida);
        setDisponibles(habDis);
    }

    const onSubmit = async (data) => {
        data.userId = JSON.parse(sessionStorage.getItem("usuario")).id;
        const res = await postReserva(data);
        if (!res.ok) {
            Swal.fire({
                title: "Error",
                text: "Algo salio mal!",
                icon: "error",
            });
        } else {
            Swal.fire({
                title: "Listo!",
                text: "La reserva fue cargada con exito!",
                icon: "success",
            });
            props.onHide();
            props.obtenerReservas(props.id);
            reset();
        }
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="bg-dark">
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="display-5 fw-bold text-light"
                >
                    Cargar Reserva
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-2 px-md-5 py-4">
                <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                    <Form.Group controlId="camas" className="mb-4">
                        <Form.Label className="fw-bold">Cantidad de personas</Form.Label>
                        <Form.Select
                            {...register("camas", {
                                required: "ingrese la cantidad de camas",
                            })}
                        >
                            <option value="">Seleccione una opcion</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                        {errors.camas && (
                            <Form.Text className="text-danger">
                                {errors.camas.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                    <div>
                        <Form.Group controlId="entrada" className="mb-4">
                            <Form.Label className="fw-bold">Fecha de entrada</Form.Label>
                            <Form.Control
                                type="date"
                                {...register("entrada", {
                                    required: "Ingrese una fecha de entrada",
                                })}
                            ></Form.Control>
                            {errors.entrada && (
                                <Form.Text className="text-danger">
                                    {errors.entrada.message}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group controlId="salida" className="mb-4">
                            <Form.Label className="fw-bold">Fecha de salida</Form.Label>
                            <Form.Control
                                type="date"
                                {...register("salida", {
                                    required: "Ingrese una fecha de salida",
                                })}
                            ></Form.Control>
                            {errors.salida && (
                                <Form.Text className="text-danger">
                                    {errors.salida.message}
                                </Form.Text>
                            )}
                        </Form.Group>
                    </div>
                    <div className="mb-4 align-self-center">
                        <Button
                            variant="secondary"
                            onClick={chequearDisponibilidad}
                        >
                            Buscar habitacion
                        </Button>
                    </div>
                    <hr />
                    <Form.Group controlId="habitacion" className="mb-4">
                        <Form.Label className="fw-bold">Habitaciones disponibles</Form.Label>
                        <Form.Select
                            {...register("habId", {
                                required: "seleccione una habitacion",
                            })}
                        >
                            {!disponibles?.length ? (
                                <option value="">
                                    No hay habitaciones disponibles
                                </option>
                            ) : (
                                <>
                                    <option value="">
                                        Seleccione una opcion
                                    </option>
                                    {disponibles?.map((item) => {
                                        return (
                                            <option
                                                key={item._id}
                                                value={item._id}
                                            >
                                                {item.numero}
                                            </option>
                                        );
                                    })}
                                </>
                            )}
                        </Form.Select>
                        {errors.habId && (
                            <Form.Text className="text-danger">
                                {errors.habId.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group controlId="informacion" className="mb-4">
                        <Form.Label className="fw-bold">Agregue informacion adicional</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="opcional"
                            {...register("informacion")}
                        ></Form.Control>
                    </Form.Group>
                    <Button type="submit" className="btn-dark rounded-0 w-250 align-self-center fw-bold">cargar</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default Cargar;
