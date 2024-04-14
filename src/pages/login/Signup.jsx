import {
    Container,
    Form,
    Button,
    Toast,
    ToastContainer,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaHome } from "react-icons/fa";
import { registrarUsuario } from "../../helpers/queries.js";

function Signup() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        data.activo = true;
        data.esAdmin = false;
        const res = await registrarUsuario(data);
        if (!res.ok) {
            setShow(true);
            const respuesta = await res.json();
            setMessage(respuesta.message);
        } else {
            Swal.fire({
                title: "Registro completado",
                icon: "success",
                background: "#1c1c21",
                iconColor: "#534ff2",
                color: "#fff",
            });
            navigate("/");
        }
    };

    return (
        <Container fluid className="grow grid px-2">
            <ToastContainer position="top-center" className="mt-1">
                <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    delay={3000}
                    autohide
                    className="bg-light-red"
                >
                    <Toast.Body className="fw-bold text-light text-center">
                        {message}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
            <Link className="float btn btn-dark rounded-0" to="/">
                <FaHome />
                Inicio
            </Link>
            <Form
                className="w-100 text-center my-2 d-flex flex-column gap-2 min mx-auto shadow p-2 py-4 px-md-4 text-light"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="title">Bienvenido</h1>
                <p className="fs-6 fw-bold">Registrate como nuevo usuario</p>
                <Form.Group controlId="nombre">
                    <Form.Control
                        placeholder="Nombre"
                        type="nombre"
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
                        <Form.Text className="text-light-red fw-bolder">
                            {errors.nombre.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="apellido">
                    <Form.Control
                        placeholder="Apellido"
                        type="apellido"
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
                        <Form.Text className="text-light-red fw-bolder">
                            {errors.apellido.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="telefono">
                    <Form.Control
                        type="number"
                        placeholder="Telefono"
                        name="telefono"
                        {...register("telefono", {
                            required: "ingrese un numero de telefono",
                            minLength: {
                                value: 6,
                                message: "ingrese entre 6 y 15 caracteres",
                            },
                            maxLength: {
                                value: 15,
                                message: "ingrese entre 6 y 15 caracteres",
                            },
                        })}
                    />
                    {errors.telefono && (
                        <Form.Text className="text-light-red fw-bolder">
                            {errors.telefono.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Control
                        placeholder="correo"
                        type="email"
                        {...register("email", {
                            required: "ingrese su correo electronico",
                        })}
                    ></Form.Control>
                    {errors.email && (
                        <Form.Text className="text-light-red fw-bolder">
                            {errors.email.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Control
                        placeholder="contraseña"
                        /* type="password" */
                        {...register("password", {
                            required: "ingrese su contraseña",
                            minLength: {
                                value: 8,
                                message: "Ingrese como minimo 8 caracteres",
                            },
                            maxLength: {
                                value: 16,
                                message: "ingrese un maximo de 16 caracteres",
                            },
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{8,16}$/,
                                message:
                                    "la contraseña debe tener al menos una letra minuscula, una letra mayuscula, un numero y un caracter especial",
                            },
                        })}
                    ></Form.Control>
                    {errors.password && (
                        <Form.Text className="text-light-red fw-bold text-end">
                            {errors.password.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Button
                    variant=""
                    className="align-self-stretch mt-3 btn-outline-dark"
                    type="submit"
                >
                    Registrarse
                </Button>
                <p>
                    Ya tienes una cuenta?{" "}
                    <Link className="text-beige fw-bolder" to="/login">
                        Inicia sesion
                    </Link>
                </p>
            </Form>
        </Container>
    );
}

export default Signup;
