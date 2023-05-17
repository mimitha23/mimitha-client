import { useState } from "react";

export default function useFitProduct() {
  const [activeFit, setActiveFit] = useState("");

  function handleFitMannequin(reset = false) {
    if (reset) return setActiveFit("");
    setActiveFit("/assets/images/mannequin.jpg");
  }

  function handleFitModel(reset = false) {
    if (reset) return setActiveFit("");
    setActiveFit("/assets/images/model.webp");
  }

  return { handleFitMannequin, handleFitModel, activeFit };
}
