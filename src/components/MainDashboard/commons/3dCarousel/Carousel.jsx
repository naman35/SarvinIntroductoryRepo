import Carousel from 'react-spring-3d-carousel';
import { useState, useEffect } from 'react';
import { config } from 'react-spring';

export default function Carroussel(props) {
  const [goToSlide, setGoToSlide] = useState(1);
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);

  const [cards] = useState(table);

  useEffect(() => {
    let timer1 = setTimeout(
      () => setGoToSlide((goToSlide + 1) & props.cards.length),
      2500,
    );
    return () => {
      clearTimeout(timer1);
    };
  }, [goToSlide]);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
