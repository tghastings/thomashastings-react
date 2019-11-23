import React from "react";

class CommPost extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <li>
        <a href={"/post/" + this.props.id}>{this.props.title}</a>
        <date>{this.props.date}</date>
      </li>
    );
  }
}

export default CommPost;