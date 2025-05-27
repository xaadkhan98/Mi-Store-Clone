import { Col, Space, Image, Row, Flex, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const StyledCollection = styled(Space)`
  width: 80%;
  margin: 0 auto;
  background-color: white;
  margin-top: 1rem;
  &&&.ant-space {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999999999;
    border-radius: 3rem;
    z-index: auto;
  }
`;
export const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledFlex = styled(Flex)`
  display: flex;
  justify-self: center;
  width: 100%;
`;

export const StyledImage = styled(Image)`
  &.ant-image-img {
    width: 40%;
    display: flex;
    justify-self: center;
  }
`;

export const StyledRow = styled(Row)`
  background-color: white;
  border-radius: 2rem;
  padding: 1rem 0;
  &&&.ant-row {
    display: flex;
    justify-content: center;
    align-items: center;
    place-self: center;
    @media screen and (max-width: 501px) {
      h4 {
        font-size: 0.5rem;
        text-align: center;
        align-items: start;
        margin: 0;
        padding: 0;
      }
    }
  }
`;

export const StyledText = styled(Text)`
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
  width: 100%;

  @media screen and (max-width: 501px) {
    font-size: 0.5rem;
  }
`;
