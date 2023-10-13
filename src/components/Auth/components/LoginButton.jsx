import * as Styled from "./styles/LoginButton.styled";

export default function LoginButton({ submitBtnCaption }) {
  return (
    <Styled.LoginButton type="submit">{submitBtnCaption}</Styled.LoginButton>
  );
}
