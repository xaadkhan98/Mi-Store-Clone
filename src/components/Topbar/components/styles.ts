import { Badge, Flex, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ShoppingOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const TopbarStyled = styled(Space)`
  color: #b0b0b0;
  display: flex;
  align-items: center;
  margin: auto;
  place-content: center;
  justify-content: space-between;
  height: 40px;
`;

export const TopbarLinks = styled(Space)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const StyledText = styled(Text)`
  color: #b0b0b0;
  border-right: 1px solid #424242;
  font-size: 0.65rem;
  padding: 0 20px;
  font-weight: normal;
  text-align: start;
`;

export const TopBar = styled(Flex)`
  background-color: #212121;

  &&&.ant-space-item {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  font-size: 1.5rem;
  &&&.ant-badge {
    display: none;
  }
`;

export const StyledFlex = styled(Flex)`
  width: 6vw;
  height: 25px;
  &&&.hwOxeg {
    height: 20px;
  }
`;

export const StyledBadge = styled(Badge)`
  font-size: 0.95rem;
  .ant-badge-count {
    min-width: 14px;
    height: 14px;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  &&&:where(.css-dev-only-do-not-override-18afz5u).ant-flex-align-center {
    display: none;
  }
  .anticon {
    color: #b0b0b0;
    height: 20px;
  }
`;
export const StyledShoppingOutline = styled(ShoppingOutlined)`
  &&&.anticon,
  &&&.anticon-shopping {
    display: none;
  }
`;
