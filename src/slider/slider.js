import React from 'react'
import img1 from './slider1.jpg';
import img2 from './slider2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import '../slider/slider.css';



export default function SliderP() {
    
    return (
        <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 Slider_img"
              src={img1}
              alt="First slide"
              
            />
            <Carousel.Caption className='caption'>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 Slider_img"
              src={img2}
              alt="Second slide"
            />
    
            <Carousel.Caption className='caption'>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}





