import React, { Component } from "react";

export default class New extends Component {
  state = {};

  render() {
    return (
      <>
        <h1>Create new Log</h1>
        <form action="./create" method="POST">
          Title: <input type="text" name="title" />
          <br />
          Entry: <input type="text" name="entry" />
          <br />
          Ship broken:
          <input type="checkbox" name="shipIsBroken" />
          <br />
          <input type="submit" value="Save Log" />
        </form>
      </>
    );
  }
}
