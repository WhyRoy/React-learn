import React, { Component, useState } from "react";
import { TimePicker } from "antd";

const TimeSelect = () => {
  const [value, setValue] = useState(null);
  const onChange = (time) => {
    setValue(time);
  };
  return <TimePicker value={value} onChange={onChange} />;
};

export default TimeSelect;
