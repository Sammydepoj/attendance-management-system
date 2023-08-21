import { Calendar } from "antd";
const CalendarApp = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return <Calendar onPanelChange={onPanelChange} />;
};
export default CalendarApp;
