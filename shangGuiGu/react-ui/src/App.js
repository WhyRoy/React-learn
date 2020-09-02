import React from "react";
import {
  ConfigProvider,
  Button,
  DatePicker,
  version,
  Divider,
  message,
  Alert,
} from "antd";
import TimeSelect from "./component/selectTime";
import Buttondemo from "./component/button";
import IconList from "./component/icon";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
      <TimeSelect />
      <Buttondemo />
      <br />
      <Divider>{<IconList />}</Divider>
      <IconList />
    </div>
  );
}

export default App;
