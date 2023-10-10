import { useStartAuth } from "hooks/api/Auth";
import { LoginIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/LoginButton.styled";

export default function LoginButton() {
  const { startAuth } = useStartAuth();

  return (
    <Styled.LoginButton onClick={startAuth} title="log in">
      <LoginIcon />
    </Styled.LoginButton>
  );
}
