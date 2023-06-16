import { LockIcon, UnlockIcon, EditIcon } from "components/Layouts/Icons";
import Explain from "./Explain";

export default function BodyPart({ img, part, explainLock, explainEdit }) {
  return (
    <div className={`generator__body-part generator-${part}`}>
      <div className="generator__body-part__fig-box">
        <figure className="generator__body-part__fig">
          <img src={img} alt="" />
        </figure>
      </div>

      <button
        className="generator__body-part--block"
        style={{ position: "relative" }}
      >
        <LockIcon />
        {explainLock && (
          <Explain
            position="bottom"
            step="explainLock"
            description="click lock button and do whatever you want"
          />
        )}
      </button>

      <button
        className="generator__body-part--edit"
        style={{ position: "relative" }}
      >
        <EditIcon />
        {explainEdit && (
          <Explain
            step="explainEdit"
            position="bottom"
            description="click edit button"
          />
        )}
      </button>

      <div className="generator__body-part--details">
        <div className="generator__body-part--details__box">
          <span className="generator__body-part--details__box-label">
            Price
          </span>
          &nbsp;
          <span>20₾</span>
        </div>

        <div className="generator__body-part--details__box">
          <span className="generator__body-part--details__box-label">
            Size Range
          </span>
          &nbsp;
          <span>
            <span>sm</span>
            &nbsp; &mdash; &nbsp;
            <span>xl</span>
          </span>
        </div>
      </div>
    </div>
  );
}
