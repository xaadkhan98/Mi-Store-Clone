import React from "react";
import styled from "styled-components";
import { StyledCollection, StyledContent } from "./Components/styles";
import { Image } from "antd";

const Collection = () => {
  return (
    <StyledCollection>
      <StyledContent>
        <a href="">
          <Image
            preview={false}
            src="./Collection/website_icons_mobile-05.avif"
            alt=""
          />
          <h4>Smartphones</h4>
        </a>
        <a href="">
          <Image
            preview={false}
            src="./Collection/website_icons_mobile-12.avif"
            alt=""
          />
          <h4>Gear & Devices</h4>
        </a>
        <a href="">
          <Image
            preview={false}
            src="./Collection/website_icons_mobile-03.avif"
            alt=""
          />
          <h4>Audio</h4>
        </a>
        <a href="">
          <Image
            preview={false}
            src="./Collection/website_icons_mobile-10.avif"
            alt=""
          />
          <h4>Camera & Visual</h4>
        </a>
        <a href="">
          <Image
            preview={false}
            src="./Collection/website_icons_mobile-04.avif"
            alt=""
          />
          <h4>Powerbank & Charging</h4>
        </a>
      </StyledContent>
    </StyledCollection>
  );
};

export default Collection;
