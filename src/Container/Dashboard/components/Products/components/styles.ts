import { Button, Flex, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const StyledButton = styled(Button)`
  background-color: #009c00;
  color: white;
  &&&:hover {
    border: none;
    border: #009c00 1px solid;
    color: #009c00;
  }
`;

export const StyledTitle = styled(Title)`
  &&&.ant-typography {
    color: #797272;
  }
`;

export const StyledFlex = styled(Flex)`
  margin: 0 0 2rem 0;
`;
