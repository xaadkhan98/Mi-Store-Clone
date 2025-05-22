import { Row, Col } from "antd";
import UserTable from "./components";
import { StyledTitle } from "../Products/components/styles";
import { StyledFlex } from "./components/styles";

const Users = () => {
  return (
    <div>
      <StyledTitle level={4}>Registered Users</StyledTitle>
      <Row>
        <StyledFlex justify="center">
          <Col span={22}>
            <UserTable />
          </Col>
        </StyledFlex>
      </Row>
    </div>
  );
};

export default Users;
