import { MinusIcon } from "components/Layouts/Icons";

export default function FitCombinationFigure() {
  return (
    <div className="fit-view__fig-box">
      <figure className="fit-view__fig">
        <img src="/assets/products/hood-belly-pocket-black.webp" alt="" />
      </figure>
      <div className="fit-view__fig-box__remove-btn--box">
        <button>
          <MinusIcon />
        </button>
      </div>
    </div>
  );
}
