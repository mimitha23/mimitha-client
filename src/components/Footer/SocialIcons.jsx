import { FacebookIcon, InstagramIcon } from "components/Layouts/Icons/index";

export default function SocialIcons() {
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
