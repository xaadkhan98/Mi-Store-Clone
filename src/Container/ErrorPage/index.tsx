import { Image, Flex, Typography } from "antd";
import styled from "styled-components";

const { Title, Link } = Typography;

const StyledImage = styled(Image)`
  width: 30%;
  height: 30%;
  mix-blend-mode: multiply;
`;

const StyledFlex = styled(Flex)`
  margin: 1rem 0;
`;

const ErrorPage = () => {
  return (
    <StyledFlex justify="center" align="center" vertical>
      <StyledImage
        preview={false}
        width={400}
        src="https://deerdesigner.com/wp-content/uploads/2024/06/Article-55-web-design-problems-01.png.webp"
      />
      <Title level={4} style={{ color: "orange" }}>
        Look's like you ran into an Error!
      </Title>
      <Link href="/">Return to Homepage</Link>
    </StyledFlex>
  );
};

export default ErrorPage;
