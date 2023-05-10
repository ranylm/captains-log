import React, { Component } from "react";

export default class Show extends Component {
  state = {};

  render() {
    const log = this.props.data;
    return (
      <>
        <a href="/foodlog">See All Logs</a>
        <h3>Log # {log._id.toString()}</h3>
        <h1>{log.title}</h1>
        <p>{log.entry}</p>
        <span>{log.rations} Rations Remaining</span>
      </>
    );
  }
}
