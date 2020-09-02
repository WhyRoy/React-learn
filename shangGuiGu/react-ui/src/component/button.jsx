import React, { Component } from "react";
import { Button } from "antd";

const Buttondemo = () => {
  return (
    <React.Fragment>
      <br />
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </React.Fragment>
  );
};

export default Buttondemo;
