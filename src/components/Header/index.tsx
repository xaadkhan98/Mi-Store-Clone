import React, { useState } from "react";
import { Image, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./components/styles";
import GlobalStyles from "../../utils/GlobalStyles";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "../",
    icon: <Image preview={false} src="/logo.svg" />,
  },
  {
    label: <NavLink to="collections/new-arrivals">New Arrivals </NavLink>,
    key: "new-arrivals",
  },
  {
    label: <NavLink to="collections/smartphones">SmartPhones</NavLink>,
    key: "smartphones",
  },
  {
    label: (
      <NavLink to="collections/powerbank-and-charging">
        Powerbank & Charging
      </NavLink>
    ),

    key: "powerbank-and-charging",
  },
  {
    label: <NavLink to="gear-and-devices">Gear & Devices</NavLink>,
    key: "gear-and-devices",
  },
  {
    label: <NavLink to="camera-and-visual">Camera & Visual</NavLink>,
    key: "camera-and-visual",
  },
  {
    label: <NavLink to="audio">Audio</NavLink>,
    key: "audio",
  },
  {
    label: <NavLink to="lifestyle">Lifestyle</NavLink>,
    key: "lifestyle",
  },
];

const HeaderComponent: React.FC = () => {
  // State defined by AntDesign to update state for current value.
  const [current, setCurrent] = useState("");

  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(`/collections/${e.key}`);
  };

  return (
    <React.Fragment>
      <GlobalStyles />
      <StyledHeader
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </React.Fragment>
  );
};

export default HeaderComponent;
