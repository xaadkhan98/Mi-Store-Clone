import { Row, Space } from "antd";
import styled from "styled-components";
import { StarFilled } from "@ant-design/icons";

export const StyledSpace = styled(Space)`
  display: flex;
  padding-top: 1rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex: 1;
    text-align: center;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 1.5rem;
  :where(.css-dev-only-do-not-override-18afz5u).ant-btn-variant-outlined,
  :where(.css-dev-only-do-not-override-18afz5u).ant-btn-variant-dashed {
    border-color: rgb(68, 17, 17);
    background: #ffffff;
    border: 1px solid black;
    border-radius: 0;
    padding: 1.25rem 1.5rem;
    font-weight: 700;
  }
`;

export const StyledMedals = styled(Space)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  row-gap: 1rem;
  padding: 2rem 20%;

  @media screen and (min-width: 501px) {
    flex-direction: row;
  }
`;
export const StyledContent = styled.div`
  padding: 0 5%;
`;

export const StyledRow = styled(Row)`
  display: flex;
  align-items: start;
  margin-top: 3rem;
`;

export const StyledStarFilled = styled(StarFilled)`
  color: green;
`;
