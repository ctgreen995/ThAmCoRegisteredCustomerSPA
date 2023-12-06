import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export const SubNavBar = styled(Menu)`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  background-color: ${(props) => props.theme.colors.grey};
  border-top: ${(props) =>
    props.theme.name == "light" ? "1px solid white" : "1px solid black"};
`;

export const SubNavItem = styled(Menu.Item)`
  height: 100%;
  border-radius: 0px !important;
  color: ${(props) => props.theme.colors.headerText};

  &:hover {
    width: 100%;
    color: ${(props) => props.theme.colors.headerText} !important;
    border-right: 2px solid ${(props) => props.theme.colors.blue} !important;
  }

  &.ant-menu-item-selected {
    &.ant-menu-item-selected {
      background-color: ${(props) =>
        props.theme.colors.grey} !important; /* Selected background color */
      color: ${(props) => props.theme.colors.headerText} !important;
      border-right: 2px solid ${(props) => props.theme.colors.blue} !important;
      width: 100%;
    }
    text-align: center;
  }
  text-align: center;
`;

export const SubNavLink = styled(Link)`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 3px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const NavButton = styled.button`
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;
