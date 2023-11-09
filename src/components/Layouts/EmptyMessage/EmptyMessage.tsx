import * as Styled from "./EmptyMessage.styled";

interface EmptyMessageT {
  message: string;
}

const EmptyMessage: React.FC<EmptyMessageT> = ({ message }) => {
  return <Styled.EmptyMessage>{message}</Styled.EmptyMessage>;
};

export default EmptyMessage;
