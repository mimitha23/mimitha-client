import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PATHS } from "config/routes";
import { useOnStartEdit } from "hooks/events";

import * as Styled from "./styles/CardActions.styled";

export default function CardActions({ productId, registeredProductId }) {
  const { t } = useTranslation();

  const onStartEdit = useOnStartEdit();

  function onEdit() {
    if (!productId) return;
    onStartEdit({ productId, productRegistrationId: registeredProductId });
  }

  return (
    <Styled.CardActions>
      {/* <button className="edit-btn">
        <Link to={PATHS.fit_products.fullPath({ productId })}>
          {t("crossover.goes_on")}
        </Link>
      </button> */}

      <button className="edit-btn" onClick={onEdit}>
        <Link
          to={PATHS.edit_product.fullPath({ productId: registeredProductId })}
        >
          {t("crossover.edit")}
        </Link>
      </button>
    </Styled.CardActions>
  );
}
