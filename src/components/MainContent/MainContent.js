/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Search from "./Heading/Search";
import Heading from "./Heading/Heading";
import Content from "./Content/Content";

const MainContent = () => (
  <div css={styles} className="mainContent">
    <Search />
    <div className="scrollContainer">
      <div className="container">
        <Heading />
        <Content />
      </div>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  min-height: 100vh;
  background: #24273b;
  .scrollContainer {
    width: 100%;
    margin: 24px auto;
    .container {
      width: 100%;
      padding: 0 24px;
      height: 100vh;
      max-height: 90vh;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px #272a3d;
        border-radius: 50px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: #3f4152;
      }
    }
  }
`;

export default MainContent;
