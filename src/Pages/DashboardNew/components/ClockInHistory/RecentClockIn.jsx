/* eslint-disable react/prop-types */
import { Button, Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";

const RecentClockIn = ({ participantsInfo }) => {
  const data = participantsInfo?.slice(0, 5).map((participant, index) => {
    // const data = userInfo?.map((participant, index) => {
    const clockInDate = new Date(participant?.clockInDate);
    const clockOutDate = new Date(participant?.clockOutDate);
    return {
      key: index + 1,
      sn: index + 1,
      firstName: participant?.firstName,
      lastName: participant?.lastName,
      clockInDate: clockInDate.toDateString().substring(0, 10),
      clockInTime: clockInDate.toTimeString().substring(0, 8),
      clockOutTime: clockOutDate.toTimeString().substring(0, 8),
      clockInStatus: participant?.clockInStatus,
    };
  });
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
      title: "ClockInDate",
      dataIndex: "clockInDate",
      key: "clockInDate",
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
        clockInStatus
          ? (clockInStatus = "present")
          : (clockInStatus = "absent");
        return (
          <Tag color={color} key={clockInStatus}>
            {clockInStatus.toUpperCase()}
          </Tag>
        );
      },
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="md:w-[40%] overflow-x-scroll">
      <div className=" flex justify-between mb-4">
        <h1 className=" text-lg font-semibold text-[--green]">
          RECENT CLOCK-IN
        </h1>
        <Button
          type="primary"
          className=" bg-blue-400 p-4 rounded-md text-slate-200 font-bold flex items-center"
          onClick={() => {
            navigate("/dashboard/details/clockins");
          }}
        >
          SEE ALL
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RecentClockIn;
