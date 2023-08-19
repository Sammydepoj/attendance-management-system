import { Button, Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";

const clockInStatus = false;

// const arr =  [1,2,3,4,5]
// console.log(arr.slice(-3, arr.length));

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
];

const RecentClockIn = () => {
  const navigate = useNavigate();
  return (
    <div  className=" max-w-[20rem] overflow-x-auto md:max-w-[30rem]">
      <div className=" flex justify-between mb-4">
        <h1 className=" text-lg font-semibold text-[--green]">
          RECENT CLOCK-IN
        </h1>
        <Button
          type="primary"
          className=" bg-blue-400 p-4 rounded-md text-slate-200 font-bold flex items-center"
          onClick={() => {navigate("/dashboard/details/clockins");}}
        >
          SEE ALL
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RecentClockIn;
