import { Card, Button } from "react-bootstrap";
import icono from "../assets/hotel.svg"

export default function CardHome({ cardTitle, cardText }) {
    return (
        <Card style={{ width: '18rem' }} className="mb-3 d-flex flex-column justify-content-between h-100">
            <Card.Body className="d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-center align-items-center">
                    <Card.Img variant="top" src={icono} style={{ width: '3rem' }} />
                    <Card.Title>{cardTitle}</Card.Title>
                </div>
                <Card.Text className="text-center">
                    {cardText}
                </Card.Text>
            </Card.Body>
            <Button variant="btn btn-dark">Ver más</Button>
        </Card>
    )
}