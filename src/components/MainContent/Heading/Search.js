/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Search = () => (
  <div css={styles} className="search">
    <i className="fas fa-search"></i>
    <input type="text" placeholder="Search" />
  </div>
);

const styles = css`
  background: #151728;
  height: 60px;
  position: relative;
  i {
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
  }
  input {
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    padding: 0 70px;
    color: #fff;
    &::placeholder {
      color: #5c5e6e;
      font-weight: 700;
      font-size: 15px;
    }
  }
`;

export default Search;
