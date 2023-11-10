/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { createContext, useContext, useEffect, useState, useRef } from "react";

import {
  editorActions,
  checkConfigAvailability,
} from "store/reducers/editor.reducer";
import { MIMITHA_LOCALES } from "config/consts";
import * as editorSelectors from "store/selectors/editor.selectors";
import { useTranslationContext } from "providers/globals/I18nextProvider";

import {
  ChangeEditorConfigArgsT,
  EDITOR_CHANGE_BY_MODE,
} from "interface/store/editor.reducer.types";
import {
  EditorContextT,
  EditorProviderT,
  ViewMediaStateT,
  DetectUnrecognizedVariantsArgsT,
} from "./editorProvider.types";
import { EditorProductT } from "interface/DB/editor.types";

const EditorContext = createContext<EditorContextT>({
  activeDropdown: "",
  setActiveDropdown: () => {},
  currentLocale: MIMITHA_LOCALES[0],
  activeVariants: [],
  viewMode: EDITOR_CHANGE_BY_MODE.IMAGE,
  onChangeViewMode: () => {},
  viewMedia: { type: EDITOR_CHANGE_BY_MODE.IMAGE, src: "" },
  isCleanUpProcess: false,
  pickUpVideoRef: null,
  placingVideoRef: null,
  onVideoEnd: () => {},
  editorVariants: {},
  onChangeConfig: () => {},
  detectUnrecognizedVariants: () => [],
});

