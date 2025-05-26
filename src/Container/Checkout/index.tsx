import { MoneyCollectOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Image, Space, Table, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import cartSlice from "../../redux/cartSlice";
import {
  GlobalStyles,
  StyledButton,
  StyledEmptyCart,
  StyledTitle,
} from "./components/styles";
import React from "react";

let data: [{}] = [{}];

const Checkout = () => {
  const dispatch = useDispatch();

  const cols = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      render: (imageURL: string) => <Image src={imageURL} alt={imageURL} />,
    },
    {
      key: "productName",
      title: "Product Name",
      dataIndex: "productName",
    },
    {
      key: "price",
      title: "Price",
      dataIndex: "price",
    },
    {
      key: "quantity",
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      key: "total",
      title: "Total",
      dataIndex: "total",
    },
    {
      key: "delete",
      title: "Remove",
      dataIndex: "delete",
      render: (value: any, dataId: any) => (
        <Button
          danger
          onClick={(e) => {
            dispatch(cartSlice.actions.removeFromCart(dataId.id));
          }}
        >
          X
        </Button>
      ),
    },
  ];

  // Fetching Items from Redux State
  const items = useSelector((state: any) => state?.cart.items);

  data = items.map((item: any, index: number) => ({
    key: index,
    id: item.id,
    imageUrl: item?.img,
    productName: item?.name,
    price: item?.price,
    quantity: item?.quantity,
    total: item?.price * item?.quantity,
  }));

  return (
    <React.Fragment>
      <GlobalStyles />
      {!data.length ? (
        <StyledEmptyCart>
          <Typography.Title>
            Your cart is empty! <MoneyCollectOutlined />
          </Typography.Title>
          <Typography.Link style={{ color: "orange" }} href="/">
            Continue Shopping
          </Typography.Link>
        </StyledEmptyCart>
      ) : (
        <>
          <StyledTitle level={2}>
            <ShoppingCartOutlined className="icon" />
            Checkout
          </StyledTitle>
          <Table dataSource={data} columns={cols} pagination={false} />

          <StyledButton to="payment">Proceed to Payment</StyledButton>
        </>
      )}
    </React.Fragment>
  );
};

export default Checkout;
