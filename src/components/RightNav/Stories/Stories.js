/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import StoriesRow from "./StoriesRow";
import StorieOneBg from "../../../img/storieOne.png";
import StorieTwoBg from "../../../img/storieTwo.jpg";
import StorieThreeBg from "../../../img/storieThree.jpg";
import StorieFourBg from "../../../img/storieFour.png";

const Stories = ({ title }) => (
  <div css={styles} className="stories">
    <h3>{title}</h3>
    <StoriesRow
      userImg={StorieOneBg}
      userName="Lisandro Matos"
      userTime="12 hours ago"
    />
    <StoriesRow
      userImg={StorieTwoBg}
      userName="Gvozden Boskovksy"
      userTime="29 minutes ago"
    />
    <StoriesRow
      userImg={StorieThreeBg}
      userName="Hnek Fortuin"
      userTime="3 hours ago"
    />
    <StoriesRow
      userImg={StorieFourBg}
      userName="Lubomir Dvorak"
      userTime="18 hours ago"
    />
  </div>
);

const styles = css`
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid #272a3a;
  h3 {
    font-size: 22px;
    line-height: 1;
    padding: 0 40px 16px 40px;
    font-size: 16px;
    font-weight: 600;
    color: #5c5e6e;
  }
`;

export default Stories;
