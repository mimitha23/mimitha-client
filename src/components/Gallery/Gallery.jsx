import { useEffect, useState } from "react";

import { gallery } from "lib/index";
import calcImageDimention from "functions/calcImageDimention";

import FigActions from "./components/FigActions";
import GalleryFig from "./components/GalleryFig";
import SliderModal from "./components/SliderModal";
import { Spinner } from "components/Layouts/index";
import * as Styled from "./Gallery.styled";

export default function Gallery() {
  const [openImage, setOpenImage] = useState("");
  const [imagesAreLoaded, setImagesAreLoaded] = useState(false);

  useEffect(() => {
    calcImageDimention(() => setImagesAreLoaded(true));
  }, []);

  return (
    <Styled.Gallery className={imagesAreLoaded ? "loaded-content" : ""}>
      {!imagesAreLoaded && <Spinner />}

      <div className="gallery-list">
        {gallery.map((item) => (
          <GalleryFig key={item.productId} img={item.img}>
            <FigActions setOpenImage={setOpenImage} img={item.img} />
          </GalleryFig>
        ))}
      </div>

      <SliderModal
        gallery={gallery}
        openImage={openImage}
        setOpenImage={setOpenImage}
      />
    </Styled.Gallery>
  );
}
