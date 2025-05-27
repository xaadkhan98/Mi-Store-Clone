import { useParams } from "react-router-dom";
import Product from "../../components/Product";
import { productsDescription } from "../../utils/products";
import React from "react";

const Products = () => {
  // Dynamically fetching product ID from the navigating link
  const { productId } = useParams();

  return (
    <React.Fragment>
      {productsDescription
        // Filter products data based on productId
        .filter((filteredProduct) => {
          return filteredProduct.id === productId;
        })
        // Once filtered then map it
        .map((product) => {
          return <Product {...product} />;
        })}
    </React.Fragment>
  );
};

export default Products;
