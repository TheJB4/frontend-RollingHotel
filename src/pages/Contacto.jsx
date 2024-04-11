import { Container, Form, Button } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function Contacto() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        Swal.fire({
            title: "Mensaje enviado!",
            icon: "success",
        });
        reset();
    };

    return (
        <Container fluid className="grow p-0">
            <div className="bg-secondary py-5">
                <h1 className="display-1 text-light text-center title">
                    Contactanos
                </h1>
            </div>
            <div className="container-fluid flex-column px-sm-5 py-sm-2 py-md-5 px-md-5 py-lg-5">
                <div className="row justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center">
                    <div className="col-12 col-md-6 col-lg-5 pt-4 pt-md-0">
                        <div className="px-1 py-4">
                            <p className="fs-2 fw-bold text-center">
                                Donde nos encontramos
                            </p>
                            <ul className="infoContacto my-4">
                                <li>
                                    <p>
                                        <FaLocationDot />
                                        Gral. Paz 576, T4000 San Miguel de
                                        Tucumán, Tucumán
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <FaPhone />
                                        3815572365
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <MdEmail /> rolling-hotel@gmail.com
                                    </p>
                                </li>
                            </ul>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1060679494694!2d-65.20974192488997!3d-26.836578490026433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1712360784658!5m2!1ses!2sar"
                                loading="lazy"
                                width="100%"
                                height="250"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 py-4">
                        <div className>
                            <p className="fs-4 mb-lg-0 text-center">
                                Tenes alguna duda?
                            </p>
                            <p className="fs-2 fw-bold text-center">
                                Contactanos
                            </p>
                        </div>
                        <Form
                            className="d-flex flex-column gap-3 gap-lg-4 my-4"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Form.Group>
                                <Form.Control
                                    placeholder="Nombre"
                                    {...register("nombre", {
                                        required: "Ingrese su nombre",
                                        minLength: {
                                            value: 3,
                                            message: "Ingrese un nombre valido",
                                        },
                                    })}
                                ></Form.Control>
                                {errors.nombre && (
                                    <Form.Text className="text-danger">
                                        {errors.nombre.message}
                                    </Form.Text>
                                )}
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Apellido"
                                    {...register("apellido", {
                                        required: "Ingrese su apellido",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Ingrese un apellido valido",
                                        },
                                    })}
                                ></Form.Control>
                                {errors.apellido && (
                                    <Form.Text className="text-danger">
                                        {errors.apellido.message}
                                    </Form.Text>
                                )}
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    placeholder="Correo"
                                    type="email"
                                    {...register("email", {
                                        required: "Ingrese su correo",
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
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Mensaje"
                                    {...register("mensaje", {
                                        required: "Ingrese un mensaje",
                                        minLength: {
                                            value: 10,
                                            message:
                                                "Ingrese un minimo de caracteres",
                                        },
                                        maxLength: {
                                            value: 300,
                                            message: "mensaje demasiado largo",
                                        },
                                    })}
                                ></Form.Control>
                                {errors.mensaje && (
                                    <Form.Text className="text-danger">
                                        {errors.mensaje.message}
                                    </Form.Text>
                                )}
                            </Form.Group>
                            <Button variant="secondary" type="submit">
                                Contactanos
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Contacto;
