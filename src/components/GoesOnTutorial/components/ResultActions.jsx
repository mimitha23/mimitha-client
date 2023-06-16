import Explain from "./Explain";

export default function ResultActions({ explainBuyNow, explainAddToCart }) {
  return (
    <div className="generator_result-actions">
      <button
        className="generator_result-actions--btn"
        style={{ position: "relative" }}
      >
        buy now
        {explainBuyNow && (
          <Explain
            step="explainBuyNow"
            description="click buy now"
            position="top"
          />
        )}
      </button>
      <button
        className="generator_result-actions--btn"
        style={{ position: "relative" }}
      >
        add to cart
        {explainAddToCart && (
          <Explain
            step="explainAddToCart"
            description="click add to cart"
            position="top-left"
          />
        )}
      </button>
    </div>
  );
}
