import React from "react";
import { Divider, message } from "antd";
import {
  Button,
  Flex,
  Form,
  Input,
  Radio,
  Select,
  Typography,
  FormProps,
} from "antd";

import { useSelector } from "react-redux";
import {
  StyledButton,
  StyledFlex,
  StyledFrag,
  StyledPaymentFlex,
  StyledPaymentSpace,
  StyledSpace,
  StyleParagraph,
  StyleText,
} from "./components/styles";

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
      <StyledFrag>
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
          {/* Contact Input */}
          <Form.Item<FieldType>
            name="contact"
            rules={[{ required: true, message: "Enter your email address!" }]}
          >
            <Title level={5}>Contact</Title>
            <Input placeholder="Email" type="email" />
          </Form.Item>
          {/* Delivery Input */}
          <Form.Item<FieldType> name="delivery">
            <Title level={5}>Delivery</Title>
            <Select
              defaultValue="Pakistan"
              options={[{ value: "Pakistan", label: "Pakistan" }]}
            />
          </Form.Item>

          <Flex>
            <Form.Item<FieldType>
              name="firstName"
              rules={[{ required: true, message: "Enter your first name!" }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item<FieldType> name="lastName">
              <Input placeholder="Last Name" />
            </Form.Item>
          </Flex>
          <Form.Item<FieldType>
            name="address"
            rules={[{ required: true, message: "Enter your Postal Adress" }]}
          >
            <Input placeholder="Postal Address" />
          </Form.Item>
          <Form.Item<FieldType> name="furtherAddress">
            <Input placeholder="Apartment, Suite, etc. (optional)" />
          </Form.Item>
          <Flex>
            <Form.Item<FieldType>
              name="city"
              rules={[{ required: true, message: "Enter your City" }]}
            >
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item<FieldType> name="postalCode">
              <Input placeholder="Postal Code (Optional)" />
            </Form.Item>
          </Flex>
          <Form.Item<FieldType>
            name="phone"
            rules={[{ required: true, message: "Enter your Phone Number" }]}
          >
            <Input placeholder="Phone Number (03XX-XXX-XXXX)" />
          </Form.Item>

          <StyledFlex gap="middle" justify="space-between">
            <Text>Standard Delivery Time is 2 to 3 Working Days</Text>
            <Text>Rs 190.00</Text>
          </StyledFlex>

          <StyledSpace>
            <Title level={5}>Payment</Title>
            <StyleText>All transactions are secure and encrypted.</StyleText>
          </StyledSpace>
          <Radio checked>Cash on Delivery (COD)</Radio>
          <Form.Item label={null}>
            <StyledButton type="primary" htmlType="submit">
              Submit
            </StyledButton>
          </Form.Item>
        </Form>
      </StyledFrag>
      <StyledPaymentFlex justify="start" vertical>
        <StyledPaymentSpace>
          <Input placeholder="Discount code or gift card" />
          <Button disabled>Apply</Button>
        </StyledPaymentSpace>
        <Flex justify="space-between">
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
      </StyledPaymentFlex>
    </Flex>
  );
};

export default Payment;
