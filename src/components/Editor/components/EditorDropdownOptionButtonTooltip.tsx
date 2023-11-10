import { useTranslation } from "react-i18next";
import * as Styled from "./styles/EditorDropdownOptionButtonTooltip.styled";

interface EditorDropdownOptionButtonTooltipT {
  description: string;
  unRecognizedMessagePosition: string;
}

const EditorDropdownOptionButtonTooltip: React.FC<
  EditorDropdownOptionButtonTooltipT
> = ({ description, unRecognizedMessagePosition }) => {
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
};

export default EditorDropdownOptionButtonTooltip;
