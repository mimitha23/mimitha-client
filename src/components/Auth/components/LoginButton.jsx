import * as Styled from "./styles/LoginButton.styled";

export default function LoginButton({ onSubmit, submitBtnCaption }) {
  return (
    <Styled.LoginButton onClick={onSubmit}>
      {submitBtnCaption}
    </Styled.LoginButton>
  );
}
