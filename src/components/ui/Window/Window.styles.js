import styled from "styled-components";

export const WindowFrame = styled.section`
  position: relative;
  font-size: 12px;
  font-weight: normal;
  width: 520px;
  margin: 0 auto;
  border: 1px solid #111;
  background: #ccc;
  box-shadow: 1px 2px #111, inset 1px 1px 0px 0px #fff, inset -1px -1px 0px 0px #999;
`;

export const WindowTopBar = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 2px 0 2px;
  background-size: 3px 2px;
  margin: 0 0 0 0;
  &:after {
    content: "";
    display: block;
    position: absolute;
    background-color: #000;
    box-shadow: 0px 6px 0 0 #000, 0px 3px 0 #000, 0px -3px 0 0 #000;
    height: 1px;
    top: calc(50% - 2px);
    left: 22px;
    width: calc(100% - 45px);
  }
`;

export const WindowButton = styled.button`
  cursor: pointer;
  border: 0;
  position: absolute;
  ${({ position }) => (position === "left" ? "left: 3px;" : position === "right" ? "right: 3px;" : false)}
  top: 3px;
  padding: 1px;
  background-color: #222;
  box-shadow: inset -1px -1px 0px 0px #fff, inset 1px 1px 0px 0px #888;
  ${({ minimize }) =>
    minimize &&
    `&:before {
      content: "";
      display: block;
      position: absolute;
      top: calc(50% - 2px);
      left: 2px;
      height: 1px;
      width: calc(100% - 4px);
      background: #000;
      box-shadow: 0px 2px 0px;
    }
  `}
  &:after {
    content: "";
    display: block;
    height: 12px;
    width: 12px;
    background-image: linear-gradient(to bottom right, #999, #aaa, #bbb, #ccc, #ddd, #eee, #fff);
    border: 1px solid #222;
    box-shadow: inset 1px 1px 0px 0px #ccc, inset -1px -1px 0px 0px #888;
    text-indent: -99999em;
  }
  &:active {
    &:after {
      box-shadow: none;
    }
  }
`;

export const WindowTitle = styled.h1`
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  padding: 0 9px;
  display: inline-block;
  background: #ccc;
  position: relative;
  z-index: 1;
`;

export const WindowContent = styled.div`
  margin: 1px 4px 4px 4px;
  border: 1px solid #111;
  background-color: #ddd;
  padding: 9px;
  box-shadow: -1px -1px 0px 0px #999, 1px 1px 0px 0px #fff, inset 1px 1px 0px 0px #fff, inset -1px -1px 0px 0px #999;
`;
