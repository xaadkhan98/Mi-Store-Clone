import React from "react";
import styled from "styled-components";

const StyledCollection = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1;
  flex-direction: row;
  font-size: 0.875rem;
  padding: 20px 10px;
  border-radius: 0.625rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  margin-top: -30px;
  margin-bottom: 20px;
  z-index: 1000;
  position: relative;
  background-color: #fff;
  a {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h4 {
      font-weight: 500;
      margin: 0;
    }
    img {
      max-width: 5rem;
    }
  }
`;

const Collection = () => {
  return (
    <StyledCollection>
      <StyledContent>
        <a href="">
          <img src="./Collection/website_icons_mobile-05.avif" alt="" />
          <h4>Smartphones</h4>
        </a>
        <a href="">
          <img src="./Collection/website_icons_mobile-12.avif" alt="" />
          <h4>Gear & Devices</h4>
        </a>
        <a href="">
          <img src="./Collection/website_icons_mobile-03.avif" alt="" />
          <h4>Audio</h4>
        </a>
        <a href="">
          <img src="./Collection/website_icons_mobile-10.avif" alt="" />
          <h4>Camera & Visual</h4>
        </a>
        <a href="">
          <img src="./Collection/website_icons_mobile-04.avif" alt="" />
          <h4>Powerbank & Charging</h4>
        </a>
      </StyledContent>
    </StyledCollection>
  );
};

export default Collection;
