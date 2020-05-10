/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AvatarImg from "../../img/Avatar.jpg";

const RightMenu = () => (
  <div css={styles} className="rightMenu">
    <div className="userSettings">
      <i className="far fa-envelope fa-lg"></i>
      <i className="far fa-bell fa-lg"></i>
    </div>
    <div className="userInfo">
      <p>Milos</p>
      <img src={AvatarImg} alt="avatar" />
      <i className="fas fa-caret-down fa-lg"></i>
    </div>
  </div>
);

const styles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  height: 60px;
  .userSettings {
    i {
      cursor: pointer;
      color: #64677a;
      &:last-of-type {
        margin-left: 30px;
        position: relative;
        &::after {
          position: absolute;
          content: "";
          width: 8px;
          height: 8px;
          background: #1b86f8;
          border-radius: 50px;
          top: -2px;
          right: 1px;
        }
      }
    }
  }
  .userInfo {
    display: flex;
    align-items: center;
    color: #64677a;
    img {
      width: 30px;
      height: 30px;
      display: block;
      border-radius: 50px;
      margin: 0 14px;
    }
    i {
      cursor: pointer;
      padding: 3px 0 0 0;
    }
  }
`;

export default RightMenu;
