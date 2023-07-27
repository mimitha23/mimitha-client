import { useState } from "react";
import { EyeShowIcon, EyeHideIcon } from "components/Layouts/Icons";

export default function FormInputField({ label, id, message, type }) {
  const [passwordInputType, setPasswordInputType] = useState("password");

  return (
    <div className="auth-popup__form-field">
      <label htmlFor={id} className="auth-popup__form-field--label">
        {label}
      </label>

      <div className="auth-popup__form-field--input---box">
        <input
          id={id}
          className="auth-popup__form-field--input"
          type={type === "password" ? passwordInputType : type}
        />

        {type === "password" && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setPasswordInputType((prev) =>
                prev === "password" ? "text" : "password"
              );
            }}
          >
            {passwordInputType === "password" ? (
              <EyeShowIcon />
            ) : (
              <EyeHideIcon />
            )}
          </button>
        )}
      </div>

      {false && (
        <blockquote className="auth-popup__form-field--message">
          {message}
        </blockquote>
      )}
    </div>
  );
}
