/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Menu from "./Menu";
import FavoriteMenu from "./FavoriteMenu";

const LeftNav = () => (
  <div css={styles} className="leftNav">
    <h2>ULTRANET</h2>
    <Menu menuTitle="MENU" />
    <FavoriteMenu menuTitle="YOUR FAVORITE" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 20%;
  min-height: 100vh;
  padding: 20px 36px;
  border-right: 1px solid #272a3a;
  background: #151728;
  h2 {
    text-align: center;
    color: #fff;
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 1.9px;
  }
`;

export default LeftNav;
