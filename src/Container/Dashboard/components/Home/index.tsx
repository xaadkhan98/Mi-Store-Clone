import { Col, Flex, Row, Space, Typography } from "antd";
import { Card } from "antd";
import styled from "styled-components";

import { FundOutlined, ShoppingOutlined, TagOutlined } from "@ant-design/icons";
import { Gauge } from "@ant-design/plots";
import React from "react";
import {
  StyledCard,
  StyledGuageText,
  StyledIcon,
  StyledRow,
  StyledText,
  StyledTitle,
  Title,
} from "./components/styles";

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

// Pie Chart Data from Documentation
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
      <StyledRow>
        <Col xs={24} xl={10}>
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
      </StyledRow>
    </React.Fragment>
  );
};

export default Home;
