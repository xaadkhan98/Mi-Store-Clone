import { ProductType } from "../../utils/products";
import { useNavigate } from "react-router-dom";
import { SelectOutlined } from "@ant-design/icons";
import { StyledButton, StyledCard } from "./components/styles";
import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Collection: React.FC<ProductType> = ({ images, slug, id, name }) => {
  const navigate = useNavigate();
  function handleClickNavigation() {
    navigate(`/products/${id}`);
  }

  return (
    <React.Fragment>
      <StyledCard cover={<img alt={slug} src={images[0]} />}>
        <Title level={5}>{name}</Title>
        <StyledButton type="link" onClick={handleClickNavigation}>
          <SelectOutlined />
          View
        </StyledButton>
      </StyledCard>
    </React.Fragment>
  );
};

export default Collection;
