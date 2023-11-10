import { MutableRefObject, useEffect, useRef } from "react";

export default function useClickOutside<T extends HTMLElement>(
  isActive: boolean,
  handler: () => void
): MutableRefObject<T | null> {
  const container_ref = useRef<T | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (container_ref.current && !container_ref.current.contains(target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, isActive]);

  return container_ref;
}
