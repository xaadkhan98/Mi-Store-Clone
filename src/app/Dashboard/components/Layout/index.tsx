import React, { useState } from "react";
import {
  AppstoreOutlined,
  DashboardOutlined,
  DesktopOutlined,
  FileOutlined,
  OrderedListOutlined,
  PieChartOutlined,
  ProductFilled,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
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
    <NavLink to="/dashboard/category">Category</NavLink>,
    "category",
    <AppstoreOutlined />
    //   [
    //   // getItem("Tom", "3"),
    //   // getItem("Bill", "4"),
    //   // getItem("Alex", "5"),
    // ]
  ),
  {
    type: "divider",
  },
  getItem(
    <NavLink to="/dashboard/orders">Orders</NavLink>,
    "orders",
    <OrderedListOutlined />
    //   [
    //   // getItem("Team 1", "6"),
    //   // getItem("Team 2", "8"),
    // ]
  ),
  {
    type: "divider",
  },
  // getItem("Files", "9", <FileOutlined />),
];

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <DashboardHeader />
        </Header>

        <Content style={{ margin: "0 16px" }}>
          <Outlet />
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div> */}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
