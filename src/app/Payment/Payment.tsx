import React, { useState } from "react";
import type { CollapseProps } from "antd";
import { Collapse, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Space,
  Switch,
  TreeSelect,
  Typography,
  Upload,
} from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

const StyledFrag = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 50%;
  border-right: 1px solid orange;
  padding: 2rem;
  margin: 0 5%;
`;

const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const Payment = () => {
  const [messageApi, contextHolder] = message.useMessage();
  function handleOnClick() {
    messageApi.info("Order Placed");
  }
  return (
    <StyledFrag>
      {contextHolder}
      <StyledSpace>
        <Title level={5}>Contact</Title>
        <Input required style={{ width: "25vw" }} placeholder="Email" />
      </StyledSpace>
      <StyledSpace>
        <Title level={5}>Delivery</Title>
        <Select
          defaultValue="Pakistan"
          style={{ width: "25vw" }}
          // onChange={handleChange}
          options={[{ value: "Pakistan", label: "Pakistan" }]}
        />
      </StyledSpace>
      <Space>
        <Input required placeholder="First name" />
        <Input required placeholder="Last name" />
      </Space>
      <Input required placeholder="Address" />
      <Input placeholder="Apartment, Suite, etc. (optional)" />
      <Space>
        <Input required placeholder="City" />
        <Input placeholder="Postal Code (optional)" />
      </Space>
      <Input required placeholder="Phone" />
      <Text style={{ fontWeight: "500" }}>Shipping method</Text>
      <Flex
        style={{
          width: "100%",
          columnGap: "2rem",
          border: "1px solid orange",
          padding: "0.35rem",
          borderRadius: "0.5rem",
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
    </StyledFrag>
  );
};

export default Payment;
