import { useParams } from "react-router-dom";
import Product from "../../components/Product";
import { productsDescription } from "../../utils/products";

const Products = () => {
  // Dynamically fetching product ID from the navigating link
  const { productId } = useParams();

  return (
    <>
      {productsDescription
        // Filter products based on productId
        .filter((filteredProduct) => {
          return filteredProduct.id === productId;
        })
        // Once filtered then map it
        .map((product) => {
          return <Product {...product} />;
        })}
    </>
  );
};

export default Products;
