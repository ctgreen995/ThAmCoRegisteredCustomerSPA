import { Form, Input } from "antd";
import styled from "styled-components";

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  align-items: center;
  justify-content: center;
`;

export const StyledAccountForm = styled(Form)`
background-color: ${(props) =>
  props.currentTheme.name === "light"
    ? props.theme.colors.silver
    : props.theme.colors.gunmetalGrey}};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledAccountFormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  text-align: center;
`;

export const StyledAccountButton = styled.button`
  background-color: ${(props) => props.theme.colors.darkBlue}};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin: 10px 0;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #40a9ff;
  }
`;

export const StyledAccountInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: ${(props) =>
    props.currentTheme.name === "light"
      ? props.theme.colors.text
      : props.theme.colors.gunmetalGrey}};
`;
