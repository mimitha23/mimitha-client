import { useTranslation } from "react-i18next";

import { CloseXIcon } from "components/Layouts/Icons";
import * as Styled from "./DeletionPopup.styled";

interface DeletionPopupT {
  targetName: string;
  onClose: () => void;
  onConfirm: () => void;
}

const DeletionPopup: React.FC<DeletionPopupT> = (props) => {
  const { t } = useTranslation();

  const onClose = () => props.onClose();
  const onDelete = () => props.onConfirm();

  return (
    <Styled.DeletionPopup onClick={onClose}>
      <div className="deletion-window" onClick={(e) => e.stopPropagation()}>
        <button
          className="deletion-window__close-btn"
          onClick={() => onClose()}
        >
          <CloseXIcon />
        </button>
        <span className="deletion-window__message">
          {t("crossover.delete_popup")}&nbsp;
          <span className="deletion-window__message-target">
            {props.targetName}
          </span>
          &nbsp;?
        </span>
        <div className="deletion-window__actions-box">
          <button
            className="deletion-window__actions-box--btn close"
            onClick={onClose}
          >
            {t("crossover.close")}
          </button>
          <button
            className="deletion-window__actions-box--btn confirm"
            onClick={onDelete}
          >
            {t("crossover.yes")}
          </button>
        </div>
      </div>
    </Styled.DeletionPopup>
  );
};

export default DeletionPopup;
