import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSaving } from "../../redux/loginSlice";
import {
  GlobalStyles,
  StyledForm,
  StyledSpace,
  StyledTitle,
} from "./components/styles";

// Types for Username and Password
type FieldType = {
  role?: string;
  email?: string;
  password?: string;
};

const Login = () => {
  // To navigate to Dashboard if isAutheticated is returned "TRUE"
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    // Fetching input values

    if (values.email != "admin@gmail.com" && values.password != "admin123")
      return messageApi.error("Please try again with Correct credentials!");

    // Dispatch Saga the login values and wait for isAutheticated value
    // @ts-ignore
    dispatch(loginSaving({ values, navigate }));
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledSpace>
      {contextHolder}
      <GlobalStyles />
      <StyledTitle>Sign in to your Mi Account</StyledTitle>
      <Form
        method="post"
        name="basic"
        style={{ maxWidth: 900 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Email Component */}
        <StyledForm.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </StyledForm.Item>

        {/* Password Component */}
        <StyledForm.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </StyledForm.Item>

        <StyledForm.Item label={null}>
          <Button htmlType="submit">Submit</Button>
        </StyledForm.Item>
      </Form>
    </StyledSpace>
  );
};

export default Login;
