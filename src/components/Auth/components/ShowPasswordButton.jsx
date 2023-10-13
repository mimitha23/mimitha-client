import { useTranslation } from "react-i18next";

import { EyeShowIcon, EyeHideIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ShowPasswordButton.styled";

export default function ShowPasswordButton({
  type,
  passwordInputType,
  setPasswordInputType,
}) {
  const { t } = useTranslation();

  return (
    <Styled.ShowPasswordButton
      title={
        type === "password" && passwordInputType === "password"
          ? t("auth.show_password")
          : type === "password" && passwordInputType === "text"
          ? t("auth.hide_password")
          : ""
      }
      onClick={(e) => {
        e.preventDefault();
        setPasswordInputType((prev) =>
          prev === "password" ? "text" : "password"
        );
      }}
    >
      {passwordInputType === "password" ? <EyeShowIcon /> : <EyeHideIcon />}
    </Styled.ShowPasswordButton>
  );
}
