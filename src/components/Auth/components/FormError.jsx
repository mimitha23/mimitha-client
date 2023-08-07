export default function FormError({ message }) {
  return (
    <blockquote className="auth-popup__form-field--message">
      {message}
    </blockquote>
  );
}
