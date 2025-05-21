import { useDispatch } from "react-redux";
import { dashboardProductsSaving } from "../../../../redux/dashboardProductSlice";
import { useEffect, useState } from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import {
  Flex,
  Tooltip,
  Space,
  Table,
  Tag,
  Typography,
  Image,
  Button,
  message,
  Input,
  Form,
} from "antd";
import { dashboardProductsSelector } from "../../../../redux/selectors";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Modal } from "antd";

const { Title } = Typography;

const StyledButton = styled(Button)`
  background-color: #009c00;
  color: white;
`;

const ProductsTab = () => {
  const [messageApi, contextHolder] = message.useMessage();

  // Dispatch Saga Action on every page render
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashboardProductsSaving());
  }, []);

  //Fetching data from Redux-State
  const { products } = useSelector(dashboardProductsSelector) || [];

  //Pushing every product one by one for data source of Table  >> Fetched from API
  const data =
    products?.length > 0
      ? products.map((product: any) => ({
          product_id: product?.id,
          title: product?.title,
          brand: product?.brand,
          category: product?.category,
          price: product?.price,
          imageUrl: product?.image,
          availability: (
            <Tag color={product?.availability ? "green" : "red"}>
              {product?.availability ? "Available" : "Unavailable"}
            </Tag>
          ),
          color: product?.color,
          // description: product?.description,
        }))
      : [];

  // Representing Column headings and linkage with Data
  const columns = [
    {
      title: "Product Id",
      dataIndex: "product_id",
      key: "product_id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      render: (imageUrl: string) => (
        <Image width={75} src={imageUrl} alt={imageUrl} />
      ),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      sorter: (a: { price: number }, b: { price: number }) => a.price - b.price,
    },
  ];

  const [open, setOpen] = useState(false);

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
    <>
      {contextHolder}
      <Flex
        justify="space-between"
        align="end"
        style={{ marginBottom: "1rem" }}
      >
        <Title level={4} style={{ color: "#797272" }}>
          All Products List
        </Title>

        <Space>
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
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" onClick={handleSubmit}>
                Submit
              </Button>,
            ]}
          >
            <Form>
              <Input placeholder="Product ID" required />
              <Input
                placeholder="Title (Max: 60 characters)"
                maxLength={60}
                style={{ margin: "1rem 0" }}
                required
              />
              <Input placeholder="Image (URL)" required />
              <Input
                placeholder="Brand"
                style={{ margin: "1rem 0" }}
                required
              />
              <Input placeholder="Category" required />
              <Input
                placeholder="Availibilty"
                style={{ margin: "1rem 0" }}
                required
              />
              <Input placeholder="Color (if any)" required />
              <Input
                placeholder="Price ($)"
                style={{ margin: "1rem 0" }}
                required
              />
            </Form>
          </Modal>
        </Space>
      </Flex>
      {/* Table showing values directly from Fake Ecommerce Stor API */}
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default ProductsTab;
