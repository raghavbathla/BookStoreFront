import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from "../assets/2.jpeg";
import logo2 from "../assets/4.jpeg";
import logo3 from "../assets/3.jpeg";


const Imageslider = () => {
    return (
        <section>
            <Carousel>
                <Carousel.Item>
                    <img src = {logo1} height='300px' width='350px' alt='img1'></img>
                </Carousel.Item>
            </Carousel>
            <Carousel>
                <Carousel.Item>
                    <img src = {logo2} height='300px' width='350px' alt='img1'></img>
                </Carousel.Item>
            </Carousel>
            <Carousel>
                <Carousel.Item>
                    <img src = {logo3} height='300px' width='350px' alt='img1'></img>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Imageslider
