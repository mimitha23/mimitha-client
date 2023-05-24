import { Link } from "react-router-dom";

export default function ProductTitle(props) {
  return (
    <h2 className="product-title">
      <Link to="/products/:productId">ჰუდი</Link>
    </h2>
  );
}
