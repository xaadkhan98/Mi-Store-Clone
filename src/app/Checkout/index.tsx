import { MoneyCollectOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Image, Space, Table, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import cartSlice from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  td>div>img{
    height: 7rem !important;
    width: 7rem !important;
  }

  tr>td:nth-child(2){
    font-weight: 500;
  }
  tr>td:nth-child(3){
    font-style: italic;
  }
  tr>td:nth-child(5){
    font-weight: 500;
    color: orange;
  }
  
`;
const StyledTitle = styled(Typography.Title)`
  color: orange !important;
  text-align: center;
  .icon {
    margin-right: 0.75rem;
    transform: scale(1.1);
  }
`;
let data: [{}] = [{}];

const CheckoutContainer = () => {
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

  const items = useSelector((state: any) => state?.cart.items);
  console.log(items);
  data = items.map((item: any, index: number) => ({
    key: index,
    id: item.id,
    imageUrl: item?.img,
    productName: item?.name,
    price: item?.price,
    quantity: item?.quantity,
    total: item?.price * item?.quantity,
  }));

  const StyledEmptyCart = styled(Space)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 2rem 0;
  `;

  const StyledButton = styled(Link)`
    background-color: white;
    color: orange;
    border: 1px solid orange !important;
    margin: 1rem 0;
    display: flex;
    justify-self: end;
    padding: 0.35rem 0.5rem;
    border-radius: 0.5rem;
    &:hover {
      background-color: orange !important;
      color: white !important;
    }
  `;

  return (
    <>
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
    </>
  );
};

export default CheckoutContainer;
