/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import HeadingBg from "../../../img/mainBg.jfif";
import HeadingNav from "./HeadingNav";

const Heading = () => (
  <div css={styles} className="heading">
    <HeadingNav />
  </div>
);

const styles = css`
  width: 100%;
  height: 340px;
  background: url('${HeadingBg}') no-repeat center/cover;
  display: flex;
  align-items: flex-end;
  border-radius: 4px;
`;

export default Heading;
