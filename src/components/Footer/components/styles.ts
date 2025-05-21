import { Col } from "antd";
import styled from "styled-components";

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
