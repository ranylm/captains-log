import React, { Component } from "react";

export default class Show extends Component {
  state = {};

  render() {
    const log = this.props.data;
    console.log(log);
    return (
      <>
        <div>
          <a href="/log">See All Logs</a>
          <h3>Log # {log._id.toString()}</h3>
          <span>Engines : {log.shipIsBroken ? "Offline" : "Online"}</span>
          <h1>{log.title}</h1>
          <p>{log.entry}</p>
        </div>
        <h3>Comments</h3>
        <ul>
          {log.comments.map((comment) => {
            return (
              <li>
                {comment.author} : {comment.data}
              </li>
            );
          })}
        </ul>
        <form action={`/log/${log._id}/comment`} method="post">
          name:
          <input name="author" />
          <br />
          comment: <input name="data" />
          <br />
          <input type="submit" value="Post comment" />
        </form>
      </>
    );
  }
}
