/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ContentSideBar from "./ContentSideBar/ContentSideBar";
import ContentPost from "./ContentPost/ContentPost";
import ContentOutput from './ContentPost/ContentOutput';

const Content = () => (
  <div css={styles} className="content">
    <ContentSideBar />
    <div className="contentContainer">
      <ContentPost />
      <ContentOutput/>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  .contentContainer {
    width: 100%;
    max-width: 67%;
  }
`;

export default Content;
