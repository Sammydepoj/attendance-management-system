import { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";
import { chartData } from "./data";
const DemoColumn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(chartData);
  }, []);

  const config = {
    data,
    xField: "city",
    yField: "value",
    seriesField: "type",
    isGroup: true,
    maxColumnWidth: 10,
    minColumnWidth: 5,
    dodgePadding: 10,
    legend: false,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return <Column {...config} />;
};
export default DemoColumn;
