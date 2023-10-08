/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createContext, useContext, useEffect, useState } from "react";

import {
  selectActiveConfig,
  selectEditorVariants,
  selectAvailableProducts,
} from "store/selectors/editor.selectors";
import { useTranslationContext } from "./I18nextProvider";
import { editorActions } from "store/reducers/editor.reducer";

const EditorContext = createContext({
  activeDropdown: false,
  setActiveDropdown: () => {},
  currentLocale: "",
  activeVariants: null,
  viewMode: "IMAGE",
  onChangeViewMode: () => {},
  viewMedia: {
    type: "",
    src: "",
  },
  isCleanUpProcess: false,
  onVideoEnd: () => {},
  editorVariants: [],
  onChangeConfig: ({ currentVariantId, newVariantId }) => {},
  detectUnrecognizedVariants: ({ dropdownVariants, activeVariantId }) => {},
});

export default function EditorProvider({ children }) {
  const dispatch = useDispatch();
  const { currentLocale } = useTranslationContext();

  const activeConfig = useSelector(selectActiveConfig);
  const editorVariants = useSelector(selectEditorVariants);
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

  const viewMode = useSelector(({ editor }) => editor.editor_change_by_mode);

  const [isCleanUpProcess, setIsCleanUpProcess] = useState(false);
  const [configChangeEventParamsSnapshot, setConfigChangeEventParamsSnapshot] =
    useState({
      currentVariantId: "",
      newVariantId: "",
    });
  const [viewMedia, setViewMedia] = useState({
    type: "",
    src: "",
  });

  useEffect(() => {
    if (viewMode === "IMAGE")
      setViewMedia((prev) => ({
        ...prev,
        type: "IMAGE",
        src: activeConfig.assets[0],
      }));
    else if (viewMode === "VIDEO")
      setViewMedia((prev) => ({
        ...prev,
        type: "VIDEO",
        src: activeConfig.placingVideo,
      }));
  }, [activeConfig]);

  function onVideoEnd() {
    dispatch(editorActions.changeConfig(configChangeEventParamsSnapshot));

    setIsCleanUpProcess(false);

    setConfigChangeEventParamsSnapshot({
      currentVariantId: "",
      newVariantId: "",
    });
  }

  function onChangeViewMode() {
    dispatch(
      editorActions.changeMode(viewMode === "VIDEO" ? "IMAGE" : "VIDEO")
    );

    setViewMedia((prev) => ({
      ...prev,
      type: "VIDEO",
      src: activeConfig.placingVideo,
    }));
  }

  function onChangeConfig({ currentVariantId, newVariantId }) {
    if (viewMode === "IMAGE") {
      dispatch(editorActions.changeConfig({ currentVariantId, newVariantId }));
    } else if (viewMode === "VIDEO") {
      setIsCleanUpProcess(true);

      setConfigChangeEventParamsSnapshot((prev) => ({
        ...prev,
        currentVariantId,
        newVariantId,
      }));

      setViewMedia((prev) => ({
        ...prev,
        type: "VIDEO",
        src: activeConfig.pickUpVideo,
      }));
    }
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
        viewMode,
        onChangeViewMode,
        viewMedia,
        isCleanUpProcess,
        onVideoEnd,
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
