import { useStartAuth } from "hooks/api/Auth";
import { LoginIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/LoginButton.styled";

const LoginButton: React.FC = () => {
  const { startAuth } = useStartAuth();

  return (
    <Styled.LoginButton onClick={startAuth} title="log in">
      <LoginIcon />
    </Styled.LoginButton>
  );
};

export default LoginButton;
