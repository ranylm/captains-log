import React, { Component } from "react";

export default class Edit extends Component {
  render() {
    const log = this.props.data;
    return (
      <>
        <div>Edit</div>
        <form action={`../?_method=PUT`} method="post">
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
          Remaining Ratios{" "}
          <input type="number" name="rations" min={0} value={log.rations} />
          <input type="submit" value="Save" />
        </form>
      </>
    );
  }
}
