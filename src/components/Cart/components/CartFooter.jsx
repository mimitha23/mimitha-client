import * as Styled from "./styles/CartFooter.styled";

function CartFooter({ onBuy }) {
  return (
    <Styled.CartFooterContainer>
      <div className="footer__summary-box">
        <span className="delivery-price">
          პროდუქტების ჯამური რაოდენობა &mdash; 5
        </span>
        <span className="delivery-price">
          პროდუქტების ჯამური ფასი &mdash; 400₾
        </span>
        <span className="delivery-price">მიწოდების საფასური &mdash; 5₾</span>
      </div>
      <div className="footer__actions-box">
        <button className="cart-footer__btn">კალათის გასუფთავება</button>
        <button className="cart-footer__btn" onClick={onBuy}>
          შეძენა
        </button>
      </div>
    </Styled.CartFooterContainer>
  );
}

export default CartFooter;
