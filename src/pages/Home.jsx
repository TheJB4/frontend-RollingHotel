import { Col, Container, Row } from "react-bootstrap";
import CarouselImages from "../Components/CarouselImages";
import { useState } from "react";
import FormHome from "../Components/FormHome";
import CardHome from "../Components/CardHome";

let dataCards = [
    {
        cardTitle:"Catering y Eventos",
        cardText:"Hotel Rolling ofrece espacios inmejorables para reunirse, ya sea eventos sociales o corporativos.."
    },
    {
        cardTitle:"GIMNASIO",
        cardText:"Clases para todos los niveles, aparatos con tecnología de primera e instructores capacitados hacen de Jockey Club Catalinas el mejor lugar para entrenar."
    },
    {
        cardTitle:"PISCINA",
        cardText:"Gimnasio, solárium, pileta al aire libre (de temporada)."
    },
    {
        cardTitle:"SALONES PARA EVENTOS Y REUNIONES",
        cardText:"Salas de reuniones (costo adicional)."
    },
    {
        cardTitle:"ESTACIONAMIENTO",
        cardText:"Estacionamiento gratis, privado (sujeto a disponibilidad)."
    },
    {
        cardTitle:"SERVICIOS DE RECEPCIÓN",
        cardText:"Información turística, recepción 24 horas."
    }
]

export default function Home() {

    return (
        <main className="grow">
            <section className="w-100 vh-100">
                <CarouselImages></CarouselImages>
            </section>
            <section className="p-4">
                <Container className="w-100">
                    <Row>
                        <Col xs="12" lg="4" className="d-flex flex-column justify-content-center align-items-center">
                            <p className="fw-bold fs-4">Buscar Habitaciones </p>
                            <p className="fw-bold fs-5">Tarifas y disponibilidad</p>
                        </Col>
                        <Col xs="12" lg="8" >
                            <FormHome></FormHome>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
                <hr />
                <Row>
                    <h2 className="text-center">Acerca del hotel</h2>
                    <Col xs="12" lg="6 d-flex flex-column justify-content-center align-items-center">
                        <p>En Hotel Catalinas el confort, la calidad y el descanso están asegurados. Contamos con todos los servicios necesarios para hacer de tu estadía la mejor experiencia.</p>
                        <button>Ver mas</button>
                    </Col>

                    <Col xs="12" lg="6" className="mt-5">
                        <img src="https://www.hotelcatalinastucuman.com.ar/storage/posts/October2023/1pA2vL2xLNYLWU3bk3Ej-cropped.jpg" alt="" style={{
                            boxShadow: "38px -35px 0px -10px rgba(231,166,26,1)"
                        }} />
                    </Col>
                </Row>

            </Container>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center">
                <Row className="w-100">
                    {dataCards.map(card => (
                        <Col xs="12" lg="3" className="d-flex flex-column justify-content-center align-items-center">
                            <CardHome cardTitle={card.cardTitle} cardText={card.cardText}></CardHome>
                        </Col>
                    ))}
                </Row>
            </section>
        </main>
    );
}
