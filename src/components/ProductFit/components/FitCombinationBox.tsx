import { v4 as uuid } from "uuid";

import FitCombinationFigure from "./FitCombinationFigure";
import FitCombinationActions from "./FitCombinationActions";
import * as Styled from "./styles/FitCombination.styled";

const staticAssets = [
  "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542219550-2da790bf52e9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const FitCombinationBox: React.FC = () => {
  return (
    <Styled.FitCombinationContainer>
      <div className="fit-view__figs-box">
        {staticAssets.map((asset) => (
          <FitCombinationFigure key={uuid()} src={asset} />
        ))}
      </div>

      <FitCombinationActions />
    </Styled.FitCombinationContainer>
  );
};

export default FitCombinationBox;
