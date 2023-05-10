import React, { Component } from "react";

export default class Edit extends Component {
  render() {
    const log = this.props.data;
    return (
      <>
        <div>Edit</div>
        <form action={`/log/?_method=PUT`} method="post">
          Log ID :
          <input
            type="text"
            name="id"
            value={log._id.toString()}
            readOnly={true}
          />
          Title:
          <input type="text" name="title" value={log.title} />
          Entry:
          <input type="textarea" name="entry" value={log.entry} />
          Is Ship Broken?{" "}
          <input
            type="checkbox"
            name="shipIsBroken"
            defaultChecked={log.shipIsBroken}
          />
          <input type="submit" value="Save" />
        </form>
      </>
    );
  }
}
