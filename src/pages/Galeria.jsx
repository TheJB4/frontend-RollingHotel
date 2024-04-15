import Container from "react-bootstrap/Container";
import hotel1 from "../assets/galeria/hotel1.jpeg";
import hotel2 from "../assets/galeria/hotel2.webp";
import hotel3 from "../assets/galeria/hotel3.webp";
import hotel4 from "../assets/galeria/hotel4.jpeg";
import hotel5 from "../assets/galeria/hotel5.jpeg";
import hotel6 from "../assets/galeria/hotel6.jpeg";
import hotel7 from "../assets/galeria/hotel7.jpeg";
import hotel8 from "../assets/galeria/hotel8.jpeg";
import hotel9 from "../assets/galeria/hotel9.webp";

const hotelImg = [
    hotel1,
    hotel2,
    hotel3,
    hotel4,
    hotel5,
    hotel6,
    hotel7,
    hotel8,
    hotel9,
];

function Galeria() {
    return (
        <Container fluid className="grow px-0 bg-galeria">
            <div className="py-5">
                <h1 className="display-2 text-center title">
                    Galeria de Imagenes
                </h1>
            </div>
            <div className="container d-flex flex-column justify-content-center flex-md-row flex-wrap gap-4 mb-5 px-1 align-content-center">
                {hotelImg.map((img, index) => {
                    return (
                        <div key={index} className="mx-auto img-hover">
                            <img
                                src={img}
                                alt={`imagen de hotel ${index}`}
                                width="290px"
                                height="200px"
                                className="object-fit-cover"
                            />
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}

export default Galeria;
