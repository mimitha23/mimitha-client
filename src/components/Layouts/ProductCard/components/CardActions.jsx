import { Link } from "react-router-dom";

export default function CardActions() {
  return (
    <div className="product__edit-and--fit__box">
      <button className="edit-btn">
        <Link to="/products/:productId/fit">რას უხდება ?</Link>
      </button>
      <button className="edit-btn">
        <Link to="/products/:productId/edit">გარდაქმნა</Link>{" "}
      </button>
    </div>
  );
}
