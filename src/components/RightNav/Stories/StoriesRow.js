/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const StoriesRow = ({ userImg, userName, userTime }) => (
  <div css={styles} className="storiesRow">
    <img src={userImg} alt="user" />
    <div className="userDesc">
      <h4>{userName}</h4>
      <p>{userTime}</p>
    </div>
  </div>
);

const styles = css`
  display: flex;
  padding: 10px 40px;
  cursor: pointer;
  img {
    width: 44px;
    height: 44px;
    display: block;
    border-radius: 50px;
    border: 2px solid orange;
    margin-right: 20px;
  }
  .userDesc {
    p {
      color: #595c6c;
    }
  }
`;

export default StoriesRow;
