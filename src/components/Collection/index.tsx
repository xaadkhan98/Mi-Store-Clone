// import { useNavigate, useParams } from "react-router-dom";
import Card from "antd/es/card/Card";
import { ProductType } from "../../utils/products";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { SelectOutlined } from "@ant-design/icons";

const StyledCard = styled(Card)``;
// const BASE_URL = `http://localhost:3000/products/`;

const StyledButton = styled(Button)`
  color: orange !important;
  background: white;
  border: none !important;
  border: 1px solid orange !important;
  &:hover {
    color: white !important;
    background-color: orange !important;
  }
`;

const Collection: React.FC<ProductType> = ({ images, slug, id }) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledCard
        style={{ width: 300 }}
        cover={<img alt="example" src={images[0]} />}
      >
        <StyledButton
          type="link"
          onClick={() => {
            navigate(`/products/${id}`);
          }}
        >
          <SelectOutlined />
          View
        </StyledButton>
      </StyledCard>
    </>
  );
};

export default Collection;
