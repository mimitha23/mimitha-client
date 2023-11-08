/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createContext, useContext, useEffect, useState, useRef } from "react";

import {
  editorActions,
  checkConfigAvailability,
} from "store/reducers/editor.reducer";
import { useTranslationContext } from "../globals/I18nextProvider";
import * as editorSelectors from "store/selectors/editor.selectors";

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
  pickUpVideoRef: null,
  placingVideoRef: null,
  onVideoEnd: () => {},
  editorVariants: [],
  onChangeConfig: ({ currentVariantId, newVariantId }) => {},
  detectUnrecognizedVariants: ({ dropdownVariants, activeVariantId }) => {},
});

export default function EditorProvider({ children }) {
  const dispatch = useDispatch();
  const { currentLocale } = useTranslationContext();

  const activeConfig = useSelector(editorSelectors.selectActiveConfig);
  const editorVariants = useSelector(editorSelectors.selectEditorVariants);
  const availableProducts = useSelector(
    editorSelectors.selectAvailableProducts
  );

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

  ////////////////////////
  // CONTROL VIEW MODE //
  //////////////////////

  const viewMode = useSelector(({ editor }) => editor.editor_change_by_mode);

  function onChangeViewMode() {
    const modeToChange = viewMode === "VIDEO" ? "IMAGE" : "VIDEO";
    dispatch(editorActions.changeMode(modeToChange));

    setViewMedia((prev) => ({
      ...prev,
      type: "VIDEO",
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

  const [viewMedia, setViewMedia] = useState({
    type: "", // IMAGE | VIDEO
    src: "", // the main asset src which one is shown on screen - it could be images src as well as video src
    secondarySrc: "", // this property is only used when viewMode is set to 'VIDEO'. we still have pickup video in the DOM but it's not shown. The reason is to prevent APP from flush during video changing between placing to pickUp
  });

  const pickUpVideoRef = useRef(null);
  const placingVideoRef = useRef(null);

  function onChangeConfig({ currentVariantId, newVariantId }) {
    if (viewMode === "IMAGE") {
      dispatch(editorActions.changeConfig({ currentVariantId, newVariantId }));
    } else if (viewMode === "VIDEO") {
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
        currentVariantId,
        newVariantId,
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
}

export const useEditorContext = () => useContext(EditorContext);
