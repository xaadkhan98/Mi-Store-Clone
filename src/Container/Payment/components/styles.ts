import { Button, Flex, Space, Typography } from "antd";
import styled from "styled-components";

const { Paragraph, Text } = Typography;

export const StyledFrag = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 50%;
  padding: 2rem;
  margin: 0 5%;
  border-right: 1px solid orange;
`;

export const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const StyleParagraph = styled(Paragraph)`
  font-size: 0.85rem;
  color: orange;
  font-weight: 500;
`;
export const StyleText = styled(Text)`
  font-size: 0.75rem;
  font-style: italic;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  background-color: green !important;
  margin-top: 2rem;
`;

export const StyledFlex = styled(Flex)`
  width: 100%;
  column-gap: 2rem;
  border: 1px solid orange;
  padding: 0.35rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

export const StyledPaymentFlex = styled(Flex)`
  margin-top: 2rem;
`;

export const StyledPaymentSpace = styled(Space)`
  margin: 2rem 0;
`;
