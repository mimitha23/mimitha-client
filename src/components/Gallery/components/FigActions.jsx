import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { openGalleryImage } from "store/reducers/gallerySlice";

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
          onClick={() => dispatch(openGalleryImage(img))}
        >
          <OpenIcon />
        </button>
      )}
      <button
        className="gallery-fig__actions-btn"
        onClick={() => navigate("/products/:productId")}
      >
        <OpenInNewIcon />
      </button>
    </Styled.FigActions>
  );
}
