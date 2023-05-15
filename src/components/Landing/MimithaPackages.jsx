import * as Styled from "./styles/MimithaPackages.styled";
import { Container } from "components/Layouts";

export default function MimithaPackages(props) {
  return (
    <Styled.MimithaPackagesContainer>
      <Container>
        <div className="packages-wrapper">
          <Styled.PackageBox position="bottom-right">
            <p>ახალი კოლექცია</p>
          </Styled.PackageBox>
          <Styled.PackageBox position="bottom-left">
            <p>შეარჩიე შენი სტილი</p>
          </Styled.PackageBox>
          <Styled.PackageBox position="top-right">
            <p>რას უხედება ?</p>
          </Styled.PackageBox>
          <Styled.PackageBox position="top-left">
            <p>
              უფრო მეტი <small>ვიდრე</small> დიზაინი
            </p>
          </Styled.PackageBox>
        </div>
      </Container>
    </Styled.MimithaPackagesContainer>
  );
}
