import { useState } from "react";

export default function useFitProduct() {
  const [activeFit, setActiveFit] = useState("");

  function handleFitMannequin({ reset = false, src }) {
    if (reset) return setActiveFit("");
    setActiveFit(src);
  }

  function handleFitModel({ reset = false, src }) {
    if (reset) return setActiveFit("");
    setActiveFit(src);
  }

  return { handleFitMannequin, handleFitModel, activeFit };
}
