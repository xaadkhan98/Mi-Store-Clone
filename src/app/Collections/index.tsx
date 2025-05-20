import React from "react";
import { Card, Row, Space, Typography } from "antd";
import { productsDescription } from "../../utils/products";
import Product from "../../components/Collection";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const { Meta } = Card;
const { Title } = Typography;

const StyledProducts = styled(Space)`
  display: flex;
  padding: 3rem 0;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
`;

const Collections: React.FC = () => {
  const { categoryy } = useParams();
  console.log(categoryy);
  return (
    <>
      <Title level={4}>{categoryy?.toLocaleUpperCase()}</Title>
      <StyledProducts>
        {productsDescription
          .filter((filteredProducts) => filteredProducts.category === categoryy)
          .map((product) => {
            return <Product {...product} />;
          })}
      </StyledProducts>
    </>
  );
};

export default Collections;
