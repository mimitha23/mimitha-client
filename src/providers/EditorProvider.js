/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createContext, useContext, useEffect, useState } from "react";

import {
  selectActiveConfig,
  selectEditorVariants,
  selectAvailableProducts,
} from "store/selectors/editorSelectors";
import { useTranslationContext } from "./I18nextProvider";
import { editorActions } from "store/reducers/editorReducer";

const EditorContext = createContext({
  activeDropdown: false,
  setActiveDropdown: () => {},
  currentLocale: "",
  activeVariants: null,
  editorVariants: [],
  onChangeConfig: ({ currentVariantId, newVariantId }) => {},
  detectUnrecognizedVariants: ({ dropdownVariants, activeVariantId }) => {},
});

export default function EditorProvider({ children }) {
  const dispatch = useDispatch();
  const { currentLocale } = useTranslationContext();

  const editorVariants = useSelector(selectEditorVariants);
  const activeConfig = useSelector(selectActiveConfig);
  const availableProducts = useSelector(selectAvailableProducts);

  //////////////////////////
  // GET PRODUCT TO EDIT //
  ////////////////////////
  const { productId: registeredProductId } = useParams();

  useEffect(() => {
    dispatch(editorActions.getProductToEdit({ registeredProductId }));

    return () => {
      dispatch(editorActions.resetEditor());
    };
  }, []);

  ///////////////////////
  // CONTROL DROPDOWN //
  /////////////////////
  const [activeDropdown, setActiveDropdown] = useState(false);

  function onChangeConfig({ currentVariantId, newVariantId }) {
    dispatch(editorActions.changeConfig({ currentVariantId, newVariantId }));
  }

  function detectUnrecognizedVariants({ dropdownVariants, activeVariantId }) {
    const unrecognizedIds = [];

    dropdownVariants
      .map((variant) => variant._id)
      .filter((variantID) => variantID !== activeVariantId)
      .forEach((variantID) => {
        // 1. silently activate each id instead activeId
        const filterActiveConfigIds = () =>
          activeConfig.variants.filter(
            (variant) => variant !== activeVariantId
          );

        const newVariationIds = [...filterActiveConfigIds(), variantID];

        // 2 check availability
        const availableProduct = availableProducts.find(
          (product) =>
            product.variants.every((variant) =>
              newVariationIds.includes(variant)
            ) &&
            newVariationIds.every((variant) =>
              product.variants.includes(variant)
            )
        );

        // 3 if not available push into to unrecognizedIds
        if (!availableProduct) unrecognizedIds.push(variantID);
      });

    return unrecognizedIds;
  }

  return (
    <EditorContext.Provider
      value={{
        activeDropdown,
        setActiveDropdown,
        currentLocale,
        editorVariants,
        activeVariants: activeConfig?.variants || [],
        onChangeConfig,
        detectUnrecognizedVariants,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export const useEditorContext = () => useContext(EditorContext);
