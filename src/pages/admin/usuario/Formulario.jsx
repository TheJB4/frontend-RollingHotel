import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getUsuarioById, putUsuario } from "../../../helpers/queries";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Formulario() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const navigate = useNavigate();
    const { id } = useParams();

    const obtenerUsuario = async () => {
        const res = await getUsuarioById(id);
        if (res.ok) {
            const data = await res.json();
            setValue("nombre", data.nombre);
            setValue("apellido", data.apellido);
            setValue("telefono", data.telefono);
            setValue("email", data.email);
            setValue("esAdmin", data.esAdmin);
            setValue("activo", data.activo);
            setValue("password", data.password);
        }
    };

    const onSubmit = async (data) => {
        const res = await putUsuario(data, id);
        if (!res.ok) {
            Swal.fire({
                title: "Error",
                text: "Algo salio mal!",
                icon: "error",
            });
        } else {
            Swal.fire({
                title: "Listo!",
                text: "El usuario fue actualizado con exito!",
                icon: "success",
            });
            navigate("/panel/usuario");
        }
    };

    useEffect(() => {
        obtenerUsuario();
    }, []);

    return (
        <div className="container grow py-4">
            <h1 className="display-1 ff-nunito fw-bold text-orange text-center">
                Usuario
            </h1>
            <hr />
            <Form
                className="d-flex flex-column gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form.Group controlId="nombre">
                    <Form.Label>Nombre*</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("nombre", {
                            required: "ingrese su nombre",
                            minLength: {
                                value: 2,
                                message:
                                    "Debe ingresar como minimo 2 caracteres",
                            },
                            maxLength: {
                                value: 40,
                                message:
                                    "Debe ingresar como maximo 40 caracteres",
                            },
                        })}
                    ></Form.Control>
                    {errors.nombre && (
                        <Form.Text className="text-danger">
                            {errors.nombre.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="apellido">
                    <Form.Label>Apellido*</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("apellido", {
                            required: "ingrese su apellido",
                            minLength: {
                                value: 2,
                                message:
                                    "Debe ingresar como minimo 2 caracteres",
                            },
                            maxLength: {
                                value: 40,
                                message:
                                    "Debe ingresar como maximo 40 caracteres",
                            },
                        })}
                    ></Form.Control>
                    {errors.apellido && (
                        <Form.Text className="text-danger">
                            {errors.apellido.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="telefono">
                    <Form.Label>Numero de telefono*</Form.Label>
                    <Form.Control
                        type="text"
                        name="telefono"
                        {...register("telefono", {
                            required: "ingrese un numero de telefono",
                            minLength: {
                                value: 6,
                                message: "ingrese un numero de telefono valido",
                            },
                            maxLength: {
                                value: 15,
                                message: "ingrese un numero de telefono valido",
                            },
                        })}
                    />
                    {errors.telefono && (
                        <Form.Text className="text-danger">
                            {errors.telefono.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Correo electronico*</Form.Label>
                    <Form.Control
                        type="email"
                        {...register("email", {
                            required: "ingrese su correo electronico",
                            pattern: {
                                value: /.+\@.+\..+/,
                                message: "ingrese un correo valido",
                            },
                        })}
                    ></Form.Control>
                    {errors.email && (
                        <Form.Text className="text-danger">
                            {errors.email.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="activo">
                    <Form.Label>Estado*</Form.Label>
                    <Form.Select
                        {...register("activo", {
                            required: "ingrese si estado del usuario",
                        })}
                    >
                        <option value="true">activo</option>
                        <option value="false">inactivo</option>
                    </Form.Select>
                    {errors.activo && (
                        <Form.Text className="text-danger">
                            {errors.activo.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="esAdmin">
                    <Form.Label>Permisos de admin*</Form.Label>
                    <Form.Select
                        {...register("esAdmin", {
                            required:
                                "ingrese si posee permisos de administrador",
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
                    actualizar
                </Button>
            </Form>
        </div>
    );
}

export default Formulario;
