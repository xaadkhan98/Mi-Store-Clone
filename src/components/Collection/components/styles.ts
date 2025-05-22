import { Button, Card } from "antd";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  color: orange !important;
  background: white;
  border: none !important;
  border: 1px solid orange !important;
  &:hover {
    color: white !important;
    background-color: orange !important;
  }
`;

export const StyledCard = styled(Card)`
  width: 80%;
`;
