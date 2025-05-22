import React from "react";
import { useState } from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Tooltip, message, Input, Form } from "antd";

import { Modal } from "antd";
import { StyledButton } from "../components/styles";

import type { FormProps } from "antd";

type FieldType = {
  id?: string;
  title?: string;
  image?: string;
  brand?: string;
  category?: string;
  availibility?: string;
  color?: string;
  price?: number;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ModalForm = () => {
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    messageApi.open({
      type: "success",
      content: "Data submitted",
    });
    setOpen(false);
  };
  return (
    <React.Fragment>
      {contextHolder}
      <Tooltip title="Add Product">
        <StyledButton onClick={showModal}>
          <PlusSquareOutlined />
        </StyledButton>
      </Tooltip>
      {/* Modal to Add New products based on availibility of Post API */}
      <Modal
        open={open}
        title="Add New Product"
        onCancel={handleCancel}
        footer={[]}
      >
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
            label="Product Id"
            name="id"
            rules={[
              { required: true, message: "Please input your Product id!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your Title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Image URL"
            name="image"
            rules={[
              { required: true, message: "Please input your Image URL!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Brand"
            name="brand"
            rules={[
              { required: true, message: "Please input your product brand!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input your product category!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Availibility"
            name="availibility"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Color (if any)"
            name="color"
            rules={[
              {
                required: true,
                message: "Please input your product color!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Price (in $USD)"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input your product price!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <StyledButton htmlType="submit">Submit</StyledButton>
          </Form.Item>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default ModalForm;
