import {
    Container,
    Form,
    Button,
    Toast,
    ToastContainer,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaHome } from "react-icons/fa";
import { login } from "../../helpers/auth";

function Login({ setUserLogged }) {
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        const res = await login(data);
        if (!res.ok) {
            const respuesta = await res.json();
            setErrorMessage(respuesta.message);
            setShow(true);
        } else {
            const user = await res.json();
            sessionStorage.setItem(
                "usuario",
                JSON.stringify({
                    email: user.email,
                    nombre: user.nombre,
                    esAdmin: user.esAdmin,
                    token: user.token,
                })
            );
            setUserLogged(user);
            Swal.fire({
                title: "Bienvenido",
                text: `Ingresaste correctamente`,
                icon: "success",
                background: "#1c1c21",
                iconColor: "#534ff2",
                color: "#fff",
            });
            navigate("/panel");
        }
        reset();
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
                        {errorMessage}
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
                <p className="fs-5 fw-bold">Inicia sesion con tu cuenta</p>
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
                        })}
                    ></Form.Control>
                    {errors.password && (
                        <Form.Text className="text-light-red fw-bolder">
                            {errors.password.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Button
                    variant=""
                    className="align-self-stretch mt-3 btn-outline-dark"
                    type="submit"
                >
                    Ingresar
                </Button>
                <p>
                    Sos nuevo por aca?{" "}
                    <Link className="text-beige fw-bolder" to="/sign-up">
                        Registrate
                    </Link>
                </p>
            </Form>
        </Container>
    );
}

export default Login;
