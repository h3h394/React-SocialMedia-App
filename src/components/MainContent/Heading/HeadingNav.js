/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AvatarBg from "../../../img/Avatar.jpg";

const HeadingNav = () => (
  <div css={styles} className="headingNav">
    <img src={AvatarBg} alt="avatar" />
    <h2>Milos</h2>
    <a href="#/">Timeline</a>
    <a href="#/">About</a>
    <a href="#/">Friends</a>
    <a href="#/">Photos</a>
    <a href="#/">More</a>
  </div>
);

const styles = css`
  width: 100%;
  background: #151728;
  padding-left: 220px;
  position: relative;
  img {
    width: 180px;
    height: 180px;
    display: block;
    border-radius: 50%;
    border: 2px solid 151728;
    position: absolute;
    left: 22px;
    top: -130px;
  }
  h2 {
    color: #fff;
    position: absolute;
    top: -60px;
    left: 220px;
    font-size: 27px;
    line-height: 1;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    display: inline-block;
    padding: 20px 14px;
    border-bottom: 3px solid #151728;
    transition: all 600ms ease-in-out;
    &:first-of-type,
    &:hover {
      background: #1b1d2e;
      border-bottom: 3px solid #1488fa;
    }
  }
`;

export default HeadingNav;
