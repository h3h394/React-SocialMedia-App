/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import EventBg from "../../../../img/eventBg.jfif";

const Event = () => (
  <div css={styles} className="event">
    <div className="overlay">
      <p>Jan</p>
      <p>01</p>
    </div>
    <div className="eventBg"></div>
    <h4>Winter Wonderland</h4>
    <p>01st Jan, 2019 07:00AM</p>
  </div>
);

const styles = css`
  width: 100%;
  padding: 12px;
  background: #151728;
  border-radius: 4px;
  position: relative;
  margin: 20px 0;
  .overlay {
    position: absolute;
    left: 30px;
    top: 30px;
    p {
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      padding: 5px 18px;
      background: #1687fa;
      &:last-of-type {
        padding: 8px 18px;
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }
  .eventBg {
    width: 100%;
    height: 200px;
    background: url('${EventBg}') no-repeat center/cover;
  }
  h4 {
    color: #c3c5d5;
    font-weight: 500;
    font-size: 16px;
    margin: 12px 0 6px 0;
    line-height: 1;
  }
  p {
    color: #5c5e6e;
    font-size: 14px;
    font-weight: 600;
  }
`;

export default Event;
