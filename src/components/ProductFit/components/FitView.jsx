import { useNavigate } from "react-router-dom";

import { ArrowLeftIcon, BagIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/FitView.styled";

function FitView() {
  const navigate = useNavigate();

  return (
    <Styled.FitViewContainer>
      <div className="fit-view__fig-box">
        <figure className="fit-view__fig">
          <img src="/assets/products/hood-belly-pocket-black.webp" alt="" />
        </figure>
      </div>

      <div className="fit-view__actions-box">
        <button
          onClick={() => navigate(-1)}
          className="fit-view__action-btn fit-view__action-btn--back"
        >
          <span>
            <ArrowLeftIcon />
          </span>
          <span>დაბრუნდით უკან</span>
        </button>

        <button className="fit-view__action-btn">
          <span>დაამატეთ კალათაში</span>
          <span>
            <BagIcon />
          </span>
        </button>
      </div>
    </Styled.FitViewContainer>
  );
}

export default FitView;
