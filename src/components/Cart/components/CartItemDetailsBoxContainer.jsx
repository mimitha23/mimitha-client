function CartItemDetailsBoxContainer({ children, title }) {
  return (
    <div className="cart-item__details-box">
      <span className="cart-item__details-box--head">{title}</span>
      <div className="cart-item__details-box--content">{children}</div>
    </div>
  );
}

export default CartItemDetailsBoxContainer;
