import * as Styled from "./styles/FormError.styled";

interface FormErrorT {
  message: string;
}

const FormError: React.FC<FormErrorT> = ({ message }) => {
  return <Styled.FormError>{message}</Styled.FormError>;
};

export default FormError;
