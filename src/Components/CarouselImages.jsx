import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/Slide1.jpg";
import { MdLocalHotel } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { TbHotelService } from "react-icons/tb";
import { MdOutlineNightlife } from "react-icons/md";

function CarouselImages() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    src={slide1}
                    alt="imagen de hotel"
                    className="object-fit-cover max"
                    style={{ filter: "brightness(50%)" }}
                />
                <Carousel.Caption style={{ bottom: "40%" }}>
                    <h1 className="fw-bold display-3">
                        Bienvenidos Rolling Hotel
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={slide1}
                    alt="imagen de hotel"
                    className="object-fit-cover max"
                    style={{ filter: "brightness(50%)" }}
                />
                <Carousel.Caption style={{ bottom: "40%" }}>
                    <p className="display-3 fw-bold">
                        <span>
                            <MdLocalHotel />
                        </span>{" "}
                        <span>
                            <TbToolsKitchen2 />
                        </span>{" "}
                        <span>
                            <MdOutlineNightlife />
                        </span>{" "}
                        <span>
                            <TbHotelService />
                        </span>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={slide1}
                    alt="imagen de hotel"
                    className="object-fit-cover max"
                    style={{ filter: "brightness(50%)" }}
                />
                <Carousel.Caption style={{ bottom: "40%" }}>
                    <h1 className="display-4 fw-bold">
                        Un Lugar para disfrutar
                    </h1>
                    <p className="fs-4 fw-bold">Confort, calidad y descanso</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselImages;
