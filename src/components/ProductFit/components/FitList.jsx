import { staticAssets } from "lib/index";

import FitListCard from "./FitListCard";
import * as Styled from "./styles/FitList.styled";

function FitList() {
  return (
    <Styled.FitListContainer>
      {staticAssets.map((product) => (
        <FitListCard key={product} product={product} />
      ))}
    </Styled.FitListContainer>
  );
}

export default FitList;
