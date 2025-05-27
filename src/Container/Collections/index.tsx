import React from "react";
import { Space, Typography } from "antd";
import { productsDescription } from "../../utils/products";
import Product from "../../components/Collection";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const { Title } = Typography;

const StyledProducts = styled(Space)`
  display: flex;
  padding: 3rem 0;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
`;

const Collections: React.FC = () => {
  // Dynamically fetching category
  const { categoryy } = useParams();

  return (
    <React.Fragment>
      <Title level={4}>
        {categoryy?.replace(/-/g, " ")?.toLocaleUpperCase()}
      </Title>
      <StyledProducts>
        {productsDescription
          // Filtering and mapping products based on fetched category
          .filter((filteredProducts) => filteredProducts.category === categoryy)
          .map((product) => {
            return <Product {...product} />;
          })}
      </StyledProducts>
    </React.Fragment>
  );
};

export default Collections;
