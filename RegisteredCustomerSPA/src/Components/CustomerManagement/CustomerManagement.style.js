import styled from "styled-components";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
const { Header } = Layout;

export const CustomerManagementWrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const StyledHeader = styled(Header)`
  color: ${(props) => props.theme.colors.headerText};
  background-color: ${(props) => props.theme.colors.green};
  width: 90%;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

export const NavLinkContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  margin-top: 10px;
  &:hover {
    color: #40a9ff;
  }
`;
