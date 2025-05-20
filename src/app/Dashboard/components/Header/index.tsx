import React from "react";
import {
  AntDesignOutlined,
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Divider, Dropdown, Space, Tooltip, Typography } from "antd";
import type { MenuProps } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const StyledSpace = styled(Space)``;

const GlobalStyles = createGlobalStyle`

.profile{
    border: 1px solid orange !important;
   padding: 0.35rem 0.75rem;
   border-radius: 1rem;
}
.profile div{
  display: flex;
  align-items: end !important;
  justify-content: center  ;
h4{
  margin: 0;
  font-size: 1rem !important;
}
img{
  height: 2rem !important;
  width: 2rem !important;
}

}

.ant-layout-header{
  display: flex !important;
  align-items: center !important;
  justify-content: end !important;
  padding-right: 2rem !important;

}

 &.ant-menu ,.ant-menu-root ,.ant-menu-inline, .ant-menu-dark, .ant-layout-sider-children{
  background-color: orange !important;
 }
 &.ant-menu-title-content{
  color: white !important;
  font-weight: 500 ;
 
 }
 .ant-menu-item-divider{
  color: #000000 !important;
  border-top-width: 2px !important
 }

 
`;

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
        localStorage.clear();
        navigate("/login");
      },
    },
  ];
  return (
    <>
      <GlobalStyles />
      <Dropdown className="profile" menu={{ items }}>
        <StyledSpace style={{ right: "2rem" }}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Title level={4} style={{ color: "orange", fontSize: "1rem" }}>
            admin
          </Title>
        </StyledSpace>
      </Dropdown>
    </>
  );
};

export default DashboardHeader;
