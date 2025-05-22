import {
  StyledCol,
  StyledCollection,
  StyledFlex,
  StyledImage,
  StyledRow,
} from "./Components/styles";

const Collection = () => {
  return (
    <StyledCollection>
      <StyledFlex justify="center" align="start">
        <StyledRow>
          <StyledCol span={4}>
            <StyledImage
              preview={false}
              src="./Collection/website_icons_mobile-05.avif"
              alt=""
            />
            <h4>Smartphones</h4>
          </StyledCol>
          <StyledCol span={4}>
            <StyledImage
              preview={false}
              src="./Collection/website_icons_mobile-12.avif"
              alt=""
            />
            <h4>Gear & Devices</h4>
          </StyledCol>
          <StyledCol span={4}>
            <StyledImage
              preview={false}
              src="./Collection/website_icons_mobile-03.avif"
              alt=""
            />
            <h4>Audio</h4>
          </StyledCol>
          <StyledCol span={4}>
            <StyledImage
              preview={false}
              src="./Collection/website_icons_mobile-10.avif"
              alt=""
            />
            <h4>Camera & Visual</h4>
          </StyledCol>
          <StyledCol span={4}>
            <StyledImage
              preview={false}
              src="./Collection/website_icons_mobile-04.avif"
              alt=""
            />
            <h4>Powerbank & Charging</h4>
          </StyledCol>
        </StyledRow>
      </StyledFlex>
    </StyledCollection>
  );
};

export default Collection;
