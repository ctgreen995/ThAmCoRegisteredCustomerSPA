import React, { useEffect, useState } from "react";
import CustomerAccount from "./CustomerAccount";
import { useAuth0 } from "@auth0/auth0-react";
import { customer } from "../../Models/Customer";

const CustomerAccountContainer = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [customerAccount, setCustomerAccount] = useState(customer);

  const getCustomerAccount = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch("customer/getCustomerAccount", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setCustomerAccount(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateCustomerAccount = async (updatedAccount) => {
    try {
      const token = await getAccessTokenSilently();
      await fetch("customer/updateCustomerAccount", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedAccount),
      });
      setCustomerAccount(updatedAccount);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteCustomerAccount = async () => {
    try {
      const token = await getAccessTokenSilently();
      const id = customerAccount.id;
      const response = await fetch(`customer/deleteCustomerAccount/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete customer account");
      }

      setCustomerAccount(null);
      message.success("Account deleted successfully");
    } catch (error) {
      console.error(error);
      message.error("Error deleting account");
    }
  };

  useEffect(() => {
    // getCustomerAccount();
  }, []);

  return (
    <CustomerAccount
      customerAccount={customerAccount}
      updateCustomerAccount={setCustomerAccount}
      deleteCustomerAccount={deleteCustomerAccount}
    />
  );
};

export default CustomerAccountContainer;
