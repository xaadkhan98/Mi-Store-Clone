import { Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Text } = Typography;

export const TopbarStyled = styled.div`
  color: #b0b0b0 !important;
  display: flex;
  align-items: center;
  width: 70%;
  margin: auto;
  justify-content: space-between;
  height: 40px;
`;

export const TopbarLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledText = styled(Text)`
  color: #b0b0b0 !important;
  border-right: 1px solid #424242;
  font-size: 0.75rem;
  padding: 0 20px;
  font-weight: normal;
  text-align: start;
`;

export const TopBar = styled.div`
  background-color: #212121;
`;

export const StyledLink = styled(Link)`
  position: relative;
`;
