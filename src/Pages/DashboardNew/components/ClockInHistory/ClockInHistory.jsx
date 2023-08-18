import { Table, Tag } from "antd";

const clockInStatus = false;

const columns = [
  {
    title: "S/N",
    dataIndex: "sn",
    key: "sn",
  },

  {
    title: "First-Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last-Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Clock-In Time",
    dataIndex: "clockInTime",
    key: "clockInTime",
  },
  {
    title: "Clock-Out Time",
    dataIndex: "clockOutTime",
    key: "clockOutTime",
  },

  {
    title: "Clock-In Status",
    key: "clockInStatus",
    dataIndex: "clockInStatus",
    render: (_, { clockInStatus }) => {
      let color = "";
      clockInStatus ? (color = "geekblue") : (color = "volcano");
      clockInStatus ? (clockInStatus = "present") : (clockInStatus = "absent");
      return (
        <Tag color={color} key={clockInStatus}>
          {clockInStatus.toUpperCase()}
        </Tag>
      );
    },
  },
];

const data = [
  {
    key: "1",
    sn: "1",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: clockInStatus,
  },
  {
    key: "2",
    sn: "2",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: clockInStatus,
  },
  {
    key: "3",
    sn: "3",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: true,
  },
  {
    key: "4",
    sn: "4",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: true,
  },
  {
    key: "5",
    sn: "5",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: true,
  },
  {
    key: "6",
    sn: "6",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: true,
  },
  {
    key: "7",
    sn: "7",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: true,
  },
  {
    key: "8",
    sn: "8",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: true,
  },
  {
    key: "9",
    sn: "9",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: true,
  },
  {
    key: "10",
    sn: "10",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: true,
  },
  {
    key: "11",
    sn: "11",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: true,
  },
  {
    key: "12",
    sn: "12",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com",
    clockInTime: "8:45",
    clockOutTime: "2:45",
    clockInStatus: true,
  },
];

const ClockInHistory = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ClockInHistory;
