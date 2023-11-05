import * as Styled from "./styles/LoginButton.styled";

interface LoginButtonT {
  submitBtnCaption: string;
}

const LoginButton: React.FC<LoginButtonT> = ({ submitBtnCaption }) => {
  return (
    <Styled.LoginButton type="submit">{submitBtnCaption}</Styled.LoginButton>
  );
};

export default LoginButton;
