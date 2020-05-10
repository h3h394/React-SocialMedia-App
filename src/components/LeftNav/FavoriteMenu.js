/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import MenuRow from "./MenuRow";
import ForestIcon from "../../img/forestIcon.png";
import BirdIcon from "../../img/birdIcon.png";
import NatureIcon from "../../img/natureIcon.png";
import AnimalIcon from "../../img/animalIcon.png";
import BikeIcon from "../../img/bikeIcon.png";
import DanceIcon from "../../img/danceIcon.png";

const FavoriteMenu = ({ menuTitle }) => (
  <div css={styles} className="favoriteMenu">
    <h3>{menuTitle}</h3>
    <MenuRow menuIcon={ForestIcon} menuText="Forest" />
    <MenuRow menuIcon={BirdIcon} menuText="Birds" />
    <MenuRow menuIcon={NatureIcon} menuText="Nature" />
    <MenuRow menuIcon={AnimalIcon} menuText="Animals" />
    <MenuRow menuIcon={BikeIcon} menuText="Motorbike" />
    <MenuRow menuIcon={DanceIcon} menuText="Dance" />
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

export default FavoriteMenu;
