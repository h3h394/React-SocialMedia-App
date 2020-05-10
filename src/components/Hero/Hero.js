/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LeftNav from "../LeftNav/LeftNav";
import MainContent from "../MainContent/MainContent";
import RightNav from "../RightNav/RightNav";

const Hero = () => (
  <section css={styles} className="hero">
    <LeftNav />
    <MainContent />
    <RightNav />
  </section>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

export default Hero;
