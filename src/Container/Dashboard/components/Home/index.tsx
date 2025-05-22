import { Col, Flex, Row, Space, Typography } from "antd";
import { Card } from "antd";
import styled from "styled-components";

import { FundOutlined, ShoppingOutlined, TagOutlined } from "@ant-design/icons";
import UserTable from "./components";

const { Title, Text } = Typography;

const StyledTitle = styled(Title)`
  color: #797272 !important;
  padding-bottom: 2rem;
`;

const StyledCard = styled(Card)`
  width: 45% !important;
  margin-bottom: 1rem;
`;

const StyledIcon = styled(Space)`
  font-size: 1.5rem;
  background: orange;
  padding: 0 0.25rem;
  border-radius: 6px;
  color: white;
`;

const StyledText = styled(Text)`
  font-weight: 400;
  color: orange;
`;

// Mock data for Dashboard Cards
const DashCardsArray = [
  {
    icon: <ShoppingOutlined />,
    text: "Total Orders",
    count: "12,456",
  },
  {
    icon: <TagOutlined />,
    text: "New Leads",
    count: "9,230",
  },
  {
    icon: <FundOutlined />,
    text: "Deals",
    count: "4,893",
  },
  {
    icon: <ShoppingOutlined />,
    text: "Booked Revenue",
    count: "34,230.3k",
  },
];
const Home = () => {
  const data = [
    { year: "2018", sales: 38 },
    { year: "2019", sales: 52 },
    { year: "2020", sales: 61 },
  ];
  return (
    <>
      {/* Title of the page */}
      <StyledTitle level={4}>Welcome!</StyledTitle>

      {/* Two Separated sections for cards and charts */}
      <Row>
        <Col span={12}>
          <Flex wrap justify="space-between">
            {DashCardsArray.map((card) => {
              return (
                <StyledCard variant="borderless">
                  <Flex justify="space-between" align="start">
                    <StyledIcon>{card.icon}</StyledIcon>
                    <Flex vertical align="end" justify="end" flex="column">
                      <StyledText>{card.text}</StyledText>
                      <Title level={3}>{card.count}</Title>
                    </Flex>
                  </Flex>
                </StyledCard>
              );
            })}
          </Flex>
        </Col>
        <Col span={12}>
          {/* <Chart
            height={400}
            autoFit
            data={data}
            interactions={["active-region"]}
          >
            <Axis name="year" />
            <Axis name="sales" />
            <Tooltip shared />
            <Interval position="year*sales" />
          </Chart> */}
        </Col>
      </Row>
    </>
  );
};

export default Home;
