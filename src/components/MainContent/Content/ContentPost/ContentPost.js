/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AvatarImg from "../../../../img/Avatar.jpg";
import UserIcon from "../../../../img/userIcon.png";
import MapIcon from "../../../../img/mapIcon.png";
import MoodIcon from "../../../../img/moodIcon.png";

const ContentPost = () => (
  <div css={styles} className="contentPost">
    <div className="postNav">
      <a href="#/">Status</a>
      <a href="#/">Photos</a>
      <a href="#/">Videos</a>
    </div>
    <div className="post">
      <img src={AvatarImg} alt="user" />
      <input type="text" placeholder="Write something to Quan Ha.." />
    </div>
    <div className="options">
      <div className="optionsContainer">
        <div className="item">
          <img src={UserIcon} alt="user" />
          <a href="#/">People</a>
        </div>
        <div className="item">
          <img src={MapIcon} alt="map" />
          <a href="#/">Check in</a>
        </div>
        <div className="item">
          <img src={MoodIcon} alt="mood" />
          <a href="#/">Mood</a>
        </div>
      </div>
      <button>Share</button>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  background: #151728;
  border-radius: 4px;
  .postNav {
    display: flex;
    padding: 22px;
    a {
      text-decoration: none;
      display: inline-block;
      width: 82px;
      margin-right: 20px;
      padding: 6px;
      text-align: center;
      color: #fff;
      border-radius: 50px;
      font-size: 15px;
      font-weight: 600;
      transition: background 500ms ease-in-out;
      &:first-of-type,
      &:hover {
        background: #2e2e40;
      }
    }
  }
  .post {
    display: flex;
    padding: 0 22px 22px 22px;
    img {
      width: 50px;
      height: 50px;
      display: block;
      margin-right: 30px;
      border-radius: 50px;
    }
    input {
      border: none;
      outline: none;
      background: transparent;
      color: #fff;
      width: 60%;
      &::placeholder {
        color: #5c5e6e;
        font-weight: 600;
      }
    }
  }
  .options {
    padding: 14px 22px;
    border-top: 1px solid #272a3a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .optionsContainer {
      display: flex;
      .item {
        margin-right: 14px;
        display: flex;
        img {
          margin-right: 10px;
          width: 20px;
          height: auto;
          display: block;
        }
        a {
          text-decoration: none;
          display: inline-block;
          font-size: 15px;
        }
      }
    }
    button {
      border: none;
      outline: none;
      background: #1b86f9;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      padding: 10px 24px;
      border-radius: 4px;
      box-shadow: 0 0 13px #1b86f9;
      cursor: pointer;
    }
  }
`;

export default ContentPost;
