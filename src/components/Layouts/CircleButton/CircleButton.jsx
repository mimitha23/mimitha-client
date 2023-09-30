import * as Styled from "./CircleButton.styled";

export default function CircleButton({ children, onClick, className }) {
  return (
    <Styled.CircleButton
      {...(className ? { className } : {})}
      onClick={onClick}
    >
      {children}
    </Styled.CircleButton>
  );
}
