import { useStartAuth } from "hooks/api/Auth";
import { LoginIcon } from "components/Layouts/Icons";

export default function LoginButton() {
  const { startAuth } = useStartAuth();

  return (
    <button onClick={startAuth} className="nav__login-btn" title="log in">
      <LoginIcon />
    </button>
  );
}
