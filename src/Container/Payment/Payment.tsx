import React from "react";
import { Divider, message } from "antd";
import {
  Button,
  Flex,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Typography,
  FormProps,
} from "antd";

import { useSelector } from "react-redux";
import { StyledFrag, StyledSpace, StyleParagraph } from "./components/styles";
import styled from "styled-components";
const { Title, Text, Paragraph } = Typography;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: green !important;
  margin-top: 2rem;
`;

const Payment: React.FC = () => {
  // Select Items array in React State
  const items = useSelector((state: any) => state?.cart.items);

  // Using reduce find the total ammount
  const totalAmount = items.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  // Order place notification state.
  const [messageApi, contextHolder] = message.useMessage();

  // Dummy message showing order placement
  function handleOnClick() {
    messageApi.info("Order Placed");
  }

  //
  type FieldType = {
    contact?: string;
    remember?: string;
    delivery?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    furtherAddress?: string;
    city?: string;
    postalCode?: string;
    phone?: number;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    handleOnClick();
    // Clear cart item after placing order
    localStorage.removeItem("cart");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Flex gap="middle">
      <StyledFrag style={{ borderRight: "2px solid orange" }}>
        {contextHolder}
        <Text>Please fill out the below information to place an order.</Text>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="contact"
            rules={[{ required: true, message: "Enter your email address!" }]}
          >
            <Title level={5}>Contact</Title>
            <Input placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item<FieldType> name="delivery">
            <Title level={5}>Delivery</Title>
            <Select
              defaultValue="Pakistan"
              style={{ width: "27vw", marginBottom: "1rem" }}
              options={[{ value: "Pakistan", label: "Pakistan" }]}
            />
          </Form.Item>

          <Flex>
            <Form.Item<FieldType>
              name="firstName"
              style={{ width: "100%" }}
              rules={[{ required: true, message: "Enter your first name!" }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item<FieldType> name="lastName" style={{ width: "100%" }}>
              <Input placeholder="Last Name" />
            </Form.Item>
          </Flex>
          <Form.Item<FieldType>
            name="address"
            style={{ width: "100%" }}
            rules={[{ required: true, message: "Enter your Postal Adress" }]}
          >
            <Input placeholder="Postal Address" />
          </Form.Item>
          <Form.Item<FieldType> name="furtherAddress" style={{ width: "100%" }}>
            <Input placeholder="Apartment, Suite, etc. (optional)" />
          </Form.Item>
          <Flex>
            <Form.Item<FieldType>
              name="city"
              style={{ width: "100%" }}
              rules={[{ required: true, message: "Enter your City" }]}
            >
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item<FieldType> name="postalCode" style={{ width: "100%" }}>
              <Input placeholder="Postal Code (Optional)" />
            </Form.Item>
          </Flex>
          <Form.Item<FieldType>
            name="phone"
            style={{ width: "100%" }}
            rules={[{ required: true, message: "Enter your Phone Number" }]}
          >
            <Input placeholder="Phone Number (03XX-XXX-XXXX)" />
          </Form.Item>

          <Flex
            style={{
              width: "100%",
              columnGap: "2rem",
              border: "1px solid orange",
              padding: "0.35rem",
              borderRadius: "0.5rem",
              margin: "1rem 0",
            }}
            gap="middle"
            justify="space-between"
          >
            <Text>Standard Delivery Time is 2 to 3 Working Days</Text>
            <Text style={{ color: "red", fontWeight: "500" }}>Rs 190.00</Text>
          </Flex>

          <StyledSpace>
            <Title level={5}>Payment</Title>
            <Text
              style={{
                fontSize: "0.75rem",
                fontStyle: "italic",
              }}
            >
              All transactions are secure and encrypted.
            </Text>
          </StyledSpace>
          <Radio checked>Cash on Delivery (COD)</Radio>
          <Form.Item label={null}>
            <StyledButton type="primary" htmlType="submit">
              Submit
            </StyledButton>
          </Form.Item>
        </Form>
      </StyledFrag>
      <Flex justify="start" vertical style={{ marginTop: "2rem" }}>
        <Space>
          <Input placeholder="Discount code or gift card" />
          <Button disabled>Apply</Button>
        </Space>
        <Flex justify="space-between" style={{ marginTop: "2rem" }}>
          <Paragraph>Subtotal.</Paragraph>
          <StyleParagraph>Rs. {totalAmount}</StyleParagraph>
        </Flex>
        <Flex justify="space-between">
          <Paragraph>Shipping.</Paragraph>
          <StyleParagraph>Rs. 190.00</StyleParagraph>
        </Flex>
        <Divider />
        <Flex justify="space-between" align="end">
          <Title level={5}>Total.</Title>
          <StyleParagraph>Rs. {totalAmount + 190}</StyleParagraph>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Payment;
