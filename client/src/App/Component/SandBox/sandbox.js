/** @format */

import React, { Component, Fragment } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { InputLabel } from "@material-ui/core";

class DropzoneAreaExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      text: "",
    };
  }
  handleChange(files) {
    this.setState({
      files: files,
    });
    console.log(files);
  }
  onChange(event) {
    this.setState({ text: event.target.value });
  }
  onSubmit(event) {
    alert("onSubmit");
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <Fragment>
        <br />
        <br />
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            type='text'
            value={this.state.text}
            name='text'
            placeholder='enter some text'
            onChange={(e) => this.onChange(e)}
          />
          <DropzoneArea onChange={this.handleChange.bind(this)} />
          <button onSubmit={this.onSubmit.bind(this)}>Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default DropzoneAreaExample;
