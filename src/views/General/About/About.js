import { AppInfoIconWrapper, Window } from "../../../components/ui/";
import ImageAssets from "../../../assets/images/";

const About = () => {
  return (
    <Window title="About this app">
      <AppInfoIconWrapper>
        <img src={ImageAssets.BurgerIcon} alt="Burger Icon" />
      </AppInfoIconWrapper>
      <p>This is an app where you can search for recipes, remove the ones you don't like, edit them and add new ones.</p>
    </Window>
  );
};

export default About;
