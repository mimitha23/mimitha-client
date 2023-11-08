import { useLocation } from "react-router-dom";

import { Filter, Path } from "components/Layouts";
import * as Styled from "./styles/AllProductsHeader.styled";

const AllProductsHeader: React.FC = () => {
  const { state } = useLocation();

  return (
    <Styled.AllProductsHeader>
      <Path showSearch={true} />

      <Filter
        showProductTypeFilter={state?.productType?.query ? false : true}
        showGenderFilter={!["men", "women"].includes(state?.category)}
      />
    </Styled.AllProductsHeader>
  );
};

export default AllProductsHeader;
