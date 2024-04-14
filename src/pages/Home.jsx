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
            <section className="py-5 px-2 px-md-0">
                <Container className="px-2">
                    <Row>
                        <Col xs="12" lg="4" className="text-center mb-2">
                            <h2 className="fw-bold">Buscar Habitaciones </h2>
                            <p className="fw-bold fs-5">
                                Tarifas y disponibilidad
                            </p>
                        </Col>
                        <Col xs="12" lg="8" className="px-4">
                            <FormHome></FormHome>
                        </Col>
                    </Row>
                </Container>
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
        </main>
    );
}
