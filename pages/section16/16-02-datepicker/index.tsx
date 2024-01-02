import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import { useState } from "react";

export default function App(): JSX.Element {
  const [value, setValue] = useState("");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setValue(dateString);
  };

  return (
    <Space direction="vertical" id="id">
      <DatePicker onChange={onChange} />
      <span>{value}</span>
    </Space>
  );
}
