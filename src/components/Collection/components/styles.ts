import { Button, Card } from "antd";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  border: 1px solid orange !important;

  &&&.ant-btn-color-link.ant-btn-variant-link {
    color: orange;
    box-shadow: none;
    border: none;
    border: 1px solid orange;
    background-color: white;
    &&:hover {
      background-color: orange;
      color: white;
    }
  }
`;

export const StyledCard = styled(Card)`
  width: 80%;
`;
