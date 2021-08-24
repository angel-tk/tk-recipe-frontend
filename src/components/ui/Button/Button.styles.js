import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  height: 22px;
  background-color: #dedede;
  display: inline-block;
  border-radius: 3px;
  border: 1px solid #000;
  box-shadow: inset -1px -1px 0px 0px #777, inset -2px -2px 0px 0px #aaa, inset 1px 1px 0px 0px #ddd, inset 2px 2px 0px 0px #fff;
  &:hover {
    box-shadow: inset -1px -1px 0px 0px #777, inset -2px -2px 0px 0px #aaa, inset 1px 1px 0px 0px #ddd, inset 2px 2px 0px 0px #fff, 0 0 0 1px #aaa, 0 0 0 2px #ddd, 0 0 0 3px #000;
  }
  &:active {
    color: #fff;
    background-color: #666;
    box-shadow: 0 0 0 1px #aaa, 0 0 0 2px #ddd, 0 0 0 3px #000, inset -1px -1px 0px 0px #888, inset -2px -2px 0px 0px #777, inset 1px 1px 0px 0px #444, inset 2px 2px 0px 0px #555;
  }
  + button {
    margin-left: 9px;
  }
`;
