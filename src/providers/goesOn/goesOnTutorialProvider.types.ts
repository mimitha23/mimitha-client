type GoesOnTutorialContextT = {
  state: GoesOnTutorialStateT;
  nextStep: (currentStep: GoesOnTutorialStepT) => void;
  previousStep: (currentStep: GoesOnTutorialStepT) => void;
};

type GoesOnTutorialStepT = keyof GoesOnTutorialStateT;

type GoesOnTutorialStateT = {
  explainLock: boolean;
  explainEdit: boolean;
  explainGenerate: boolean;
  explainBuyNow: boolean;
  explainAddToCart: boolean;
};

type GoesOnTutorialProviderT = {
  children: React.ReactNode;
};

enum GOES_ON_TUTORIAL_ACTIONS {
  NEXT_STEP = "NEXT_STEP",
  PREVIOUS_STEP = "PREVIOUS_STEP",
}

export type {
  GoesOnTutorialContextT,
  GoesOnTutorialProviderT,
  GoesOnTutorialStepT,
  GoesOnTutorialStateT,
};

export { GOES_ON_TUTORIAL_ACTIONS };
