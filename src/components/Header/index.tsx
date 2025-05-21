import React, { useState } from "react";
import { Image, MenuProps, Typography } from "antd";
import { Card, Menu } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

type MenuItem = Required<MenuProps>["items"][number];

const GlobalStyle = createGlobalStyle`
  && .ant-menu-submenu-popup .ant-menu-vertical .ant-menu-item {
    width: auto;
    height: auto;
    padding: 4px;
    background-color: white;
    border: none;
    &:hover{
      transition: all 0.2s ease-in-out;
      transform: scale(1.02);
    }
    
  }
  && .ant-menu-submenu-popup .ant-menu-vertical.ant-menu-sub:not([class*='-active']) {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
  }
  &.ant-layout-header{
    padding: 0;
  }
`;

const StyledHeader = styled(Menu)`
  max-height: 4rem;
  display: flex;
  justify-content: center;

  & .ant-card .ant-card-cover {
    width: 0% !important;
  }

  & .ant-menu-item-icon {
    width: 8rem;
  }

  & .ant-menu-title-content {
    color: black;
    font-weight: 500;
    border: none;
    a {
      color: black;
    }
  }

  .ant-menu-light > .ant-menu .ant-menu-item-selected {
    background-color: #ffffff !important;
  }
`;

const items: MenuItem[] = [
  {
    key: "../",
    icon: <img src="/logo.svg" />,
  },
  {
    label: <NavLink to="collections/new-arrivals">New Arrivals </NavLink>,
    key: "new-arrivals",
  },
  {
    label: <NavLink to="collections/smartphones">SmartPhones</NavLink>,
    key: "smartphones",
    // icon: <AppstoreOutlined />,
  },
  {
    label: (
      <NavLink to="collections/powerbank-and-charging">
        Powerbank & Charging
      </NavLink>
    ),
    // label: "Powerbank & Charging",
    key: "powerbank-and-charging",
    // icon: <AppstoreOutlined />,
  },
  {
    label: <NavLink to="gear-and-devices">Gear & Devices</NavLink>,
    key: "gear-and-devices",
    // icon: <AppstoreOutlined />,
  },
  {
    label: <NavLink to="camera-and-visual">Camera & Visual</NavLink>,
    key: "camera-and-visual",
    // icon: <AppstoreOutlined />,
  },
  {
    label: <NavLink to="audio">Audio</NavLink>,
    key: "audio",
    // icon: <AppstoreOutlined />,
  },
  {
    label: <NavLink to="lifestyle">Lifestyle</NavLink>,
    key: "lifestyle",
  },
];

const HeaderComponent: React.FC = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    // Check for Header Category
    if (e.keyPath.length === 1) {
      navigate(`/collections/${e.key}`);
    }
    // Check for Products Dropdown
    else {
      navigate(`/products/${e.key}`);
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyledHeader
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};

export default HeaderComponent;
