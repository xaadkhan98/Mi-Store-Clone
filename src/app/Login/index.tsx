import React, { useState } from "react";

import type { FormProps } from "antd";
import {
  Button,
  Form,
  Input,
  message,
  Radio,
  Select,
  Space,
  Typography,
} from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import loginSlice, { loginSaving } from "../../redux/loginSlice";
import { useSelector } from "react-redux";
import { selectLoginData } from "../../redux/selectors";

const { Title } = Typography;

// Types for Username and Password
type FieldType = {
  role?: string;
  email?: string;
  password?: string;
};

//Styled Button
const StyledButton = styled(Title)`
  text-align: center;
  font-size: 26px !important;
  color: #333 !important;
  font-weight: 600;
  padding: 1.5rem 0;
  text-transform: capitalize;
`;

const GlobalStyles = createGlobalStyle`
  &.ant-btn-variant-outlined {
    background-color: white;
    color: orange;
    border: 1px solid orange;
    border-radius: 0.5rem;
    &:hover{
      border: orange;
      color: white !important;
      background-color: orange !important;
    }
  }
`;

const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(selectLoginData);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { email, password } = values;
    console.log(values);
    // @ts-ignore
    dispatch(loginSaving({ values, navigate }));

    const validCredentials = {
      username: "admin@gmail.com",
      password: "admin123",
    };
  };

  console.log(userData);

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <StyledSpace>
      <GlobalStyles />
      <StyledButton>Sign in to your Mi Account</StyledButton>
      <Form
        method="post"
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" style={{ width: "20rem" }} />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" style={{ width: "20rem" }} />
        </Form.Item>

        <Form.Item label={null}>
          <Button style={{ width: "20rem" }} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledSpace>
  );
};

export default Login;
