import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import { selectGallery } from "store/selectors/gallerySelector";

import GalleryFig from "./GalleryFig";
import FigActions from "./FigActions";
import * as Styled from "./styles/GalleryList.styled";

export default function GalleryList() {
  const gallery = useSelector(selectGallery);

  return (
    <Styled.GalleryList>
      {gallery.map((item) => (
        <li key={uuid()} className="gallery-list__item">
          <GalleryFig img={item.img} />
          <FigActions img={item.img} />
        </li>
      ))}
    </Styled.GalleryList>
  );
}
