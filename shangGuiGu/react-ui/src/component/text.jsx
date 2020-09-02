import React, { Component } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
class Text extends Component {
  render() {
    return <ReactQuill theme="snow" />;
  }
}

export default Text;
