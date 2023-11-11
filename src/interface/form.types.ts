type ReactHookFormFieldPropsT = {
  name: string;
  disabled?: boolean;
  value: string;
  ref: React.RefCallback<HTMLElement>;
  onChange: (e: React.ChangeEvent) => void;
  onBlur: (e: React.FocusEvent) => void;
};

type ReactHookFormSubmitEventT = (
  e?: React.BaseSyntheticEvent<object, any, any> | undefined
) => Promise<void>;

export type { ReactHookFormFieldPropsT, ReactHookFormSubmitEventT };
