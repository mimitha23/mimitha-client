import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { DYNAMIC_PATHS } from "config/paths";
import { galleryActions } from "store/reducers/gallery.reducer";
import { selectGallery } from "store/selectors/gallery.selector";

import GalleryFig from "./GalleryFig";
import FigActions from "./FigActions";
import * as Styled from "./styles/GalleryList.styled";

const GalleryList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const gallery = useAppSelector(selectGallery);

  const onOpenImage = (imgSrc: string) =>
    dispatch(galleryActions.openGalleryImage({ imgSrc }));

  const onGoToProduct = (productId: string) =>
    navigate(DYNAMIC_PATHS.active_product_page(productId));

  return (
    <Styled.GalleryList>
      {gallery.map((item) => (
        <li key={uuid()} className="gallery-list__item">
          <GalleryFig img={item.img} onOpenImage={onOpenImage} />

          <FigActions
            galleryItem={item}
            onOpenImage={onOpenImage}
            onGoToProduct={onGoToProduct}
          />
        </li>
      ))}
    </Styled.GalleryList>
  );
};

export default GalleryList;
