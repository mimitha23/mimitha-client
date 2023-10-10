import { useTranslation } from "react-i18next";
import * as Styled from "./styles/SoldOut.styled";

export default function SoldOut({ soldOut }) {
  const { t } = useTranslation();

  return (
    <Styled.SoldOut>
      <span>{t("crossover.soldOut")}</span>
      <span>{soldOut}</span>
    </Styled.SoldOut>
  );
}
