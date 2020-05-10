/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Introduction = () => (
  <div css={styles} className="introduction">
    <div className="title">
      <h3>Introduction</h3>
      <i className="fas fa-ellipsis-h"></i>
    </div>
    <div className="links">
      <div className="link">
        <p>
          <i className="fas fa-briefcase"></i>Product Designer at{" "}
          <a href="#/">Bravebist</a>
        </p>
      </div>
      <div className="link">
        <p>
          <i className="fas fa-home"></i>Live in <a href="#/">Hanoi, Vietnam</a>
        </p>
      </div>
      <div className="link">
        <p>
          <i className="fas fa-dharmachakra"></i>Player name{" "}
          <a href="#/">Quan Ha</a>
        </p>
      </div>
    </div>
  </div>
);

const styles = css`
  background: #151728;
  padding: 20px 30px;
  border-radius: 4px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 14px;
    h3 {
      color: #5c5e6e;
      font-weight: 600;
    }
    i {
      cursor: pointer;
    }
  }
  .links {
    .link {
      padding: 8px 0;
      p {
        color: #c3c5d5;
        font-size: 15px;
        i {
          margin-right: 12px;
        }
        a {
          text-decoration: none;
          display: inline-block;
          color: #1771d6;
        }
      }
    }
  }
`;

export default Introduction;
