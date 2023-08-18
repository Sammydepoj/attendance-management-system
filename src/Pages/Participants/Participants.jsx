import { Table } from "antd";

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
];

const data = [
  {
    key: "1",
    sn: "1",
    firstName: "Olawale",
    lastName: "Ogundele",
    email: "jonsnow@hisemail.com"
  },
]

const Participants = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Participants