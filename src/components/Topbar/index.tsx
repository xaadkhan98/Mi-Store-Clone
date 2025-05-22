import React from "react";
import {
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { selectTotalQuantity } from "../../redux/selectors";
import { useSelector } from "react-redux";

import {
  StyledBadge,
  StyledFlex,
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

        <StyledFlex align="center" justify="space-around">
          <SearchOutlined />
          <StyledLink style={{}} to="/checkout">
            <StyledBadge color="red" count={totalQuantity}>
              <ShoppingOutlined style={{}} />
            </StyledBadge>
          </StyledLink>

          <Link to="/dashboard" style={{ color: "inherit" }}>
            <UserOutlined />
          </Link>
        </StyledFlex>
      </TopbarStyled>
    </TopBar>
  );
};

export default Topbar;
