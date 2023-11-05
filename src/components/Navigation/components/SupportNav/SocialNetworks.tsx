import { FacebookIcon, InstagramIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/SocialNetworks.styled";

const SocialNetworks: React.FC = () => {
  return (
    <Styled.SocialNetworks>
      <FacebookIcon />
      <InstagramIcon />
    </Styled.SocialNetworks>
  );
};

export default SocialNetworks;
