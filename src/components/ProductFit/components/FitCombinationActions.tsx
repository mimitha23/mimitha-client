import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ArrowLeftIcon, BagIcon } from "components/Layouts/Icons";

const FitCombinationActions: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="fit-view__actions-box">
      <button
        onClick={() => navigate(-1)}
        className="fit-view__action-btn fit-view__action-btn--back"
      >
        <span>
          <ArrowLeftIcon />
        </span>
        <span>{t("crossover.go_back")}</span>
      </button>

      <button className="fit-view__action-btn">
        <span>{t("crossover.add_to_card")}</span>
        <span>
          <BagIcon />
        </span>
      </button>
    </div>
  );
};

export default FitCombinationActions;
