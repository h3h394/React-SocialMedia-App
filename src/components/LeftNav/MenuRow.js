/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const MenuRow = ({ menuIcon, menuText }) => (
  <div css={styles} className="menuRow">
    <img src={menuIcon} alt="icon" />
    <a href="#/">{menuText}</a>
  </div>
);

const styles = css`
  display: flex;
  align-items: center;
  padding: 8px 0;
  img {
    width: 20px;
    height: auto;
    display: block;
    margin-right: 22px;
  }
  a {
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
  }
`;

export default MenuRow;
