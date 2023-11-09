import * as Styled from "./Spinner.styled";

const Spinner: React.FC = () => {
  return (
    <Styled.Spinner data-spinner>
      <div className="spinner-box"></div>
    </Styled.Spinner>
  );
};

export default Spinner;
