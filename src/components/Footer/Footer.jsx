import * as Styled from "./Footer.styled";
import { ContainerFull } from "components/Layouts/index";

export default function Footer(props) {
  return (
    <Styled.Footer>
      <ContainerFull className="footer__container-full">
        <div className="footer-upper">
          <div className="footer-learn-more">
            <figure
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              className="footer-learn-more__figure"
            >
              <img src="assets/images/image-not-uploaded.png" alt="" />
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              earum recusandae veritatis odit magni maiores ea
            </p>
          </div>
          <div className="footer-support-list">
            <h2>დამატებითი ინფორმაცია</h2>
            <ul>
              <li>ჩვენს შესახებ</li>
              <li>კონტაქტი</li>
              <li>დახმარება</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; 2023&mdash; Mimitha Mkeravebis Khrova, Da Ara Mkholod...👿
            All Rights Reserved
          </p>
        </div>
      </ContainerFull>
    </Styled.Footer>
  );
}
