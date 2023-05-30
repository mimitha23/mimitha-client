import {
  CardFig,
  CardContentWithActions,
  CardContentDescriptive,
} from "./components/index";
import * as Styled from "./ProductCard.styled";
import { CardContent } from "./components/styles/CardContent.styled";

export default function ProductCard({ cardType = "withActions" }) {
  return (
    <Styled.ProductCard data-product-card>
      <CardFig />

      <CardContent cardType={cardType}>
        {cardType === "withActions" && <CardContentWithActions />}
        {cardType === "descriptive" && <CardContentDescriptive />}
      </CardContent>
    </Styled.ProductCard>
  );
}
