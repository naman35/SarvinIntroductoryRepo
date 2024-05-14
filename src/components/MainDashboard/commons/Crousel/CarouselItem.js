import React from 'react';
import styles from './styles.module.css';

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className={styles.carouselcard}>
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
  );
}
