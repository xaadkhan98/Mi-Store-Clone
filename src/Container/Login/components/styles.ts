import { Space, Typography } from "antd";

import styled, { createGlobalStyle } from "styled-components";

const { Title } = Typography;

//Styled Button
export const StyledTitle = styled(Title)`
  text-align: center;
  font-size: 26px !important;
  color: #333 !important;
  font-weight: 600;
  padding: 1.5rem 0;
  text-transform: capitalize;
`;

export const GlobalStyles = createGlobalStyle`
  &.ant-btn-variant-outlined {
    background-color: white;
    color: orange;
    border: 1px solid orange;
    border-radius: 0.5rem;
    &:hover{
      border: orange;
      color: white !important;
      background-color: orange !important;
    }
  }
`;

export const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
