export default function ProductDescriptionDetailsBox({ children, label }) {
  return (
    <div className="product-description__box">
      <span>{label}</span>

      <hr className="product-description__info-devider"></hr>

      <ul className="details_list">{children}</ul>
    </div>
  );
}
