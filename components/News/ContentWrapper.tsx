import { useMemo } from "react";

import ImagesCarousel from "../ImagesCarousel/ImagesCarousel";

const isImage = (content: React.ReactElement) => {
  return content.props.className === "news__image";
};

const imageGrabber = (content: any[]) => {
  const imagesArray = [];
  let currentArray = [];

  for (let i = 0; i < content.length; i++) {
    if (isImage(content[i])) {
      currentArray.push(content[i]);

      if (!isImage(content[i + 1])) {
        if (currentArray.length === 1) {
          imagesArray.push(currentArray[0]);
        } else {
          imagesArray.push(currentArray);
          currentArray = [];
        }
      }
    }
  }

  return imagesArray;
};

export default function ContentWrapper({ children }: { children: any }) {
  const images = imageGrabber(children);
  const content = [...children];
  let currentIndex = 0;

  content.forEach((element, index) => {
    if (isImage(element)) {
      content.splice(index, 1, images[currentIndex]);
      currentIndex++;
    }
  });

  const cleanContent = useMemo(() => {
    return content
      .filter((value) => value !== undefined)
      .map((element) => {
        if (Array.isArray(element)) {
          return (
            <div className="carousel">
              <ImagesCarousel images={element} />
            </div>
          );
        } else {
          return element;
        }
      });
  }, [content]);

  return <>{cleanContent}</>;
}
