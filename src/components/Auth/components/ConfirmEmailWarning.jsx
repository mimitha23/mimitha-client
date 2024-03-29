import { useTranslation } from "react-i18next";
import * as Styled from "./styles/ConfirmEmailWarning.styled";

export default function ConfirmEmailWarning() {
  const { t } = useTranslation();

  return (
    <Styled.ConfirmEmailWarning>
      <span>{t("auth.confirm_email_message_primary")}</span>
      <span>{t("auth.confirm_email_message_secondary")}</span>
    </Styled.ConfirmEmailWarning>
  );
}
