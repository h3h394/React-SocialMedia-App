/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ContactSearch = () => (
  <div css={styles} className="contactSearch">
    <div className="search">
      <input type="text" placeholder="Search" />
      <i className="fas fa-search"></i>
    </div>
    <div className="settingsIcons">
      <i className="fas fa-cog"></i>
      <i className="fas fa-pencil-alt"></i>
      <i className="fas fa-plus"></i>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  border-top: 1px solid #272a3a;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .search {
    position: relative;
    > i {
      position: absolute;
      top: 50%;
      left: 14px;
      transform: translateY(-50%);
    }
    input {
      border: none;
      outline: none;
      padding: 6px 40px;
      width: 160px;
      background: transparent;
      color: #fff;
      &::placeholder {
        color: #5c5e6e;
      }
    }
  }
  .settingsIcons {
    i {
      cursor: pointer;
      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
`;

export default ContactSearch;
