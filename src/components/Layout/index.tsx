import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Topbar from "../Topbar";
import HeaderComponent from "../Header";
import styled, { createGlobalStyle } from "styled-components";
import FooterComponent from "../Footer";

const { Header, Footer, Content } = Layout;

const StyledLayout = styled(Layout)`
  && .ant-layout-header {
    background-color: white;
    width: 100%;
  }
`;

const GlobalStyle = createGlobalStyle`
 .ant-layout-footer{
padding: 0;
 }
  
`;

const StyledContent = styled(Content)`
  width: 90%;
  margin: auto;
`;

const LayoutWrapper: React.FC = () => (
  <>
    <GlobalStyle />
    <StyledLayout>
      <Topbar />
      <Header>
        <HeaderComponent />
      </Header>
      <StyledContent>
        <Outlet />
      </StyledContent>
      <Footer>
        <FooterComponent />
      </Footer>
    </StyledLayout>
  </>
);

export default LayoutWrapper;
