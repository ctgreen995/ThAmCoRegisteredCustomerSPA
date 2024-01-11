import React, { useEffect, useState } from "react";
import CustomerManagement from "./CustomerManagement";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { setCustomer } from "../../Redux/Slices/CustomerSlice";

const CustomerManagementContainer = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { user, getAccessTokenSilently } = useAuth0();
  const customer = useSelector((state) => state.customer.customer);
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();

  async function getCustomer() {
    const id = user.sub;
    const token = await getAccessTokenSilently();
    try {
      const response = await fetch(
        `${apiUrl}/customerManagement/getCustomerDetailsById/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch customer", response.statusText);
      }
      const customer = await response.json();

      dispatch(setCustomer(customer));
    } catch (error) {
      throw new Error("Failed to fetch customer", error.message);
    }
  }

  async function updateCustomer(customer) {
    try {
      dispatch(setCustomer(customer));
      const id = user.sub;
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${apiUrl}/customerManagement/updateCustomerById/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(customer),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to update customer details",
          response.statusText
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error("Unable to update customer details", error.message);
    }
  }

  async function deleteCustomer(customer) {
    try {
      const response = await fetch(
        `${apiUrl}/customerManagement/requestDeleteCustomerById/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete customer", response.statusText);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error("Unable to get customer from the server", error.message);
    }
  }

  async function getOrders() {
    try {
      const id = user.sub;
      const response = await fetch(
        `${apiUrl}/orders/getOrdersByCustomerId/${id}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get orders", response.statusText);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error("Unable to get orders from the server", error.message);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getCustomer();
      const orders = await getOrders();
      setOrders(orders);
    }
    fetchData();
  }, []);

  const saveDetails = (customerAccountDto, customerProfileDto) => {
    updatedCustomerData = {
      ...customer,
      customerAccountDto,
      customerProfileDto,
    };
    updateCustomer(updateCustomerData);
  };
  return (
    <CustomerManagement
      customer={customer}
      saveDetails={saveDetails}
      deleteCustomer={deleteCustomer}
      orders={orders}
    />
  );
};

export default CustomerManagementContainer;
