import { Col, Container, Row } from "react-bootstrap";
import CarouselImages from "../Components/CarouselImages";
import { Link } from "react-router-dom";
import FormHome from "../Components/FormHome";
import CardHome from "../Components/CardHome";

let dataCards = [
    {
        cardTitle: "CATERING Y EVENTOS",
        cardText:
            "Hotel Rolling ofrece espacios inmejorables para reunirse, ya sea eventos sociales o corporativos...",
    },
    {
        cardTitle: "GIMNASIO",
        cardText:
            "Clases para todos los niveles, aparatos con tecnologia de primera e instructores capacitados hacen de Jockey Club Catalinas el mejor lugar para entrenar.",
    },
    {
        cardTitle: "PISCINA",
        cardText: "Gimnasio, solarium, pileta al aire libre (de temporada)",
    },
    {
        cardTitle: "SALONES PARA EVENTOS Y REUNIONES",
        cardText: "Salas de reuniones (costo adicional)",
    },
    {
        cardTitle: "ESTACIONAMIENTO",
        cardText: "Estacionamiento gratis, privado (sujeto a disponibilidad)",
    },
    {
        cardTitle: "SERVICIOS DE RECEPCION",
        cardText: "Informacion turistica, recepcion 24 horas.",
    },
];

export default function Home() {
    return (
        <main className="grow">
            <section className="w-100 vh-100">
                <CarouselImages></CarouselImages>
            </section>
            <section className="px-2 py-5 p-md-5 d-flex flex-column justify-content-center text-center gap-4 flex-md-row justify-content-md-evenly mb-4 align-items-center">
                <div>
                    <h2 className="fw-bold m-0 fs-1 mb-2">
                        Tarifas y disponibilidad
                    </h2>
                    <p className="fs-4">
                        Ingresa o registrate para iniciar tu reserva
                    </p>
                </div>
                <Link
                    to="/panel"
                    className="btn w-250 mx-auto py-2 mx-md-0 btn-dark rounded-0 fw-bold fs-20"
                >
                    Iniciar reserva
                </Link>
            </section>
            <section className="py-5 bg-beige">
                <Container>
                    <Row className="justify-content-center gap-5">
                        <h2 className="text-center fw-bold">
                            Acerca del hotel
                        </h2>
                        <Col
                            xs="12"
                            lg="5 d-flex flex-column justify-content-center align-items-center gap-md-4"
                        >
                            <p>
                                En Rolling Hotel el confort, la calidad y el
                                descanso estan asegurados. Contamos con todos
                                los servicios necesarios para hacer de tu
                                estadia la mejor experiencia.
                            </p>
                            <Link
                                to="/nosotros"
                                className="btn btn-naranja rounded-0 align-self-stretch"
                            >
                                Ver mas
                            </Link>
                        </Col>
                        <Col xs="12" lg="5" className="mt-4 text-center">
                            <img
                                src="https://www.hotelcatalinastucuman.com.ar/storage/posts/October2023/1pA2vL2xLNYLWU3bk3Ej-cropped.jpg"
                                alt=""
                                className="img-fluid shadow-amarillo"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className=" py-5 w-100 d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center fw-bold">Servicios</h2>
                <Row className="w-100 mt-4 gap-4 justify-content-center">
                    {dataCards.map((card, index) => (
                        <Col
                            key={index}
                            xs="12"
                            sm="10"
                            md="5"
                            lg="3"
                            className="d-flex flex-column justify-content-center justify-content-sm-stretch align-items-center"
                        >
                            <CardHome
                                cardTitle={card.cardTitle}
                                cardText={card.cardText}
                            ></CardHome>
                        </Col>
                    ))}
                </Row>
            </section>
            <div className="bg-beige px-2 py-5 p-md-5 d-flex flex-column justify-content-center text-center gap-4 flex-md-row justify-content-md-evenly">
                    <h2 className="fw-bold m-0 fs-3">Tenes alguna duda?</h2>
                    <Link
                        to="/contacto"
                        className="btn w-250 mx-auto mx-md-0 btn-dark rounded-0 fw-bold fs-20"
                    >
                        Contactanos
                    </Link>
                </div>
        </main>
    );
}
