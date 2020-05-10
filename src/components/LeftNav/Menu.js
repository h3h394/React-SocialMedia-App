/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import MenuRow from "./MenuRow";
import HomeIcon from "../../img/homeIcon.png";
import NewsIcon from "../../img/newsIcon.png";
import ExploreIcon from "../../img/exploreIcon.png";
import FilesIcon from "../../img/filesIcon.png";
import GalleryIcon from "../../img/galleryIcon.png";
import EventsIcon from "../../img/eventsIcon.png";

const Menu = ({ menuTitle }) => (
  <div css={styles} className="menu">
    <h3>{menuTitle}</h3>
    <MenuRow menuIcon={HomeIcon} menuText="Home" />
    <MenuRow menuIcon={NewsIcon} menuText="Latest News" />
    <MenuRow menuIcon={ExploreIcon} menuText="Explore" />
    <MenuRow menuIcon={FilesIcon} menuText="Files" />
    <MenuRow menuIcon={GalleryIcon} menuText="Gallery" />
    <MenuRow menuIcon={EventsIcon} menuText="Events" />
  </div>
);

const styles = css`
  h3 {
    padding: 40px 0 16px 0;
    font-size: 16px;
    font-weight: 600;
    color: #5c5e6e;
  }
`;

export default Menu;
