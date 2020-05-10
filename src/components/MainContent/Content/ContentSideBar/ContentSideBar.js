/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Introduction from "./Introduction";
import Event from "./Event";
import Pages from "./Pages";

const ContentSideBar = () => (
  <div css={styles} className="contentSideBar">
    <Introduction />
    <Event />
    <Pages />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 30%;
`;

export default ContentSideBar;
