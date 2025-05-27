import { Typography } from "antd";
import {
  StyledCol,
  StyledCollection,
  StyledFlex,
  StyledImage,
  StyledRow,
  StyledText,
} from "./Components/styles";

const { Text } = Typography;
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
            <StyledText>Smartphones</StyledText>
          </StyledCol>
          <StyledCol span={4}>
            <StyledImage
              preview={false}
              src="./Collection/website_icons_mobile-12.avif"
              alt=""
            />
            <StyledText>Gear & Devices</StyledText>
          </StyledCol>
          <StyledCol span={4}>
            <StyledImage
              preview={false}
              src="./Collection/website_icons_mobile-03.avif"
              alt=""
            />
            <StyledText>Audio</StyledText>
          </StyledCol>
          <StyledCol span={4}>
            <StyledImage
              preview={false}
              src="./Collection/website_icons_mobile-10.avif"
              alt=""
            />
            <StyledText>Camera & Visual</StyledText>
          </StyledCol>
          <StyledCol span={4}>
            <StyledImage
              preview={false}
              src="./Collection/website_icons_mobile-04.avif"
              alt=""
            />
            <StyledText>Powerbank & Charging</StyledText>
          </StyledCol>
        </StyledRow>
      </StyledFlex>
    </StyledCollection>
  );
};

export default Collection;
