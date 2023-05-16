import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";

import styles from "./ImagesCarousel.module.scss";

type ImagesCarouselProps = {
  className?: string;
  images: Array<string>;
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
      <Carousel responsive={responsive} showDots infinite={true}>
        {images.map((image, i) => (
          <Image key={i} src={image} width={300} height={300} alt="image" />
        ))}
      </Carousel>
    </div>
  );
}
