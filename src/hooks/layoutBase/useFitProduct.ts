import { useState } from "react";

type HandleFitMannequinArgsT = {
  src: string;
  reset?: boolean;
};

type HandleFitModelArgsT = {
  src: string;
  reset?: boolean;
};

export default function useFitProduct() {
  const [activeFit, setActiveFit] = useState("");

  function handleFitMannequin({ reset = false, src }: HandleFitMannequinArgsT) {
    if (reset) return setActiveFit("");
    setActiveFit(src);
  }

  function handleFitModel({ reset = false, src }: HandleFitModelArgsT) {
    if (reset) return setActiveFit("");
    setActiveFit(src);
  }

  return { handleFitMannequin, handleFitModel, activeFit };
}
