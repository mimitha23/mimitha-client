import { OpenIcon, OpenInNewIcon } from "components/Layouts/Icons/index";
import * as Styled from "./styles/FigActions.styled";

import { GalleryItemT } from "interface/store/gallery.reducer.types";

interface FigActionsT {
  galleryItem?: GalleryItemT;
  showOpenImageBtn?: boolean;
  onOpenImage?: (imgSrc: string) => void;
  onGoToProduct?: (productId: string) => void;
}

const FigActions: React.FC<FigActionsT> = ({
  galleryItem,
  onOpenImage = () => {},
  onGoToProduct = () => {},
  showOpenImageBtn = true,
}) => {
  const handleOpenImage = () => onOpenImage(galleryItem?.img || "");

  const handleGoToProduct = () => onGoToProduct(galleryItem?.productId || "");

  return (
    <Styled.FigActions>
      {showOpenImageBtn && (
        <button className="gallery-fig__actions-btn" onClick={handleOpenImage}>
          <OpenIcon />
        </button>
      )}

      <button className="gallery-fig__actions-btn" onClick={handleGoToProduct}>
        <OpenInNewIcon />
      </button>
    </Styled.FigActions>
  );
};

export default FigActions;
