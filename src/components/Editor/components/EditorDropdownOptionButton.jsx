import { useState, useEffect, useRef } from "react";

import { useEditorContext } from "providers/editor/EditorProvider";

import * as UI from "./";
import * as Styled from "./styles/EditorDropdownOptionButton.styled";

export default function EditorDropdownOptionButton({
  variant,
  activeVariant,
  unrecognizedIds,
}) {
  const { currentLocale, onChangeConfig } = useEditorContext();

  const isActiveVariant = activeVariant?._id === variant._id;
  const isUnrecognizedVariant = unrecognizedIds.includes(variant._id);

  const buttonRef = useRef(null);
  const [showUnrecognizedMessage, setShowUnrecognizedMessage] = useState(false);
  const [unRecognizedMessagePosition, setUnRecognizedMessagePosition] =
    useState("left");

  const handleOnClick = () =>
    isUnrecognizedVariant
      ? setShowUnrecognizedMessage((prev) => true)
      : onChangeConfig({
          currentVariantId: activeVariant?._id,
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
      setShowUnrecognizedMessage((prev) => false);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showUnrecognizedMessage]);

  return (
    <Styled.EditorDropdownOptionButton
      ref={buttonRef}
      onClick={handleOnClick}
      title={variant[`description_${currentLocale}`]}
      className={`${isActiveVariant ? "active" : ""} ${
        isUnrecognizedVariant ? "unrecognized" : "available"
      }`}
    >
      <figure>
        <svg>
          <image xlinkHref={variant.icon} alt={variant.description} />
        </svg>
      </figure>

      {showUnrecognizedMessage && (
        <UI.EditorDropdownOptionButtonTooltip
          description={variant[`description_${currentLocale}`]}
          unRecognizedMessagePosition={unRecognizedMessagePosition}
        />
      )}
    </Styled.EditorDropdownOptionButton>
  );
}
