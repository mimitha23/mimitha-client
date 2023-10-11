import { useTranslation } from "react-i18next";
import * as Styled from "./styles/EditorDropdownOptionButtonTooltip.styled";

export default function EditorDropdownOptionButtonTooltip({
  description,
  unRecognizedMessagePosition,
}) {
  const { t } = useTranslation();

  return (
    <Styled.EditorDropdownOptionButtonTooltip
      className={unRecognizedMessagePosition || ""}
    >
      {t("crossover.variant_conflict", {
        variant: description,
      })}
    </Styled.EditorDropdownOptionButtonTooltip>
  );
}
