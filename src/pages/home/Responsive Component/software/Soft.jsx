import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Card, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];

function Soft(props) {
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
        className="tab-container"
        tag="div"
        // key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
          <Card className='border-0'>
        {/* Add your card content here */}
        <CardBody>
          <CardTitle tag="h5">{item.caption}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted slider-card tabs">
            Subtitle
          </CardSubtitle>
      
        </CardBody>
      </Card>
       
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              // max-width: 100%;
              // height: 500px;
              // background-color: grey;
              // padding: 30px;
            }
            .custom-tag:hover {
              border:none !important;
            }

            .slider-card{
              height: 30vh;
              padding:10px;
              background-color: lightgray;
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
        
      </Carousel>
    </div>
  );
}

export default Soft;