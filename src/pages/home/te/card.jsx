import React, { useState } from 'react';
import Img from '../../../assets/team/daddy2.jpg'


import Card2 from './card2'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: '',
    caption: ' ',
  },
  {
    id: 2,
    altText: ' ',
    caption: ' ',
  },
  {
    id: 3,
    altText: ' ',
    caption: ' ',
  },
];

function Example(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div className='card2'>
        <Card2/>
         
            </div>
       
        <CarouselCaption
          className="text-danger"
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              display: inline-block;
              height: 300px;
              background: ;
            }
            .card-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            }
            .card {
              width: 400px;
              height: 200px;
              padding:20px
             
            }
            .card-img-top {
              width: 20% !important;
              height: auto;
              border-radius:50%;
            }
            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              background-color: #000 ;
              border-radius:20%; 
            }
            
            `}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          className='next'
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          className='next'
        />
      </Carousel>
    </div>
  );
}

export default Example;
