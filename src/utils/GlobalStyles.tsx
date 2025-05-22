import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = () => {
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
  .ant-col.ant-col-12.css-dev-only-do-not-override-18afz5u{

  display: flex;
  align-items: center;
 
}
 .ant-layout-footer{
padding: 0;
 }
`;

  return <GlobalStyle />;
};

export default GlobalStyles;
