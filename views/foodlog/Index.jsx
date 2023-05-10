import React, { Component } from "react";

export default class Index extends Component {
  render() {
    const logs = this.props.data;
    console.log(logs);
    return (
      <>
        <h1>Index</h1>
        <a href="/foodlog/new">New Log</a>
        <ul>
          {logs.map((log) => {
            return (
              <li>
                <a href={`/foodlog/${log._id.toString()}`}>{log.title}</a>
                <form action={`/foodlog/edit/${log._id.toString()}`}>
                  <input type="submit" value="Edit" />
                </form>
                <form
                  action={`/foodlog/${log._id.toString()}?_method=delete`}
                  method="POST"
                >
                  <input type="submit" value="Delete" />
                </form>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
