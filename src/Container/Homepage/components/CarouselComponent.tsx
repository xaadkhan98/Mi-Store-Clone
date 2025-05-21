import { Carousel } from "antd";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
`;

const CarouselComponent = () => {
  return (
    <div>
      <Carousel arrows infinite={true} autoplay autoplaySpeed={3000}>
        <div>
          <StyledImage src="/Carousel/CarouselImg (1).webp" />
        </div>
        <div>
          <StyledImage src="/Carousel/CarouselImg (2).webp" />
        </div>
        <div>
          <StyledImage src="/Carousel/CarouselImg (3).webp" />
        </div>
        <div>
          <StyledImage src="/Carousel/CarouselImg (4).webp" />
        </div>
        <div>
          <StyledImage src="/Carousel/CarouselImg (5).webp" />
        </div>
        <div>
          <StyledImage src="/Carousel/CarouselImg (6).webp" />
        </div>
        <div>
          <StyledImage src="/Carousel/CarouselImg (7).webp" />
        </div>
        <div>
          <StyledImage src="/Carousel/CarouselImg (8).webp" />
        </div>
        <div>
          <StyledImage src="/Carousel/CarouselImg (9).webp" />
        </div>
        <div>
          <StyledImage src="/Carousel/CarouselImg (10).webp" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
