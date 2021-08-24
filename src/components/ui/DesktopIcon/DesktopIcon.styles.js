import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const DesktopIconWrapper = styled(NavLink)`
  text-align: center;
  margin: 0 7px;
  width: 75px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    opacity: 0.75;
  }
  &.active {
    text-decoration: underline;
  }
`;

export const DesktopIconImage = styled.img`
  width: 32px;
  display: block;
  margin: 0 auto;
`;

DesktopIconImage.defaultProps = {
  src: ""
};

export const DesktopIconText = styled.span`
  display: block;
  margin-top: 5px;
`;
