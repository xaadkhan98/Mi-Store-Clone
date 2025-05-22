import {
  Button,
  Carousel,
  Descriptions,
  Space,
  Image,
  Divider,
  Col,
} from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { ShoppingCartOutlined } from "@ant-design/icons";

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
  &.ant-carousel.css-dev-only-do-not-override-18afz5u {
    width: 50%;
  }
  &&&.slick-list {
    width: 50vw;
  }
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

`;

export const StyledButton = styled(Button)`
  margin: 1.5rem 0 0 0;
  width: 40vw !important;
  justify-self: center;
  border: none;
  outline: none;
  border: 1px solid orange;
  color: orange;
  &&&:hover {
    background-color: orange;
    color: white;
    border-color: orange;
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

export const StyledImage = styled(Image)`
  &&&.slick-dots.slick-dots-bottom.ant-carousel.css-dev-only-do-not-override-18afz5u {
    display: none;
  }
`;

export const StyledFragment = styled(Space)`
  display: flex;
  align-items: center;
`;

export const StyledDivider = styled(Divider)`
  border-color: orange;
  padding-inline: 20vw;
  margin: 0;
`;

export const StyledShoppinCartIcon = styled(ShoppingCartOutlined)`
  font-size: 1.25rem;
  padding: "0.25rem";
`;

export const CarouselContainer = styled(Col)`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 20px;
  overflow: hidden;
  place-content: center;

  &&&.slick-slider {
    width: 100%;
    height: 100%;
  }

  &&&.slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentContainer = styled(Col)`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
`;
