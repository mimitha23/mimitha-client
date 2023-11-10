import { useAppDispatch } from "store/hooks";
import { useNavigate } from "react-router-dom";

import { DYNAMIC_PATHS } from "config/paths";
import { editorActions } from "store/reducers/editor.reducer";

type OnStartEditArgsT = {
  productId: string;
  productRegistrationId: string;
};

export default function useOnStartEdit() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onStartEdit({ productId, productRegistrationId }: OnStartEditArgsT) {
    dispatch(editorActions.setActiveConfigId({ configId: productId }));
    navigate(DYNAMIC_PATHS.edit_product_page(productRegistrationId));
  }

  return onStartEdit;
}
