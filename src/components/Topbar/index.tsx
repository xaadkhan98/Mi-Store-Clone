import React from "react";
import styled from "styled-components";
import {
  HeartOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { selectLoginData, selectTotalQuantity } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { Badge } from "antd";

const TopbarStyled = styled.div`
  color: #b0b0b0;
  display: flex;
  align-items: center;
  width: 70%;
  margin: auto;
  justify-content: space-between;
  height: 40px;
`;

const TopbarLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H6 = styled.h6`
  border-right: 1px solid #424242;
  font-size: 0.75rem;
  padding: 0 20px;
  font-weight: normal;
  text-align: start;
`;

const TopBar = styled.div`
  background-color: #212121;
`;

const TopBarIcons = styled.div``;

const Topbar: React.FC = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const { isAuthenticated } = useSelector(selectLoginData);
  console.log(isAuthenticated);

  console.log(totalQuantity);
  const navigate = useNavigate();
  return (
    <TopBar>
      <TopbarStyled>
        <TopbarLinks>
          <H6>Mi Pakistan</H6>
          <H6>Mi Community</H6>
          <H6>Support</H6>
          <H6>Track My Order</H6>
          <H6>Wholesale Query</H6>
          <H6>Report Faulty Products</H6>
        </TopbarLinks>

        <TopBarIcons>
          <SearchOutlined
            style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
          />
          <Link style={{ position: "relative" }} to="/checkout">
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
          </Link>

          <Link rel="stylesheet" to="/dashboard" style={{ color: "inherit" }}>
            <UserOutlined
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            />
          </Link>

          {/* <HeartOutlined
            style={{ width: "25px", height: "25px", cursor: "pointer" }}
          /> */}
        </TopBarIcons>
      </TopbarStyled>
    </TopBar>
  );
};

export default Topbar;
