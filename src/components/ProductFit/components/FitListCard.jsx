import * as Styled from "./styles/FitList.styled";

export default function FitListCard({ product }) {
  return (
    <Styled.FitListCardContainer>
      <figure className="fit-list--card__fig">
        <img src={product} alt={product} loading="lazy" />
      </figure>
    </Styled.FitListCardContainer>
  );
}
