export default function CartItemDetailsBoxContainer({
  children,
  title,
  className,
}) {
  return (
    <div className={`cart-item__details-box ${className || ""}`}>
      <span className="cart-item__details-box--head">{title}</span>
      <div className="cart-item__details-box--content">{children}</div>
    </div>
  );
}
