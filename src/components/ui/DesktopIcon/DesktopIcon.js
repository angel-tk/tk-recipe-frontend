import { DesktopIconWrapper, DesktopIconImage, DesktopIconText } from "./DesktopIcon.styles";

const DesktopIcon = props => {
  return (
    <DesktopIconWrapper to={props.to} exact>
      <DesktopIconImage src={props.src} />
      <DesktopIconText>{props.children}</DesktopIconText>
    </DesktopIconWrapper>
  );
};

export default DesktopIcon;
