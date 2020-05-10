/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ContactsRow = ({ contactImg, contactName, bg }) => (
  <div css={styles} className="contactsRow">
    <div className="contactInfo">
      <img src={contactImg} alt="contact" />
      <p>{contactName}</p>
    </div>
    <div style={{ background: bg }} className="dot"></div>
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  .contactInfo {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      display: block;
      border-radius: 50px;
      margin-right: 20px;
    }
    p {
      color: #ccc8db;
      font-size: 15px;
    }
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50px;
  }
`;

export default ContactsRow;
