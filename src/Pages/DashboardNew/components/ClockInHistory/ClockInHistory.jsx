import { Table, Tag, Spin } from "antd";
import useGetParticipantInfo from "../../../../hooks/useGetParticipants";

const ClockInHistory = () => {
  const { participantsInfo, loading } = useGetParticipantInfo();

  const clockIns = participantsInfo?.filter((clockIn) => {
    return clockIn.approvalStatus === "APPROVED";
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
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   key: "email",
    // },

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
          ? (clockInStatus = "Present")
          : (clockInStatus = "Absent");
        return (
          <Tag color={color} key={clockInStatus}>
            {clockInStatus.toUpperCase()}
          </Tag>
        );
      },
    },
  ];
  const data = clockIns?.map((participant, index) => {
    const clockInDate =
      participant.clockInDate !== null
        ? new Date(participant.clockInDate).toDateString().substring(0, 10)
        : "Invalid";

    const clockInTime =
      participant.clockInDate !== null
        ? new Date(participant.clockOutDate).toTimeString().substring(0, 8)
        : "Invalid";
    const clockOutDate =
      participant.clockOutDate !== null
        ? new Date(participant.clockOutDate).toTimeString().substring(0, 8)
        : "Invalid";
    // const clockOutDate = new Date(participant.clockOutDate);
    return {
      key: index + 1,
      sn: index + 1,
      firstName: participant.firstName,
      lastName: participant.lastName,
      email: participant.email,
      clockInDate: clockInDate,
      clockInTime: clockInTime,
      clockOutTime: clockOutDate,
      clockInStatus: participant.clockInStatus,
    };
  });
  return (
    <Spin spinning={loading}>
      <div className="overflow-scroll w-full">
        <Table columns={columns} dataSource={data} />
      </div>
    </Spin>
  );
};

export default ClockInHistory;