const EditorProvider: React.FC<EditorProviderT> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { currentLocale } = useTranslationContext();

  const activeConfig = useAppSelector(editorSelectors.selectActiveConfig);
  const editorVariants = useAppSelector(editorSelectors.selectEditorVariants);
  const availableProducts = useAppSelector(
    editorSelectors.selectAvailableProducts
  );

  //////////////////////////
  // GET PRODUCT TO EDIT //
  ////////////////////////

  const { productId: registeredProductId } = useParams();

  useEffect(() => {
    if (!registeredProductId) return;

    dispatch(editorActions.getProductToEdit({ registeredProductId }));

    return () => {
      dispatch(editorActions.cleanUpEditor());
    };
  }, [registeredProductId]);

  ///////////////////////
  // CONTROL DROPDOWN //
  /////////////////////

  const [activeDropdown, setActiveDropdown] = useState("");

  ////////////////////////
  // CONTROL VIEW MODE //
  //////////////////////

  const [viewMedia, setViewMedia] = useState<ViewMediaStateT>({
    type: EDITOR_CHANGE_BY_MODE.IMAGE,
    src: "", // the main asset src which one is shown on screen - it could be images src as well as video src
    secondarySrc: "", // this property is only used when viewMode is set to 'VIDEO'. we still have pickup video in the DOM but it's not shown. The reason is to prevent APP from flush during video changing between placing to pickUp
  });

  const viewMode = useAppSelector(editorSelectors.selectEditorMode);

  function onChangeViewMode() {
    const modeToChange =
      viewMode === EDITOR_CHANGE_BY_MODE.VIDEO
        ? EDITOR_CHANGE_BY_MODE.IMAGE
        : EDITOR_CHANGE_BY_MODE.VIDEO;

    dispatch(editorActions.changeMode({ mode: modeToChange }));

    setViewMedia((prev) => ({
      ...prev,
      type: EDITOR_CHANGE_BY_MODE.IMAGE,
      src: activeConfig.placingVideo,
    }));
  }

  ////////////////////////////
  // CONTROL CONFIG CHANGE //
  //////////////////////////

  /**
  is used - when user changes config and viewMode is on 'VIDEO' (so pick up video is playing). 
  This state helps us to control DOM in dynamic way. 
  **/
  const [isCleanUpProcess, setIsCleanUpProcess] = useState(false);

  /**
  configChangeEventParamsSnapshot - when viewMode is on 'Video' and > onChangeConfig() event occurs
  we are not directly manipulating on activeConfig (we are not changing it).
  Instead firstly we are manipulating on DOM > playing pickUp video, and after pickUp video is ended then we are changing activeConfig.
  So in the case to keep access on (currentVariantId and newVariantId) params passed in to the onChangeConfig() event 
  into the onVideoEnd() event too, we are saving their snapshots in this state.
  **/
  const [configChangeEventParamsSnapshot, setConfigChangeEventParamsSnapshot] =
    useState({
      currentVariantId: "",
      newVariantId: "",
    });

  const pickUpVideoRef = useRef<null | HTMLVideoElement>(null);
  const placingVideoRef = useRef<null | HTMLVideoElement>(null);

  function onChangeConfig({
    currentVariantId,
    newVariantId,
  }: ChangeEditorConfigArgsT) {
    if (viewMode === EDITOR_CHANGE_BY_MODE.IMAGE) {
      dispatch(editorActions.changeConfig({ currentVariantId, newVariantId }));
    } else if (viewMode === EDITOR_CHANGE_BY_MODE.VIDEO) {
      if (placingVideoRef.current && placingVideoRef.current.autoplay === true)
        placingVideoRef.current.autoplay = false;

      setIsCleanUpProcess(true);

      setConfigChangeEventParamsSnapshot((prev) => ({
        ...prev,
        currentVariantId,
        newVariantId,
      }));

      /////////////////////////////////////////////////////

      /**
       as we already know when viewMode is set to 'VIDEO' and current event occurs we are not directly changing activeConfig
       like on 'IMAGE' mode above.
       We are playing pickUp video firstly, but we still need to have information on upcoming config,
       more specifically we need upcoming video placingVideo src to set it in viewMedia state as src property until pickUp video is playing 
       - once more in the case to prevent APP from flush during video changing between placing to pickUp
       **/

      const { availableProduct } = checkConfigAvailability({
        activeConfig,
        newVariantId,
        currentVariantId,
        availableProducts,
      });

      if (pickUpVideoRef.current && availableProduct) {
        setViewMedia((prev) => ({
          ...prev,
          src: availableProduct.placingVideo,
        }));

        pickUpVideoRef.current.play();
      }

      /////////////////////////////////////////////////////////
    }
  }

  function onVideoEnd() {
    dispatch(editorActions.changeConfig(configChangeEventParamsSnapshot));

    setIsCleanUpProcess(false);

    setConfigChangeEventParamsSnapshot({
      currentVariantId: "",
      newVariantId: "",
    });

    if (placingVideoRef.current) placingVideoRef.current.play();
  }

  function detectUnrecognizedVariants({
    activeVariantId,
    dropdownVariants,
  }: DetectUnrecognizedVariantsArgsT) {
    const unrecognizedIds: Array<string> = [];

    dropdownVariants
      .map((variant) => variant._id)
      .filter((variantID) => variantID !== activeVariantId)
      .forEach((variantID) => {
        // 1. silently activate each id instead activeId
        const filterActiveConfigIds = () =>
          activeConfig.variants.filter(
            (variant: string) => variant !== activeVariantId
          );

        const newVariationIds = [...filterActiveConfigIds(), variantID];

        // 2 check availability
        const availableProduct = availableProducts.find(
          (product: EditorProductT) =>
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

  useEffect(() => {
    if (viewMode === EDITOR_CHANGE_BY_MODE.IMAGE)
      setViewMedia((prev) => ({
        ...prev,
        type: EDITOR_CHANGE_BY_MODE.IMAGE,
        src: activeConfig.assets[0],
      }));
    else if (viewMode === EDITOR_CHANGE_BY_MODE.VIDEO)
      setViewMedia((prev) => ({
        ...prev,
        type: EDITOR_CHANGE_BY_MODE.VIDEO,
        src: activeConfig.placingVideo,
        secondarySrc: activeConfig.pickUpVideo,
      }));
  }, [activeConfig]);

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
        pickUpVideoRef,
        placingVideoRef,
        onVideoEnd,
        activeVariants: activeConfig?.variants || [],
        onChangeConfig,
        detectUnrecognizedVariants,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
export const useEditorContext = () => useContext(EditorContext);
