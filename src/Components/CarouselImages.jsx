import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/Slide1.jpg'

function CarouselImages() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img src={slide1} alt="" className='object-fit-cover w-100 vh-100' style={{filter:"brightness(50%)"}} />
                <Carousel.Caption style={{ bottom: '19rem' }}>
                    <h3 className='fw-bold' style={{fontSize:"50px"}}>Bienvenidos al mejor hotel de tucuman</h3>
                    <p className='fs-3 fw-bold'>Rolling Hotel</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide1} alt="" className='object-fit-cover w-100 vh-100' style={{filter:"brightness(50%)"}}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide1} alt="" className='object-fit-cover w-100 vh-100' style={{filter:"brightness(50%)"}} />
                <Carousel.Caption className='' style={{ bottom: '19rem' }}>
                    <h3 className='fs-1 fw-bold'>Un Lugar para disfrutar!</h3>
                    <p className='fs-3 fw-bold'>Confort,calidad y descanso</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselImages;