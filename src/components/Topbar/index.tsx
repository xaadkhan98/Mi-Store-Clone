import React from "react";
import {
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { selectTotalQuantity } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { Badge, Space } from "antd";
import {
  StyledLink,
  StyledText,
  TopBar,
  TopbarLinks,
  TopbarStyled,
} from "./components/styles";

const Topbar: React.FC = () => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <TopBar>
      <TopbarStyled>
        <TopbarLinks>
          <StyledText>Mi Pakistan</StyledText>
          <StyledText>Mi Community</StyledText>
          <StyledText>Support</StyledText>
          <StyledText>Track My Order</StyledText>
          <StyledText>Wholesale Query</StyledText>
          <StyledText>Report Faulty Products</StyledText>
        </TopbarLinks>

        <Space>
          <SearchOutlined
            style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
          />
          <StyledLink style={{}} to="/checkout">
            <Badge
              color="red"
              style={{
                position: "absolute",
                top: "20%",
                right: "30%",
                height: "0.75rem",
                minWidth: "0.75rem",
                lineHeight: "0.70rem",
                fontSize: "0.6rem",
              }}
              count={totalQuantity}
            >
              <ShoppingOutlined
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                  color: "orange",
                }}
              />
            </Badge>
          </StyledLink>

          <Link to="/dashboard" style={{ color: "inherit" }}>
            <UserOutlined
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            />
          </Link>
        </Space>
      </TopbarStyled>
    </TopBar>
  );
};

export default Topbar;
