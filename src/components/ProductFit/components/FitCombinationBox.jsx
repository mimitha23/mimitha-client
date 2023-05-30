import FitCombinationFigure from "./FitCombinationFigure";
import FitCombinationActions from "./FitCombinationActions";
import * as Styled from "./styles/FitCombination.styled";

export default function FitCombinationBox() {
  return (
    <Styled.FitCombinationContainer>
      <div className="fit-view__figs-box">
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
        <FitCombinationFigure />
      </div>

      <FitCombinationActions />
    </Styled.FitCombinationContainer>
  );
}
