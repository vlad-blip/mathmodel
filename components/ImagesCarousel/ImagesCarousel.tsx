import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./ImagesCarousel.module.scss";

type ImagesCarouselProps = {
  className?: string;
  images: any[];
};
export default function ImagesCarousel({
  images,
  className,
}: ImagesCarouselProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 10000, min: 50 },
      items: 1,
    },
  };
  return (
    <div className={`${styles.container} ${className}`}>
      <Carousel responsive={responsive} showDots infinite={true} ssr={true}>
        {images.map((image) => image)}
      </Carousel>
    </div>
  );
}
