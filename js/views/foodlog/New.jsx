import React, { Component } from "react";

export default class New extends Component {
  state = {};

  render() {
    return (
      <>
        <h1>Create new Food Log</h1>
        <form action="/foodlog" method="POST">
          Title: <input type="text" name="title" />
          <br />
          Entry: <input type="textarea" name="entry" />
          <br />
          Rations Remaining:
          <input type="number" name="rations" min={0} />
          <br />
          <input type="submit" value="Save Log" />
        </form>
      </>
    );
  }
}
