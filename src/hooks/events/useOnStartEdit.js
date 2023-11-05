import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";
import { editorActions } from "store/reducers/editor.reducer";

export default function useOnStartEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onStartEdit({ productId, productRegistrationId }) {
    dispatch(editorActions.setActiveConfigId(productId));
    navigate(
      PATHS.edit_product.fullPath({
        productId: productRegistrationId,
      })
    );
  }

  return onStartEdit;
}
