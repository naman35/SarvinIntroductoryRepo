import React from 'react';
import styles from './styles.module.css';
import { cardDetails } from './carousel-config';
import CarouselItem from './CarouselItem';

export default function AutoplayCarousel() {
  return (
    <div className={styles.carouselcontainer}>
      <div className={styles.carouseltrack}>
        {Object.keys(cardDetails).map((detailKey) => {
          <div key={detailKey}>
            {' '}
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          </div>;
        })}
        {/* {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })} */}
      </div>
    </div>
  );
}
