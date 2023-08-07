import { CloseXIcon } from "components/Layouts/Icons";

export default function FormContainer({ children, className, onClosePopup }) {
  return (
    <form
      className={`auth-popup__form ${className || ""}`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button className="auth-popup__close-btn" onClick={onClosePopup}>
        <CloseXIcon />
      </button>
      {children}
    </form>
  );
}
