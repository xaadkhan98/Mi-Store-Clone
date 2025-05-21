import { Space, Typography } from "antd";
import styled from "styled-components";

const { Paragraph } = Typography;

export const StyledFrag = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 60%;
  padding: 2rem;
  margin: 0 5%;
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
