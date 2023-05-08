import React, { Component } from "react";

export default class Index extends Component {
  render() {
    const logs = this.props.data;
    console.log(logs);
    return (
      <>
        <h1>Index</h1>
        <a href="./new">New Log</a>
        <ul>
          {logs.map((log) => {
            return (
              <li>
                {log.title} [{log.shipIsBroken === false ? "online" : "offline"}
                ] {log.entry}{" "}
                <form action={`./edit/${log._id.toString()}`}>
                  <input type="submit" value="Edit" />
                </form>
                <form
                  action={`./${log._id.toString()}?_method=delete`}
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
