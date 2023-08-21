import { Table, Tag, Spin } from "antd";
import useGetParticipantInfo from "../../../../hooks/useGetParticipants";

// const data = [
//   {
//     key: "1",
//     sn: "1",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: clockInStatus,
//   },
//   {
//     key: "2",
//     sn: "2",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: clockInStatus,
//   },
//   {
//     key: "3",
//     sn: "3",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: true,
//   },
//   {
//     key: "4",
//     sn: "4",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: true,
//   },
//   {
//     key: "5",
//     sn: "5",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: true,
//   },
//   {
//     key: "6",
//     sn: "6",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: true,
//   },
//   {
//     key: "7",
//     sn: "7",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: true,
//   },
//   {
//     key: "8",
//     sn: "8",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: true,
//   },
//   {
//     key: "9",
//     sn: "9",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: true,
//   },
//   {
//     key: "10",
//     sn: "10",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: true,
//   },
//   {
//     key: "11",
//     sn: "11",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: true,
//   },
//   {
//     key: "12",
//     sn: "12",
//     firstName: "Olawale",
//     lastName: "Ogundele",
//     email: "jonsnow@hisemail.com",
//     clockInTime: "8:45",
//     clockOutTime: "2:45",
//     clockInStatus: true,
//   },
// ];

const ClockInHistory = () => {
  const { participantsInfo, loading } = useGetParticipantInfo();
  // console.log(participantsInfo[0].clockInDate);
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
        clockInStatus
          ? (clockInStatus = "Clocked In")
          : (clockInStatus = "Absent");
        return (
          <Tag color={color} key={clockInStatus}>
            {clockInStatus.toUpperCase()}
          </Tag>
        );
      },
    },
  ];
  const data = participantsInfo.map((participant, index) => {
    const clockInDate = new Date(participant.clockInDate);
    const clockOutDate = new Date(participant.clockOutDate);
    return {
      key: participant.id,
      sn: index + 1,
      firstName: participant.firstName,
      lastName: participant.lastName,
      email: participant.email,
      clockInDate: participant.clockInDate,
      clockInTime: clockInDate.toTimeString().substr(0, 8),
      clockOutTime: clockOutDate.toTimeString().substr(0, 8),
      clockInStatus: participant.clockInStatus,
    };
  });
  return (
    <Spin spinning={loading}>
      <div className="">
        <Table columns={columns} dataSource={data} />
      </div>
    </Spin>
  );
};

export default ClockInHistory;
