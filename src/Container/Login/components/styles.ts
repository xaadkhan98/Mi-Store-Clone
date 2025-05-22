import { Form, Space, Typography } from "antd";

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

export const StyledForm = styled(Form)`
  &&&:where(.css-dev-only-do-not-override-18afz5u).ant-input-outlined {
    background: rgb(88, 32, 32);
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
  }
  &&&.ant-form-item-control-input-content {
    background: rgb(88, 32, 32);
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
  }
  &&&:where(.css-dev-only-do-not-override-18afz5u).ant-input {
    width: 100%;
    min-width: 700px;
  }
`;
