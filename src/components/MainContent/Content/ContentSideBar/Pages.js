/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PersonOneImg from "../../../../img/personOne.jfif";
import PersonTwoImg from "../../../../img/personTwo.jfif";
import PersonThreeImg from "../../../../img/personThree.jfif";

const Pages = () => (
  <div css={styles} className="pages">
    <div className="title">
      <h3>Your pages</h3>
      <i className="fas fa-ellipsis-h"></i>
    </div>
    <div className="pageRow">
      <img src={PersonOneImg} alt="person" />
      <p>Chandelle</p>
    </div>
    <div className="pageRow">
      <img src={PersonTwoImg} alt="person" />
      <p>Janet Jolie</p>
    </div>
    <div className="pageRow">
      <img src={PersonThreeImg} alt="person" />
      <p>Patrick Watsons</p>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  padding: 20px;
  background: #151728;
  border-radius: 4px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 14px;
    h3 {
      color: #5c5e6e;
      font-weight: 600;
    }
    i {
      cursor: pointer;
    }
  }
  .pageRow {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px 0;
    img {
      width: 40px;
      height: 40px;
      margin-right: 20px;
      border-radius: 50px;
    }
  }
`;

export default Pages;
