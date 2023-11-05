import { useTranslation } from "react-i18next";
import * as Styled from "./styles/FormDevider.styled";

const FormDevider: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Styled.FormDevider>
      <hr />
      <span>{t("auth.or")}</span>
      <hr />
    </Styled.FormDevider>
  );
};

export default FormDevider;
