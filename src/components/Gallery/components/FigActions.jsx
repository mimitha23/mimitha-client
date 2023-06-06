import { useNavigate } from "react-router-dom";

import { OpenIcon, OpenInNewIcon } from "components/Layouts/Icons/index";
import * as Styled from "./styles/FigActions.styled";

export default function FigActions({
  img,
  setOpenImage,
  showOpenImageBtn = true,
}) {
  const navigate = useNavigate();

  return (
    <Styled.FigActions>
      {showOpenImageBtn && (
        <button onClick={() => setOpenImage(img)}>
          <OpenIcon />
        </button>
      )}
      <button onClick={() => navigate("/products/:productId")}>
        <OpenInNewIcon />
      </button>
    </Styled.FigActions>
  );
}
