import { Image, Flex, Typography } from "antd";
import styled from "styled-components";
import { ERROR_IMAGE } from "./components/helper";
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
      <StyledImage preview={false} width={400} src={ERROR_IMAGE} />
      <Title level={4} style={{ color: "orange" }}>
        Look's like you ran into an Error!
      </Title>
      <Link href="/">Return to Homepage</Link>
    </StyledFlex>
  );
};

export default ErrorPage;
