import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, BagIcon } from "components/Layouts/Icons";

function FitCombinationActions() {
  const navigate = useNavigate();

  return (
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
  );
}

export default FitCombinationActions;
