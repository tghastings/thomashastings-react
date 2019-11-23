import React from "react";
import ReactDOM from "react-dom";
import {Route, HashRouter } from 'react-router-dom';
import Posts from "./Posts"
import Post from "./Post"

const routing = (
  <HashRouter basename={process.env.PUBLIC_URL+"/"}>
    <div>
      <Route exact path="/" component={Posts} />
      <Route path="/post/:id" component={Post} />
    </div>
  </HashRouter>
)

ReactDOM.render(routing, document.querySelector("#root"));
