import { useState, useEffect, useRef } from "react";
import { useEditorContext } from "providers/EditorProvider";

export default function EditorOptionButton({
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
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showUnrecognizedMessage]);

  return (
    <button
      ref={buttonRef}
      className={`variant__option-btn ${isActiveVariant ? "active" : ""} ${
        isUnrecognizedVariant ? "unrecognized" : "available"
      }`}
      title={variant[`description_${currentLocale}`]}
      onClick={handleOnClick}
      key={variant._id}
    >
      <figure>
        <svg>
          <image xlinkHref={variant.icon} alt={variant.description} />
        </svg>
      </figure>

      {showUnrecognizedMessage && (
        <p className={`unrecognized__message ${unRecognizedMessagePosition}`}>
          some message here
        </p>
      )}
    </button>
  );
}
