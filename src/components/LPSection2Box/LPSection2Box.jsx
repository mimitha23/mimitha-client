import * as Styled from "./LPSection2Box.Styled";

export default function LPSection2Box(props) {
  return (
    <>
      <Styled.LPSection2Box className={"kid1"}>
        <div>
          <p>ახალი კოლექცია</p>
        </div>
      </Styled.LPSection2Box>
      <Styled.LPSection2Box className={"kid2"}>
        <div>
          <p>შეარჩიე შენი სტილი</p>
        </div>
      </Styled.LPSection2Box>
      <Styled.LPSection2Box className={"kid3"}>
        <div>
          <p>რას უხედება ?</p>
        </div>
      </Styled.LPSection2Box>
      <Styled.LPSection2Box className={"kid4"}>
        <div>
          <p>
            უფრო მეტი <span>ვიდრე</span> დიზაინი
          </p>
        </div>
      </Styled.LPSection2Box>
    </>
  );
}
