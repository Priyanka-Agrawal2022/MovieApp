import React from "react";

export default class Student extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    const { name, marks } = this.props;
    return (
      <>
        <h1>Hello {name}!</h1>
        <p>You have secured {marks}%.</p>
        <hr />
      </>
    );
  }
}
