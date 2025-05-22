import { Col, Row, Typography, Image, Flex } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Title } = Typography;

export const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.75rem !important;
  .ant-input-outlined:hover,
  ant-input-outlined:focus {
    border-color: orange !important;
  }
  .ant-btn:hover {
    color: orange !important;
    border-color: orange !important;
  }
  div > img {
    padding: 0 0.25rem;
    cursor: pointer;
    &:hover {
      transition: all ease-in-out 0.2s;
      transform: scale(1.2);
    }
  }
`;

export const StyledHelpCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b7b7b7;
  color: white;
  font-size: 0.875rem;
  border-right: 1px solid white;
  span {
    padding: 1rem 0.25rem;
  }
`;

export const StyledDetails = styled.div`
  display: flex;
  background-color: #212121;
  color: #b0b0b0;
  font-size: 0.75rem;
  padding: 1rem;
  div {
    width: 100%;
    padding-top: 2rem;
  }
  div > ul {
    padding: 0;
  }
  div > ul > li {
    list-style: none;
    padding-top: 0.5rem;
    a {
      text-decoration: none;
      color: #b0b0b0;
    }
  }
  div > ul > li > a:hover {
    color: white;
  }
  div > span {
    display: flex;
    align-items: center;
    justify-content: start;

    img {
      width: 22%;
      background-color: white;
      margin-right: 0.5rem;
      border-radius: 0.5rem;
    }
  }
`;

export const StyledDetailsRow = styled(Row)`
  padding: 2rem;
  background-color: #212121;
`;
export const StyledTitle = styled(Title)`
  &&&.ant-typography {
    color: #b0b0b0;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 1rem 0;
  }
`;

export const StyledLink = styled(Link)`
  color: #b0b0b0;
  margin-bottom: 0.75rem;
`;
export const StyledImage = styled(Image)`
  &&&.ant-image-img {
    width: 3rem;
    margin: 0.25rem;
    background-color: white;
    border-radius: 1rem;
  }
`;

export const StyledFlex = styled(Flex)`
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 0;
  &&&h5 {
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 0;
  }
`;
