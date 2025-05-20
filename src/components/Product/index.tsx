import { Button, Carousel, Divider, Image, Space, Typography } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { ProductType } from "../../utils/products";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

import { useDispatch } from "react-redux";
import cartSlice from "../../redux/cartSlice";

const StyledDiv = styled.div`
  /* display: flex; */
  /* overflow: hidden; */
`;

const StyledSpace = styled(Space)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  /* justify-content: start; */
  flex-direction: column;
  margin-left: 5%;
  padding-bottom: 3rem;
`;

const StyledCarousel = styled(Carousel)`
  margin-left: 15%;
`;

const GlobalStyles = createGlobalStyle`
.ant-space-item h2{
  margin: 0;
  padding-top: 5rem;
  font-weight: 500;
}
.ant-space-item h5{
  margin-top: 0.55rem;
  font-weight: 400;
  color: orange;
  font-size: 0.875rem;
}

.ant-descriptions-header{
  margin-bottom: 0.25rem !important;

}
/* .ant-btn{
  width: 80%;
} */
`;

const StyledButton = styled(Button)`
  margin: 2.5rem 0 0 0;
  width: 40vw !important;
  justify-self: center;
  border: none;
  outline: none;
  border: 1px solid orange;
  color: orange;
  &:hover {
    background-color: orange !important;
    color: white !important;
    border-color: orange !important;
  }
`;

const StyledDescriptions = styled(Descriptions)`
  padding: 1rem 0;
  .ant-descriptions-view {
    tbody {
      display: flex;
      flex-direction: column;
      tr {
        display: flex;
        flex-direction: column;
        td {
          padding: 0;
          margin: 0;
          div > span:nth-child(1) {
            font-size: 0.75rem;
            font-weight: 500;
          }
          div > span:nth-child(2) {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
`;

const Product: React.FC<ProductType> = (product) => {
  const { keyFeatures } = product || {};
  const {
    display,
    resolution,
    processorModel,
    processorProcess,
    processorCores,
    cpuSpeed,
    refreshRate,
    fingerprintUnlock,
    faceUnlock,
    rearCamera,
    frontCamera,
    battery,
    charging,
    otherFeatures,
    generalFeatures,
  }: any = keyFeatures || {};
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Display",
      children: display,
    },
    {
      key: "2",
      label: "Resolution",
      children: resolution,
    },
    {
      key: "3",
      label: "Processor Model",
      children: processorModel,
    },
    {
      key: "4",
      label: "Processor Process",
      children: processorProcess,
    },
    {
      key: "5",
      label: "Processor Cores",
      children: processorCores,
    },
    {
      key: "6",
      label: "Cpu Speed",
      children: cpuSpeed,
    },
    {
      key: "7",
      label: "Refresh Cores",
      children: refreshRate,
    },
    {
      key: "8",
      label: "Finger Print Unlock",
      children: fingerprintUnlock,
    },
    {
      key: "9",
      label: "Face Unlock",
      children: faceUnlock,
    },
    {
      key: "10",
      label: "Rear Camera",
      children: rearCamera,
    },
    {
      key: "11",
      label: "Front Camera",
      children: frontCamera,
    },
    {
      key: "12",
      label: "Face Unlock",
      children: faceUnlock,
    },
    {
      key: "13",
      label: "Battery",
      children: battery,
    },
    {
      key: "14",
      label: "Charging",
      children: charging,
    },
    {
      key: "15",
      label: "Other Key Features",
      children: otherFeatures,
    },
    {
      key: "16",
      label: "General Features",
      children: generalFeatures,
    },
  ];

  const dispatch = useDispatch();
  const handleCartBtn = (product: any) => {
    dispatch(cartSlice.actions.addToCart(product));
  };

  //Format Currency

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
  }).format(product.price);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <GlobalStyles />
      <div
        style={{
          width: "50%",

          backgroundColor: "white",
          marginBottom: "5rem",
        }}
      >
        <StyledCarousel autoplay={{ dotDuration: true }} autoplaySpeed={2000}>
          {product.displayImages?.map((displayImg) => {
            return (
              <div>
                <img
                  src={displayImg}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
            );
          })}
        </StyledCarousel>
      </div>

      <StyledSpace>
        <Typography.Title level={2}>{product.name}</Typography.Title>
        <Typography.Title level={5}>{formattedAmount}</Typography.Title>
        <Divider
          style={{ borderColor: "orange", paddingInline: "17vw", margin: 0 }}
        />

        {keyFeatures && (
          <StyledDescriptions title="Key Features" items={items} />
        )}
        <Divider
          style={{ borderColor: "orange", paddingInline: "17vw", margin: 0 }}
        />
        <Image
          style={{ paddingTop: "1rem" }}
          preview={false}
          src="https://mistore.pk/cdn/shop/files/1_YEAR_WARRANTY-05_1_70x.png?v=1714214955"
        />
        <StyledButton
          onClick={() => {
            handleCartBtn(product);
          }}
        >
          <ShoppingCartOutlined
            style={{ fontSize: "1.25rem", padding: "0.25rem" }}
          />
          Add to Cart
        </StyledButton>
      </StyledSpace>
    </div>
  );
};

export default Product;
