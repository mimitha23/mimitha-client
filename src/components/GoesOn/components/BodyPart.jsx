import { LockIcon, UnlockIcon, EditIcon } from "components/Layouts/Icons";

export default function BodyPart({ img, part }) {
  return (
    <div className={`generator__body-part generator-${part}`}>
      <div className="generator__body-part__fig-box">
        <figure className="generator__body-part__fig">
          <img src={img} alt="" />
        </figure>
      </div>

      <button className="generator__body-part--block">
        <LockIcon />
      </button>

      <button className="generator__body-part--edit">
        <EditIcon />
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
