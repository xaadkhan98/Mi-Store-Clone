import { Card, Row, Space, Typography } from "antd";
import styled from "styled-components";

export const { Title, Text } = Typography;

export const StyledTitle = styled(Title)`
  color: #797272 !important;
  padding-bottom: 2rem;
`;

export const StyledCard = styled(Card)`
  width: 45% !important;
  margin-bottom: 1rem;
`;

export const StyledIcon = styled(Space)`
  font-size: 1.5rem;
  background: orange;
  padding: 0 0.25rem;
  border-radius: 6px;
  color: white;
`;

export const StyledText = styled(Text)`
  font-weight: 400;
  color: orange;
`;
export const StyledGuageText = styled(Text)`
  font-weight: 400;
  color: #000000;
  display: flex;
  justify-content: center;
  font-weight: 500;
`;

export const StyledRow = styled(Row)`
  @media screen and (max-width: 501px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
