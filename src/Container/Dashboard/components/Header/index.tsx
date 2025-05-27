import { LogoutOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space, Typography } from "antd";
import type { MenuProps } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import DashGlobalStyles from "../../utils/DashGlobalStyles";
import React from "react";

const { Title } = Typography;

const StyledSpace = styled(Space)``;

const DashboardHeader = () => {
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: "account",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: (e) => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
      },
    },
  ];
  return (
    <React.Fragment>
      <DashGlobalStyles />
      <Dropdown className="profile" menu={{ items }}>
        <StyledSpace style={{ right: "2rem" }}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Title level={4} style={{ color: "orange", fontSize: "1rem" }}>
            admin
          </Title>
        </StyledSpace>
      </Dropdown>
    </React.Fragment>
  );
};

export default DashboardHeader;
