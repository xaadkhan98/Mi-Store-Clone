import { Space, Typography } from "antd";
import styled from "styled-components";

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
`;

export const StyledMedals = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  padding: 2rem 5%;
  span {
  }
  div {
    width: 2px;
    height: 100%;
    background-color: yellow;
    border-right: 2 dotted black;
  }
  span > img {
    padding: 0.5rem;
    width: 100px;
    height: 100%;
  }
`;
export const StyledContent = styled.div`
  padding: 0 5%;
`;
