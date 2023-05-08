import React, { Component } from "react";

export default class Index extends Component {
  render() {
    const logs = this.props.data;
    console.log(logs);
    return (
      <>
        <h1>Index</h1>
        <ul>
          {logs.map((log) => {
            return <li>{log.entry}</li>;
          })}
        </ul>
      </>
    );
  }
}
