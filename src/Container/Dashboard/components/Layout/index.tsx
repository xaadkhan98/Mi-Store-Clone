import React, { useState } from "react";
import {
  AppstoreOutlined,
  DashboardOutlined,
  ProductFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import DashboardHeader from "../Header";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <NavLink to="/dashboard">Dashboard</NavLink>,
    "dashboard",
    <DashboardOutlined />
  ),
  {
    type: "divider",
  },
  getItem(
    <NavLink to="/dashboard/products">Products</NavLink>,
    "products",
    <ProductFilled />
  ),
  {
    type: "divider",
  },
  getItem(
    <NavLink to="/dashboard/users">Users</NavLink>,
    "users",
    <AppstoreOutlined />
  ),
  {
    type: "divider",
  },
];

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <DashboardHeader />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Mi Store Clone ©{new Date().getFullYear()} Created by Saad Khan.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
