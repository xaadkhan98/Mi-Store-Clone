import { Flex, Row, Col, Typography } from "antd";
import UserTable from "../Home/components";

const { Title } = Typography;

const Users = () => {
  return (
    <div>
      <Title level={4} style={{ color: "#797272" }}>
        Registered Users
      </Title>
      <Row style={{ width: "100%" }}>
        <Flex justify="center" style={{ marginTop: "1rem", width: "100%" }}>
          <Col span={22}>
            <UserTable />
          </Col>
        </Flex>
      </Row>
    </div>
  );
};

export default Users;
