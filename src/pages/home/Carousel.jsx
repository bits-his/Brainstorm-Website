import React from 'react';
import { Carousel, CarouselItem } from 'reactstrap';
import './carousel.css'; // You can create this CSS file for styling
import Sanda from '../../assets/logos/3.jpg'
const CompanyCarousel = () => {
  
  
    return (
        <Carousel>
        <CarouselItem>
          <div className="carousel">
            <img src={Sanda} alt="Sanda" />
          </div>
        </CarouselItem>
        {/* Add more CarouselItem components for additional slides */}
      </Carousel>
    );
  };
  
  export default CompanyCarousel;
  