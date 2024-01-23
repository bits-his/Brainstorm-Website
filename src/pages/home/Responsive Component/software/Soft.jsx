import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import "./soft.css";
import wd from "../../img/WD.svg";
import ct from "../../img/SD.jpg";
import ai from "../../img/AI.jpg";
import ml from "../../img/ML.jpg";
import bc from "../../img/BC.jpg";
import sd from "../../img/CT.jpg";
const items = [
  {
    src: wd,
    altText: "Web Development",
    caption:
      " Web Development ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis assumenda quisquam.",
    key: 1,
  },
  {
    src: sd,
    altText: "Software Development",
    caption:
      "Software Development ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis assumenda quisquam.",
    key: 2,
  },
  {
    src: ml,
    altText: "Machine Learning",
    caption:
      "Machine Learning ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis assumenda quisquam.",
    key: 3,
  },
  {
    src: ai,
    altText: "Artificial Inteligence",
    caption:
      "Artificial Inteligence ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis assumenda quisquam.",
    key: 3,
  },
  {
    src: ct,
    altText: "Corperate Training",
    caption:
      "Corperate Training ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis assumenda quisquam.",
    key: 3,
  },
  {
    src: bc,
    altText: "Blockchain Technology",
    caption:
      "Blockchain Technology ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis assumenda quisquam.",
    key: 3,
  },
];

export default function Soft(args) {
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
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div className="soft">
          <div className="d-flex align-items-center">
            <img src={item.src} alt={item.altText} />
            <h4>{item.altText}</h4>
          </div>
          <p>{item.caption}</p>
          <div className="offers">
            <h4>Service We Offers</h4>
            <div className="underline-small"></div>
            <ul>
              <li>
                <h5>The Service</h5>
              </li>
              <li>
                <h5>The Service</h5>
              </li>
              <li>
                <h5>The Service</h5>
              </li>
              <li>
                <h5>The Service</h5>
              </li>
            </ul>
          </div>
        </div>
      </CarouselItem>
    );
  });

return (
  <div className="taas">
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
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
