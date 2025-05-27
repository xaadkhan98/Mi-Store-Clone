import styled, { createGlobalStyle } from "styled-components";
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

 .ant-menu-dark .ant-menu-item-selected,.ant-menu-dark>.ant-menu .ant-menu-item-selected {
    background-color: transparent !important;
    
}
 
`;

const DashGlobalStyles = () => {
  return <GlobalStyles />;
};

export default DashGlobalStyles;
