import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { DYNAMIC_PATHS } from "config/paths";

import * as Styled from "./styles/FinishEditButton.styled";

interface FinishEditButtonT {
  productId: string;
}

const FinishEditButton: React.FC<FinishEditButtonT> = ({ productId }) => {
  const { t } = useTranslation();

  return (
    <Styled.FinishEditButton>
      <Link
        to={DYNAMIC_PATHS.active_product_page(productId)}
        state={{ productId }}
        className="finish-btn"
      >
        {t("crossover.finish_edit")}
      </Link>
    </Styled.FinishEditButton>
  );
};

export default FinishEditButton;
