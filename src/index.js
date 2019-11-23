import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Posts from "./Posts"
import Post from "./Post"

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Posts} />
      <Route path="/post/:id" component={Post} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.querySelector("#root"));
