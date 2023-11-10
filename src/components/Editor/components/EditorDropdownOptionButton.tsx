import { useState, useEffect, useRef } from "react";

import { useEditorContext } from "providers/editor/EditorProvider";

import * as UI from ".";
import * as Styled from "./styles/EditorDropdownOptionButton.styled";

import { ProductVariantT } from "interface/DB/editor.types";

interface EditorDropdownOptionButtonT {
  variant: ProductVariantT;
  activeVariant: ProductVariantT | undefined;
  unrecognizedIds: Array<string>;
}

const EditorDropdownOptionButton: React.FC<EditorDropdownOptionButtonT> = ({
  variant,
  activeVariant,
  unrecognizedIds,
}) => {
  const { currentLocale, onChangeConfig } = useEditorContext();

  const isActiveVariant = activeVariant?._id === variant._id;
  const isUnrecognizedVariant = unrecognizedIds.includes(variant._id);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [showUnrecognizedMessage, setShowUnrecognizedMessage] = useState(false);
  const [unRecognizedMessagePosition, setUnRecognizedMessagePosition] =
    useState("left");

  const handleOnClick = () =>
    isUnrecognizedVariant
      ? setShowUnrecognizedMessage(() => true)
      : onChangeConfig({
          currentVariantId: activeVariant?._id || "",
          newVariantId: variant._id,
        });

  useEffect(() => {
    if (!showUnrecognizedMessage) return;

    const containerEl = document.querySelector(".dropdown-body");
    const buttonEl = buttonRef.current;

    if (containerEl && buttonEl) {
      const containerRect = containerEl.getBoundingClientRect();
      const buttonRect = buttonEl.getBoundingClientRect();

      const diffOnRightEdge = containerRect.right - buttonRect.right;

      if (diffOnRightEdge <= 250) setUnRecognizedMessagePosition("right");
    }

    const timeoutId = setTimeout(() => {
      setShowUnrecognizedMessage(() => false);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showUnrecognizedMessage]);

  const description =
    currentLocale === "ka" ? variant.description_ka : variant.description_en;

  return (
    <Styled.EditorDropdownOptionButton
      ref={buttonRef}
      onClick={handleOnClick}
      title={currentLocale === "ka" ? variant.label_ka : variant.label_en}
      className={`${isActiveVariant ? "active" : ""} ${
        isUnrecognizedVariant ? "unrecognized" : "available"
      }`}
    >
      <figure>
        <svg>
          <image xlinkHref={variant.icon} />
        </svg>
      </figure>

      {showUnrecognizedMessage && (
        <UI.EditorDropdownOptionButtonTooltip
          description={description}
          unRecognizedMessagePosition={unRecognizedMessagePosition}
        />
      )}
    </Styled.EditorDropdownOptionButton>
  );
};

export default EditorDropdownOptionButton;
