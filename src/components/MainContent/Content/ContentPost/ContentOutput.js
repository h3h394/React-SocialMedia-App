/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AvatarImg from "../../../../img/Avatar.jpg";
import AlbumOneImg from "../../../../img/albumOne.jfif";
import AlbumTwoImg from "../../../../img/albumTwo.jfif";
import AlbumThreeImg from "../../../../img/albumThree.jfif";

const ContentOutput = () => (
  <div css={styles} className="contentOutput">
    <div className="outputHeading">
      <div className="infoContainer">
        <img src={AvatarImg} alt="avatar" />
        <div className="info">
          <h2>
            Quan Ha created new <a href="#/">album</a>
          </h2>
          <p>6 hours ago</p>
        </div>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
    <h3>When the bass drops, so do my problems.</h3>
    <div className="imageContainer">
      <img src={AlbumOneImg} alt="album" />
      <div className="sideImages">
        <img src={AlbumTwoImg} alt="album" />
        <img src={AlbumThreeImg} alt="album" />
      </div>
    </div>
    <div className="socialStats">
      <div className="stat">
        <i className="far fa-heart"></i>
        <p>87</p>
      </div>
      <div className="stat">
        <i className="far fa-comment"></i>
        <p>20</p>
      </div>
      <div className="stat">
        <i className="fas fa-retweet"></i>
        <p>13</p>
      </div>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  background: #151728;
  margin: 20px 0 0 0;
  padding: 20px;
  border-radius: 4px;
  .outputHeading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .infoContainer {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        display: block;
        border-radius: 50px;
        margin-right: 26px;
      }
      .info {
        h2 {
          font-size: 18px;
          font-weight: 500;
          line-height: 1;
          color: #ccc8db;
          a {
            color: #1771d6;
            text-decoration: none;
            display: inline-block;
          }
        }
        p {
          color: #595c6c;
          margin: 3px 0 0 0;
          font-size: 15px;
        }
      }
    }
    i {
      cursor: pointer;
    }
  }
  h3 {
    padding: 24px 0 28px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
  }
  .imageContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    img {
      width: 49%;
      height: 254px;
      border-radius: 4px;
    }
    .sideImages {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 14px;
      img {
        height: 120px;
        width: 100%;
        &:first-of-type {
          margin-bottom: 14px;
        }
      }
    }
  }
  .socialStats {
    display: flex;
    padding: 20px 0 0 0;
    .stat {
      display: flex;
      align-items: center;
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        i,
        p {
          color: #fff;
        }
      }
      i,
      p {
        color: #a2a4b4;
        transition: color 400ms ease-in-out;
      }
      i {
        margin-right: 6px;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;

export default ContentOutput;
