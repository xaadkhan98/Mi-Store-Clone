import { Button, Carousel, Descriptions, Space } from "antd";
import styled, { createGlobalStyle } from "styled-components";

export const StyledSpace = styled(Space)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  /* justify-content: start; */
  flex-direction: column;
  margin-left: 5%;
  padding-bottom: 3rem;
`;

export const StyledCarousel = styled(Carousel)`
  margin-left: 15%;
`;

export const GlobalStyles = createGlobalStyle`
.ant-space-item h2{
  margin: 0;
  padding-top: 5rem;
  font-weight: 500;
}
.ant-space-item h5{
  margin-top: 0.55rem;
  font-weight: 400;
  color: orange;
  font-size: 0.875rem;
}

.ant-descriptions-header{
  margin-bottom: 0.25rem !important;

}
/* .ant-btn{
  width: 80%;
} */
`;

export const StyledButton = styled(Button)`
  margin: 2.5rem 0 0 0;
  width: 40vw !important;
  justify-self: center;
  border: none;
  outline: none;
  border: 1px solid orange;
  color: orange;
  &:hover {
    background-color: orange !important;
    color: white !important;
    border-color: orange !important;
  }
`;

export const StyledDescriptions = styled(Descriptions)`
  padding: 1rem 0;
  .ant-descriptions-view {
    tbody {
      display: flex;
      flex-direction: column;
      tr {
        display: flex;
        flex-direction: column;
        td {
          padding: 0;
          margin: 0;
          div > span:nth-child(1) {
            font-size: 0.75rem;
            font-weight: 500;
          }
          div > span:nth-child(2) {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
`;
