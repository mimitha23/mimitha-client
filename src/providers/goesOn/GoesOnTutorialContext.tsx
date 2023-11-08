import { createContext, useContext, useReducer } from "react";

interface GoesOnTutorialContextT {
  state: GoesOnTutorialStateT;
  nextStep: (currentStep: GoesOnTutorialStepT) => void;
  previousStep: (currentStep: GoesOnTutorialStepT) => void;
}

export type GoesOnTutorialStepT = keyof typeof initialState;

interface GoesOnTutorialStateT {
  explainLock: boolean;
  explainEdit: boolean;
  explainGenerate: boolean;
  explainBuyNow: boolean;
  explainAddToCart: boolean;
}

interface GoesOnTutorialProviderT {
  children: React.ReactNode;
}

enum GoesOnTutorialActionT {
  NEXT_STEP = "NEXT_STEP",
  PREVIOUS_STEP = "PREVIOUS_STEP",
}

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
    dispatch({ type: GoesOnTutorialActionT.NEXT_STEP, value: currentStep });

  const previousStep = (currentStep: string) =>
    dispatch({ type: GoesOnTutorialActionT.PREVIOUS_STEP, value: currentStep });

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
  action: { type: GoesOnTutorialActionT; value: string }
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
