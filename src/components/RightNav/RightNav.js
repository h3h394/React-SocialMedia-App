/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import RightMenu from "./RightMenu";
import Stories from "./Stories/Stories";
import Contacts from "./Contacts/Contacts";
import ContactSearch from "./ContactSearch";

const RightNav = () => (
  <div css={styles} className="rightNav">
    <RightMenu />
    <div className="wrapper">
      <Stories title="STORIES" />
      <Contacts title="CONTACTS" />
    </div>
    <ContactSearch />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 20%;
  min-height: 100vh;
  background: #151728;
  .wrapper {
    height: 100vh;
    max-height: 86vh;
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
`;

export default RightNav;
