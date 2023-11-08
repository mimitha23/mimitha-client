import * as Styled from "./styles/FitList.styled";

interface FitListCardT {
  product: string;
}

const FitListCard: React.FC<FitListCardT> = ({ product }) => {
  return (
    <Styled.FitListCardContainer>
      <figure className="fit-list--card__fig">
        <img src={product} alt={product} loading="lazy" />
      </figure>
    </Styled.FitListCardContainer>
  );
};

export default FitListCard;
