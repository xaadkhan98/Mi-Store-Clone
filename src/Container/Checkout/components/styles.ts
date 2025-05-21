import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const { Title } = Typography;

export const GlobalStyles = createGlobalStyle`
  td>div>img{
    height: 7rem !important;
    width: 7rem !important;
  }

  tr>td:nth-child(2){
    font-weight: 500;
  }
  tr>td:nth-child(3){
    font-style: italic;
  }
  tr>td:nth-child(5){
    font-weight: 500;
    color: orange;
  }
  
`;

export const StyledTitle = styled(Title)`
  color: orange !important;
  text-align: center;
  .icon {
    margin-right: 0.75rem;
    transform: scale(1.1);
  }
`;

export const StyledEmptyCart = styled(Space)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
`;

export const StyledButton = styled(Link)`
  background-color: white;
  color: orange;
  border: 1px solid orange !important;
  margin: 1rem 0;
  display: flex;
  justify-self: end;
  padding: 0.35rem 0.5rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: orange !important;
    color: white !important;
  }
`;
