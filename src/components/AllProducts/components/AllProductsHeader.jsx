import { Filter, Path } from "components/Layouts";
import * as Styled from "./styles/AllProductsHeader.styled";

export default function AllProductsHeader({ state }) {
  return (
    <Styled.AllProductsHeader>
      <Path showSearch={true} />

      <Filter
        showProductTypeFilter={state?.productType?.query ? false : true}
        showGenderFilter={!["men", "women"].includes(state?.category)}
      />
    </Styled.AllProductsHeader>
  );
}
