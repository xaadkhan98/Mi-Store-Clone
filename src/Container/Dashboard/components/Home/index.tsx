import { Col, Flex, Row, Space, Typography } from "antd";
import { Card } from "antd";
import styled from "styled-components";

import { FundOutlined, ShoppingOutlined, TagOutlined } from "@ant-design/icons";
import { Gauge } from "@ant-design/plots";
import React from "react";

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
const StyledGuageText = styled(Text)`
  font-weight: 400;
  color: #000000;
  display: flex;
  justify-content: center;
  font-weight: 500;
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
  const config = {
    data: {
      target: 65.9,
      total: 100,
      name: "score",
      thresholds: [33.3, 77.6, 100],
    },
    legend: false,
    scale: {
      color: {
        range: ["#F4664A", "#FAAD14", "green"],
      },
    },
  };

  return (
    <React.Fragment>
      {/* Title of the page */}
      <StyledTitle level={4}>Welcome!</StyledTitle>

      {/* Two Separated sections for cards and charts */}
      <Row>
        <Col span={10}>
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
        <Col span={7}>
          <Flex justify="center" align="center">
            <Card>
              <Gauge width={225} height={225} {...config} />
              <StyledGuageText>Returning Client's Percentage %</StyledGuageText>
            </Card>
          </Flex>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
