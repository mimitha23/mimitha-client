import { useSelector } from "react-redux";
import { selectActiveProductAssets } from "store/selectors/activeProductSelectors";
import { useTranslationContext } from "providers/I18nextProvider";

import * as Styled from "./styles/ProductView.styled";

export default function ProductView() {
  const { currentLocale } = useTranslationContext();
  const { assets, alt } = useSelector(selectActiveProductAssets);

  return (
    <Styled.ProductView className="editor-view">
      <figure className="editor-fig">
        <img src={assets[0]} alt={alt[currentLocale]} />
      </figure>
    </Styled.ProductView>
  );
}
