import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaHome } from "react-icons/fa";

function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
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
    };

    return (
        <Container fluid className="grow grid px-2">
            <Link className="float btn btn-dark" to="/">
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
                    Ingresar
                </Button>
                <p>
                    Sos nuevo por aca?{" "}
                    <Link className="text-beige fw-bolder" to="/register">
                        Registrate
                    </Link>
                </p>
            </Form>
        </Container>
    );
}

export default Login;
