import { useTranslation } from "react-i18next";
import * as Styled from "./styles/SoldOut.styled";

interface SoldOutT {
  soldOut: number;
}

const SoldOut: React.FC<SoldOutT> = ({ soldOut }) => {
  const { t } = useTranslation();

  return (
    <Styled.SoldOut>
      <span>{t("crossover.soldOut")}</span>
      <span>{soldOut}</span>
    </Styled.SoldOut>
  );
};

export default SoldOut;
