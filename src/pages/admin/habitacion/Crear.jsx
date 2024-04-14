import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
    postHabitacion,
    getHabitacionById,
    putHabitacion,
    confirmarLibre,
} from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineDangerous } from "react-icons/md";

function Crear({ title, editar }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
    } = useForm();

    const obtenerHabitacion = async () => {
        const res = await getHabitacionById(id);
        if (res.ok) {
            const data = await res.json();
            setValue("numero", data.numero);
            setValue("piso", data.piso);
            setValue("camas", data.camas);
            setValue("descripcion", data.descripcion);
            setValue("imagen", data.imagen);
            setValue("precio", data.precio);
            setValue("disponible", data.disponible);
        }
    };

    const onSubmit = async (data) => {
        if (editar) {
            const res = await putHabitacion(data, id);
            if (!res.ok) {
                Swal.fire({
                    title: "Error",
                    text: "Algo salio mal!",
                    icon: "error",
                });
            } else {
                Swal.fire({
                    title: "Listo!",
                    text: "La habitacion fue actualizada con exito!",
                    icon: "success",
                });
                navigate("/panel/habitacion");
            }
        } else {
            const res = await postHabitacion(data);
            if (!res.ok) {
                Swal.fire({
                    title: "Error",
                    text: "Algo salio mal!",
                    icon: "error",
                });
                const error = await res.json();
                console.log(error);
            } else {
                Swal.fire({
                    title: "Listo!",
                    text: "La habitacion fue cargada con exito!",
                    icon: "success",
                });
                navigate("/panel/habitacion");
            }
        }
    };

    const [libre, setLibre] = useState(true);

    async function confirmarNumero() {
        const numero = getValues("numero");
        const res = await confirmarLibre(numero);
        setLibre(res);
    }

    useEffect(() => {
        if (editar) {
            obtenerHabitacion();
        }
    }, []);

    return (
        <div className="container grow py-4">
            <h1 className="display-1 ff-nunito fw-bold text-orange text-center">
                {title} Habitacion
            </h1>
            <hr />
            <Form
                className="d-flex flex-column gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form.Group controlId="numero">
                    <Form.Label>Numero*</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        {...register("numero", {
                            required: "ingrese el numero de habitacion",
                            min: {
                                value: 1,
                                message: "ingrese un numero entre 1 y 99",
                            },
                            max: {
                                value: 99,
                                message: "ingrese un numero entre 1 y 99",
                            },
                        })}
                    ></Form.Control>
                    {errors.numero && (
                        <Form.Text className="text-danger">
                            {errors.numero.message}
                        </Form.Text>
                    )}
                    <div className="d-flex align-items-center gap-2">
                        <Button
                            variant="outline-secondary"
                            className="my-2"
                            onClick={confirmarNumero}
                        >
                            confirmar numero
                        </Button>
                        {libre ? (
                            <span className="bg-success text-light rounded py-1 px-2">
                                <LuBadgeCheck />
                                libre
                            </span>
                        ) : (
                            <span className="bg-danger text-light rounded py-1 px-2">
                                <MdOutlineDangerous />
                                ocupado
                            </span>
                        )}
                    </div>
                </Form.Group>
                <Form.Group controlId="piso">
                    <Form.Label>Piso*</Form.Label>
                    <Form.Select
                        {...register("piso", {
                            required: "Seleccione un piso",
                        })}
                    >
                        <option value="">Seleccione una opcion</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                    {errors.piso && (
                        <Form.Text className="text-danger">
                            {errors.piso.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="camas">
                    <Form.Label>Cantidad de camas*</Form.Label>
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
                <Form.Group controlId="precio">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ej: 5000"
                        name="precio"
                        {...register("precio", {
                            required: "ingrese un valor",
                            min: {
                                value: 2500,
                                message:
                                    "El precio debe ser mayor o igual a 2500",
                            },
                            max: {
                                value: 10000,
                                message:
                                    "el precio debe ser menor o igual a 10000",
                            },
                        })}
                    />
                    {errors.precio && (
                        <Form.Text className="text-danger">
                            {errors.precio.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="descripcion">
                    <Form.Label>Descripcion de habitacion*</Form.Label>
                    <Form.Control
                        as="textarea"
                        {...register("descripcion", {
                            required:
                                "Ingrese una explicacion de la habitacion",
                            minLength: {
                                value: 50,
                                message:
                                    "ingrese una descripcion entre 50 y 300 caracteres",
                            },
                            maxLength: {
                                value: 300,
                                message:
                                    "ingrese una descripcion entre 50 y 300 caracteres",
                            },
                        })}
                    ></Form.Control>
                    {errors.descripcion && (
                        <Form.Text className="text-danger">
                            {errors.descripcion.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="imagen">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: https://www.pexels.com/es-es/imagen.png"
                        name="url"
                        {...register("imagen", {
                            required: "ingrese una url de imagen",
                            pattern: {
                                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                                message: "ingrese una url válida",
                            },
                        })}
                    />
                    {errors.imagen && (
                        <Form.Text className="text-danger">
                            {errors.imagen.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="disponible">
                    <Form.Label>Disponibilidad*</Form.Label>
                    <Form.Select
                        {...register("disponible", {
                            required: "ingrese la disponibilidad",
                        })}
                    >
                        <option value="true">Si</option>
                        <option value="false">No</option>
                    </Form.Select>
                    {errors.disponible && (
                        <Form.Text className="text-danger">
                            {errors.disponible.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Button
                    variant=""
                    className="btn-naranja align-self-center w-250 fw-bold"
                    type="submit"
                >
                    Enviar
                </Button>
            </Form>
        </div>
    );
}

export default Crear;
