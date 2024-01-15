import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Typography, Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const CustomerManagement = ({
  customer,
  saveDetails,
  deleteCustomer,
  orders,
  logout,
}) => {
  if (!customer) {
    return <p>No Customer Details available.</p>;
  }
  const [editableProfile, setEditableProfile] = useState(
    customer.customerProfileDto
  );
  const [editableAccount, setEditableAccount] = useState(
    customer.customerAccountDto
  );
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteCustomer();
      setIsDeleteModalVisible(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleOk = () => {
    setIsDeleteModalVisible(false);
    logout();
    navigate("/");
  };

  useEffect(() => {
    setEditableProfile(customer.customerProfileDto);
    setEditableAccount(customer.customerAccountDto);
  }, [customer]);

  const handleProfileChange = (e) => {
    setEditableProfile({ ...editableProfile, [e.target.name]: e.target.value });
  };

  const handleAccountChange = (e) => {
    setEditableAccount({ ...editableAccount, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Title level={2}>Customer Management</Title>

      {/* Account Details Section */}
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={4}>Account Details</Title>
          <Form layout="vertical">
            <Form.Item label="Funds">
              <Input
                name="funds"
                value={editableAccount?.funds}
                onChange={handleAccountChange}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      {/* Profile Details Section */}
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={4}>Profile Details</Title>
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input
                name="name"
                value={editableProfile?.name}
                onChange={handleProfileChange}
              />
            </Form.Item>
            <Form.Item label="Address">
              <Input
                name="name"
                value={editableProfile?.address}
                onChange={handleProfileChange}
              />
            </Form.Item>
            <Form.Item label="Town">
              <Input
                name="name"
                value={editableProfile?.town}
                onChange={handleProfileChange}
              />
            </Form.Item>
            <Form.Item label="County">
              <Input
                name="name"
                value={editableProfile?.county}
                onChange={handleProfileChange}
              />
            </Form.Item>
            <Form.Item label="Postcode">
              <Input
                name="name"
                value={editableProfile?.postcode}
                onChange={handleProfileChange}
              />
            </Form.Item>
            <Form.Item label="Phone">
              <Input
                name="name"
                value={editableProfile?.phone}
                onChange={handleProfileChange}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                name="name"
                value={editableProfile?.email}
                onChange={handleProfileChange}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      {/* Order History */}
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={4}>Order History</Title>
          {orders && orders.length > 0 ? (
            orders.map((order, index) => (
              <div key={index}>
                <Title level={5}>Order Date: {order.orderDate}</Title>
                <p>Status: {order.status}</p>
                {order.productDtos.map((product, idx) => (
                  <div key={idx}>
                    <p>
                      {product.name}: {product.description} - £
                      {product.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Button
          id="saveChanges"
          type="primary"
          onClick={() => saveDetails(editableAccount, editableProfile)}
        >
          Save Changes
        </Button>
        <Button
          id="deleteAccount"
          type="primary"
          onClick={() => handleDelete()}
          style={{ marginLeft: "50px" }}
        >
          Delete Account
        </Button>
        <Modal
          title="Account Deletion"
          visible={isDeleteModalVisible}
          onOk={handleOk}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <p>Account Deleted</p>
        </Modal>
      </Row>
    </div>
  );
};

export default CustomerManagement;
