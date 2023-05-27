import { FacebookIcon, InstagramIcon } from "components/Layouts/Icons/index";

function SocialIcons() {
  return (
    <div className="footer__social-networks">
      <p>Follow Us</p>
      <div className="icons-container">
        <FacebookIcon className="footer__social-networks__icons" />
        <InstagramIcon className="footer__social-networks__icons" />
      </div>
    </div>
  );
}

export default SocialIcons;
