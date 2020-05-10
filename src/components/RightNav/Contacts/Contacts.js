/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ContactsRow from "./ContactsRow";
import ContactOne from "../../../img/contactOne.jpg";
import ContactTwo from "../../../img/contactTwo.jfif";
import ContactThree from "../../../img/contactThree.jpeg";
import ContactFour from "../../../img/contactFour.jpeg";
import ContactFive from "../../../img/contactFive.png";
import ContactSix from "../../../img/contactSix.jpg";
import ContactSeven from "../../../img/contactSeven.jfif";
import ContactEight from "../../../img/contactEight.jpg";
import ContactNine from "../../../img/contactNine.jfif";
import ContactTen from "../../../img/contactTen.jpg";

const Contacts = ({ title }) => (
  <div css={styles} className="contacts">
    <h3>{title}</h3>
    <ContactsRow
      contactImg={ContactOne}
      contactName="Andrei Mashrin"
      bg="#7fd222"
    />
    <ContactsRow
      contactImg={ContactTwo}
      contactName="Aryn Jacobssen"
      bg="#606a8d"
    />
    <ContactsRow
      contactImg={ContactThree}
      contactName="Carole Landu"
      bg="#606a8d"
    />
    <ContactsRow
      contactImg={ContactFour}
      contactName="Chineze Afa"
      bg="#7fd222"
    />
    <ContactsRow
      contactImg={ContactFive}
      contactName="Mok Kwang"
      bg="#7fd222"
    />
    <ContactsRow
      contactImg={ContactSix}
      contactName="Naomi Yepes"
      bg="#7fd222"
    />
    <ContactsRow
      contactImg={ContactSeven}
      contactName="Shaamikh Ale"
      bg="#7fd222"
    />
    <ContactsRow
      contactImg={ContactEight}
      contactName="Sofia Alcocer"
      bg="#dd1c20"
    />
    <ContactsRow
      contactImg={ContactNine}
      contactName="Wen Yahui"
      bg="#7fd222"
    />
    <ContactsRow
      contactImg={ContactTen}
      contactName="Leslee Moss"
      bg="#dd1c20"
    />
  </div>
);

const styles = css`
  width: 100%;
  padding: 30px 0 20px 0;
  h3 {
    font-size: 22px;
    line-height: 1;
    padding: 0 40px 16px 40px;
    font-size: 16px;
    font-weight: 600;
    color: #5c5e6e;
  }
`;

export default Contacts;
