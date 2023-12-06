import React, { useState, useEffect } from "react";
import {
  AccountWrapper,
  StyledAccountButton,
  StyledAccountForm,
  StyledAccountFormItem,
  StyledAccountInput,
} from "./CustomerAccount.style";
import { Row, Form } from "antd";
import { useSelector } from "react-redux";

const CustomerAccount = ({
  customerAccount,
  updateCustomerAccount,
  deleteCustomerAccount,
}) => {
  const currentTheme = useSelector((state) => state.themes);
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    form.setFieldsValue(customerAccount);
  };

  const onSave = async (values) => {
    updateCustomerAccount(values);
    setIsEditing(false);
  };

  useEffect(() => {
    if (customerAccount) {
      form.setFieldsValue(customerAccount);
    }
  }, [customerAccount, form]);

  return (
    <AccountWrapper>
      <Row>
        <h1>Account</h1>
        <StyledAccountForm
          form={form}
          onFinish={onSave}
          layout="vertical"
          currentTheme={currentTheme}
        >
          {customerAccount &&
            Object.entries(customerAccount).map(([key, value]) => (
              <StyledAccountFormItem key={key} label={key} name={key}>
                <StyledAccountInput
                  disabled={!isEditing}
                  currentTheme={currentTheme}
                  value={value || ""}
                  onChange={(e) =>
                    form.setFieldsValue({
                      ...form.getFieldsValue(),
                      [key]: e.target.value,
                    })
                  }
                />
              </StyledAccountFormItem>
            ))}
          <StyledAccountFormItem>
            {isEditing ? (
              <StyledAccountButton type="primary" htmlType="submit">
                Save
              </StyledAccountButton>
            ) : (
              <>
                <StyledAccountButton onClick={toggleEdit}>
                  Edit
                </StyledAccountButton>
                <StyledAccountButton onClick={deleteCustomerAccount}>
                  Delete Account
                </StyledAccountButton>
              </>
            )}
          </StyledAccountFormItem>
        </StyledAccountForm>
      </Row>
    </AccountWrapper>
  );
};

export default CustomerAccount;
