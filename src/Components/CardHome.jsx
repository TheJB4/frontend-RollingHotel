import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdHotelClass } from "react-icons/md";

export default function CardHome({ cardTitle, cardText }) {
    return (
        <Card
            /* style={{ width: '18rem' }} */ className="mb-3 d-flex flex-column justify-content-between h-100 w-100 rounded-0"
        >
            <Card.Body className="d-flex flex-column justify-content-around gap-3">
                <Card.Title className="text-center fw-bold">
                    {" "}
                    <span>
                        <MdHotelClass color="#fd5444" />
                    </span>{" "}
                    {cardTitle}
                </Card.Title>
                <Card.Text className="text-center">{cardText}</Card.Text>
            </Card.Body>
            <Link
                to="/nosotros"
                className="btn btn-outline-blue rounded-0 fw-bold"
            >
                Ver mas
            </Link>
        </Card>
    );
}
