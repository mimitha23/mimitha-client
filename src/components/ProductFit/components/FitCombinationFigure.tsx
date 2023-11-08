import { MinusIcon } from "components/Layouts/Icons";

interface FitCombinationFigureT {
  src: string;
}

const FitCombinationFigure: React.FC<FitCombinationFigureT> = ({ src }) => {
  return (
    <div className="fit-view__fig-box">
      <figure className="fit-view__fig">
        <img src={src} alt={src} />
      </figure>

      <div className="fit-view__fig-box__remove-btn--box">
        <button>
          <MinusIcon />
        </button>
      </div>
    </div>
  );
};

export default FitCombinationFigure;
