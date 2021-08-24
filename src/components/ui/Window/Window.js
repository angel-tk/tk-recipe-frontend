import { WindowFrame, WindowTopBar, WindowButton, WindowTitle, WindowContent } from "./Window.styles";

const Window = props => {
  return (
    <WindowFrame>
      <WindowTopBar>
        <WindowButton position="left" />
        <WindowTitle>{props.title}</WindowTitle>
        <WindowButton position="right" minimize="true" minimized="false" />
      </WindowTopBar>
      <WindowContent>{props.children}</WindowContent>
    </WindowFrame>
  );
};

export default Window;
