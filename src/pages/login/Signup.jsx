import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaHome } from "react-icons/fa";

function Signup() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        /* const res = await login(data);
        if (res) {
            setUserLogged(data.email);
            Swal.fire({
                title: "Bienvenido",
                text: `Ingresaste correctamente`,
                icon: "success",
            });
            navigate("/administrador");
        } else {
            Swal.fire({
                title: "Error!",
                text: "Usuario no registrado",
                icon: "error",
            });
        } */
        console.log(data);
        Swal.fire({
            title: "Bienvenido",
            text: `Ingresaste correctamente`,
            icon: "success",
        });
        reset();
    };

    return (
        <Container fluid className="grow grid px-2">
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
                        <Form.Text className="text-light-red fw-bold">
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
                        <Form.Text className="text-light-red fw-bold">
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
                        <Form.Text className="text-light-red fw-bold">
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
                        <Form.Text className="text-light-red fw-bold">
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
