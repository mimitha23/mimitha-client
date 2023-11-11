import { createContext, useContext, useReducer } from "react";

import {
  GoesOnTutorialContextT,
  GoesOnTutorialProviderT,
  GoesOnTutorialStateT,
  GOES_ON_TUTORIAL_ACTIONS,
} from "./goesOnTutorialProvider.types";

const GoesOnTutorialContext = createContext<GoesOnTutorialContextT>({
  state: {
    explainLock: false,
    explainEdit: false,
    explainGenerate: false,
    explainBuyNow: false,
    explainAddToCart: false,
  },
  nextStep: () => {},
  previousStep: () => {},
});

const initialState: GoesOnTutorialStateT = {
  explainGenerate: true,
  explainLock: false,
  explainEdit: false,
  explainBuyNow: false,
  explainAddToCart: false,
};

const GoesOnTutorialProvider: React.FC<GoesOnTutorialProviderT> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(goesOnTutorialReducer, initialState);

  const nextStep = (currentStep: string) =>
    dispatch({ type: GOES_ON_TUTORIAL_ACTIONS.NEXT_STEP, value: currentStep });

  const previousStep = (currentStep: string) =>
    dispatch({
      type: GOES_ON_TUTORIAL_ACTIONS.PREVIOUS_STEP,
      value: currentStep,
    });

  return (
    <GoesOnTutorialContext.Provider value={{ state, nextStep, previousStep }}>
      {children}
    </GoesOnTutorialContext.Provider>
  );
};

export default GoesOnTutorialProvider;

export const useGoesOnTutorialContext = () => useContext(GoesOnTutorialContext);

function goesOnTutorialReducer(
  state: GoesOnTutorialStateT,
  action: { type: GOES_ON_TUTORIAL_ACTIONS; value: string }
) {
  switch (action.type) {
    case "PREVIOUS_STEP": {
      const currentStep = action.value;

      const keys = Object.keys(state);
      const currentStepKeyIndex = keys.findIndex((k) => k === currentStep);

      const isFirstStep = currentStepKeyIndex === 0 ? true : false;

      if (isFirstStep) return state;

      const updatedState: GoesOnTutorialStateT = { ...initialState };

      Object.keys(state).forEach((k, i) => {
        updatedState[k as keyof typeof initialState] =
          i === currentStepKeyIndex - 1 ? true : false;
      });

      return { ...state, ...updatedState };
    }
    case "NEXT_STEP": {
      const currentStep = action.value;

      const keys = Object.keys(state);
      const currentStepKeyIndex = keys.findIndex((k) => k === currentStep);

      const isLastStep = currentStepKeyIndex === keys.length - 1 ? true : false;

      const updatedState: GoesOnTutorialStateT = { ...initialState };

      if (isLastStep)
        Object.keys(state).forEach((k, i) => {
          updatedState[k as keyof typeof initialState] = false;
        });
      else
        Object.keys(state).forEach((k, i) => {
          updatedState[k as keyof typeof initialState] =
            i === currentStepKeyIndex + 1 ? true : false;
        });

      return { ...state, ...updatedState };
    }
    default:
      return state;
  }
}
