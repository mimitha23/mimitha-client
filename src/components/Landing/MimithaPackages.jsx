import { Link } from "react-router-dom";

import { Container } from "components/Layouts";
import * as Styled from "./styles/MimithaPackages.styled";

export default function MimithaPackages() {
  return (
    <Styled.MimithaPackagesContainer>
      <div className="packages-wrapper">
        <div className="packages-logo">
          <figure>
            <img src="/assets/mimitha-logo-large.png" alt="mimitha" />
          </figure>
        </div>
        <Styled.PackageBox position="bottom-right">
          <Link to="/products">
            <p>ახალი კოლექცია</p>
          </Link>
        </Styled.PackageBox>

        <Styled.PackageBox position="bottom-left">
          <Link to="/products">
            <p>შეარჩიე შენი სტილი</p>
          </Link>
        </Styled.PackageBox>

        <Styled.PackageBox position="top-right">
          <Link to="/products">
            <p>რას უხედება ?</p>
          </Link>
        </Styled.PackageBox>

        <Styled.PackageBox position="top-left">
          <Link to="/products">
            <p>
              უფრო მეტი <small>ვიდრე</small> დიზაინი
            </p>
          </Link>
        </Styled.PackageBox>
      </div>
    </Styled.MimithaPackagesContainer>
  );
}
