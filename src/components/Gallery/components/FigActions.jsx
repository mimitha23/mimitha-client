import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { galleryActions } from "store/reducers/gallery.reducer";
import { PATHS } from "config/routes";

import { OpenIcon, OpenInNewIcon } from "components/Layouts/Icons/index";
import * as Styled from "./styles/FigActions.styled";

export default function FigActions({ img, showOpenImageBtn = true }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Styled.FigActions>
      {showOpenImageBtn && (
        <button
          className="gallery-fig__actions-btn"
          onClick={() => dispatch(galleryActions.openGalleryImage(img))}
        >
          <OpenIcon />
        </button>
      )}
      <button
        className="gallery-fig__actions-btn"
        onClick={() => navigate(PATHS.active_product.fullPath({}))}
      >
        <OpenInNewIcon />
      </button>
    </Styled.FigActions>
  );
}
