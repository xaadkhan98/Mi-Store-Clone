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
} from "antd";

import { useSelector } from "react-redux";
import { StyledFrag, StyledSpace, StyleParagraph } from "./components/styles";
const { Title, Text, Paragraph } = Typography;

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

  return (
    <Flex gap="middle">
      <StyledFrag style={{ borderRight: "2px solid orange" }}>
        {contextHolder}
        <Form>
          <StyledSpace>
            <Title level={5}>Contact</Title>
            <Input
              required
              style={{ width: "27vw" }}
              placeholder="Email"
              type="email"
            />
          </StyledSpace>
          <StyledSpace>
            <Title level={5}>Delivery</Title>
            <Select
              defaultValue="Pakistan"
              style={{ width: "27vw", marginBottom: "1rem" }}
              // onChange={handleChange}
              options={[{ value: "Pakistan", label: "Pakistan" }]}
            />
          </StyledSpace>
          <Space>
            <Input required placeholder="First name" />
            <Input required placeholder="Last name" />
          </Space>
          <Input style={{ margin: "1rem 0" }} required placeholder="Address" />
          <Input placeholder="Apartment, Suite, etc. (optional)" />
          <Space>
            <Input style={{ margin: "1rem 0" }} required placeholder="City" />
            <Input placeholder="Postal Code (optional)" />
          </Space>
          <Input
            style={{ margin: "0 0 1rem 0" }}
            required
            placeholder="Phone"
          />
          <Text style={{ fontWeight: "500" }}>Shipping method</Text>
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
          <Button
            style={{
              backgroundColor: "green",
              width: "100%",
              color: "white",
              marginTop: "1rem",
            }}
            href="/"
            onClick={handleOnClick}
          >
            Place Order
          </Button>
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
