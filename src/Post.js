import React from "react";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import moment from "moment";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.postID = this.props.match.params.id;
    this.state = { post: {} };
  }

  unescapeHTML(value) {
    return value
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }

  componentDidMount() {
    axios.get("https://api.ascode.io/post/" + this.postID).then(res => {
      const post = res.data;
      // console.log(posts);
      this.setState({ post });
    });
  }

  fixDate(date) {
    return moment(String(date)).format("LL");
  }

  render() {
    return (
      <main id="post">
        <div className="article">
          <h2>{this.state.post.Title}</h2>
          <date>{this.fixDate(this.state.post.Date)}</date>
          <span>{ReactHtmlParser(this.state.post.Content)}</span>
        </div>
      </main>
    );
  }
}

export default Post;
