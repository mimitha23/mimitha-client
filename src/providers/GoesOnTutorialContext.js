import { createContext, useContext, useReducer } from "react";

const GoesOnTutorialContext = createContext({
  state: {
    explainLock: false,
    explainEdit: false,
    explainGenerate: false,
    explainBuyNow: false,
    explainAddToCart: false,
  },
  nextStep: (currentStep) => {},
  previousStep: (currentStep) => {},
});

export default function GoesOnTutorialProvider({ children }) {
  const [state, dispatch] = useReducer(goesOnTutorialReducer, {
    explainGenerate: true,
    explainLock: false,
    explainEdit: false,
    explainBuyNow: false,
    explainAddToCart: false,
  });

  function nextStep(currentStep) {
    dispatch({ type: "NEXT_STEP", currentStep });
  }

  function previousStep(currentStep) {
    dispatch({ type: "PREVIOUS_STEP", currentStep });
  }

  return (
    <GoesOnTutorialContext.Provider value={{ state, nextStep, previousStep }}>
      {children}
    </GoesOnTutorialContext.Provider>
  );
}

export const useGoesOnTutorialContext = () => useContext(GoesOnTutorialContext);

function goesOnTutorialReducer(state, action) {
  switch (action.type) {
    case "PREVIOUS_STEP": {
      const currentStep = action.currentStep;

      const keys = Object.keys(state);
      const currentStepKeyIndex = keys.findIndex((k) => k === currentStep);
      const isFirstStep = currentStepKeyIndex === 0 ? true : false;

      if (isFirstStep) return state;

      const updatedState = {};

      Object.keys(state).forEach((k, i) => {
        updatedState[k] = i === currentStepKeyIndex - 1 ? true : false;
      });

      return { ...state, ...updatedState };
    }
    case "NEXT_STEP": {
      const currentStep = action.currentStep;

      const keys = Object.keys(state);
      const currentStepKeyIndex = keys.findIndex((k) => k === currentStep);
      const isLastStep = currentStepKeyIndex === keys.length - 1 ? true : false;

      const updatedState = {};

      if (isLastStep) {
        Object.keys(state).forEach((k, i) => {
          updatedState[k] = false;
        });
      } else {
        Object.keys(state).forEach((k, i) => {
          updatedState[k] = i === currentStepKeyIndex + 1 ? true : false;
        });
      }

      return { ...state, ...updatedState };
    }
    default:
      return state;
  }
}
