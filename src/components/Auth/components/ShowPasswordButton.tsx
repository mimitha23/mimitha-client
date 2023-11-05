import { useTranslation } from "react-i18next";

import { EyeShowIcon, EyeHideIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ShowPasswordButton.styled";
import React from "react";

interface ShowPasswordButtonT {
  type: string;
  passwordInputType: "text" | "password";
  setPasswordInputType: React.Dispatch<
    React.SetStateAction<"text" | "password">
  >;
}

const ShowPasswordButton: React.FC<ShowPasswordButtonT> = ({
  type,
  passwordInputType,
  setPasswordInputType,
}) => {
  const { t } = useTranslation();

  return (
    <Styled.ShowPasswordButton
      title={
        type === "password" && passwordInputType === "password"
          ? (t("auth.show_password") as string)
          : type === "password" && passwordInputType === "text"
          ? (t("auth.hide_password") as string)
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
};

export default ShowPasswordButton;
