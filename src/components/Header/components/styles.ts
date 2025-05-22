import { Menu } from "antd";
import styled from "styled-components";

export const StyledHeader = styled(Menu)`
  max-height: 4rem;
  display: flex;
  justify-content: center;

  &&& .ant-card .ant-card-cover {
    width: 0%;
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

  &&&.ant-menu-light > .ant-menu .ant-menu-item-selected {
    background-color: #ffffff;
  }
`;
