import { Carousel, Image, Space } from "antd";
import { useParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Product from "../../components/Product";
import { productsDescription } from "../../utils/products";

const Products = () => {
  const { productId } = useParams();

  return (
    <>
      {productsDescription
        .filter((filteredProduct) => {
          return filteredProduct.id === productId;
        })
        .map((product) => {
          return <Product {...product} />;
        })}
    </>
  );
};

export default Products;
