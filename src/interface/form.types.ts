export interface ReactHookFormFieldPropsT {
  name: string;
  disabled?: boolean;
  value: string;
  ref: React.RefCallback<HTMLElement>;
  onChange: (e: React.ChangeEvent) => void;
  onBlur: (e: React.FocusEvent) => void;
}

export type ReactHookFormSubmitEventT = (
  e?: React.BaseSyntheticEvent<object, any, any> | undefined
) => Promise<void>;
