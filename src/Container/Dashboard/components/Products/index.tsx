import { useDispatch } from "react-redux";
import { dashboardProductsSaving } from "../../../../redux/dashboardProductSlice";
import React, { useEffect } from "react";
import { Table, Tag, Image } from "antd";
import { dashboardProductsSelector } from "../../../../redux/selectors";
import { useSelector } from "react-redux";
import { StyledFlex, StyledTitle } from "./components/styles";
import ModalForm from "./components/ModalForm";

const ProductsTab = () => {
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
      width: 150,
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

  return (
    <React.Fragment>
      <StyledFlex justify="space-between" align="end">
        <StyledTitle level={4}>All Products List</StyledTitle>
        <ModalForm />
      </StyledFlex>
      {/* Table showing values directly from Fake Ecommerce Stor API */}
      <Table scroll={{ x: "200" }} dataSource={data} columns={columns} />
    </React.Fragment>
  );
};

export default ProductsTab;
