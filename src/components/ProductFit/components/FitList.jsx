import { staticAssets } from "lib/index";

import FitListCard from "./FitListCard";
import * as Styled from "./styles/FitList.styled";
import { Filter } from "components/Layouts";

export default function FitList() {
  return (
    <Styled.FitListContainer>
      <div className="fit-list__filter-box">
        <Filter />
      </div>
      <div className="fit-list__products">
        {staticAssets.map((product) => (
          <FitListCard key={product} product={product} />
        ))}
      </div>
    </Styled.FitListContainer>
  );
}
