import { useTranslation } from "react-i18next";
import * as Styled from "./styles/FormDevider.styled";

export default function FormDevider() {
  const { t } = useTranslation();

  return (
    <Styled.FormDevider>
      <hr />
      <span>{t("auth.or")}</span>
      <hr />
    </Styled.FormDevider>
  );
}
