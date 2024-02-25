import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import styles from "./carousel.module.scss";

const ImageCarousel = ({ images }) => {
  return (
    <>
      
      <Carousel className={styles.imageCarousel}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div className={styles.carouselImageContainer}>
            <img
              src={image.full}
              alt={image.alt}
              className="d-block w-100 h-50" 
            />
            </div>
            <Carousel.Caption>
              <h3 className={styles.captionTitle} >{image.description}</h3>
              {/* <p className={styles.captionDescription}>{image.experience.join(", ")}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
