import React, { useEffect } from "react";
import { dashboardUsersSaving } from "../../../../../redux/dashboardUsersSlice";
import { useDispatch, useSelector } from "react-redux";
import { dashboardUsersSelector } from "../../../../../redux/selectors";
import { Avatar, Table } from "antd";
import { UserOutlined } from "@ant-design/icons";

// Representing Column headings and linkage with Data
const columns = [
  {
    title: "Profile",
    dataIndex: "profile",
    key: "profile",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "User ID",
    dataIndex: "id",
  },
  {
    title: "Username",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "Phone #",
    dataIndex: "phone",
    key: "phone",
  },
];

const UserTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashboardUsersSaving());
  }, []);

  //Fetching data from Redux-State
  const dataFetched = useSelector(dashboardUsersSelector) || [];

  //Pushing every user one by one for data source of Table  >> Fetched from API
  const data =
    dataFetched?.length > 0
      ? dataFetched.map((user: any) => ({
          profile: <Avatar size="small" icon={<UserOutlined />} />,
          email: user?.email,
          id: user?.id,
          name: `${user?.name.firstname} ${user?.name.lastname}`,
          password: user?.password,
          phone: user?.phone,
          username: user?.username,
        }))
      : [];

  return <Table pagination={false} dataSource={data} columns={columns} />;
};

export default UserTable;
