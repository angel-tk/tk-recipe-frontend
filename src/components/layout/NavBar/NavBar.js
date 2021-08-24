import { NavBarWrapper } from "./NavBar.styles";
import { DesktopIcon } from "../../ui";
import ImageAssets from "../../../assets/images";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <DesktopIcon src={ImageAssets.HomeIcon} to="/">
        Home
      </DesktopIcon>
      <DesktopIcon src={ImageAssets.NewRecipeIcon} to="/new-recipe/">
        Add recipe
      </DesktopIcon>
      <DesktopIcon src={ImageAssets.AboutIcon} to="/about/">
        About
      </DesktopIcon>
    </NavBarWrapper>
  );
};

export default NavBar;
