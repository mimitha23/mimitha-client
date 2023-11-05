import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PATHS } from "config/paths";

import * as Styled from "./styles/FinishEditButton.styled";

export default function FinishEditButton({ productId }) {
  const { t } = useTranslation();

  return (
    <Styled.FinishEditButton>
      <Link
        to={PATHS.active_product.fullPath({ productId })}
        state={{ productId }}
        className="finish-btn"
      >
        {t("crossover.finish_edit")}
      </Link>
    </Styled.FinishEditButton>
  );
}
