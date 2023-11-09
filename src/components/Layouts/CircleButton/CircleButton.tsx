import * as Styled from "./CircleButton.styled";

interface CircleButtonT {
  className?: string;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

const CircleButton: React.FC<CircleButtonT> = (props) => {
  return (
    <Styled.CircleButton
      {...(props.className ? { className: props.className } : {})}
      onClick={props.onClick}
    >
      {props.children}
    </Styled.CircleButton>
  );
};

export default CircleButton;
