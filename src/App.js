import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import Me from "./Components/Me/Me";
import Home from "./Components/Dashboard/Home/Home";
import NormalSentiment from "./Components/Sentiment/Normal/Normal";
import TwitterSentiment from "./Components/Sentiment/Twitter/Twitter";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path={`/me`}>
              <Me />
            </Route>
            <Route path={`/home`}>
              <Home />
            </Route>
            <Route path={`/normal-sentiment`}>
              <NormalSentiment />
            </Route>
            <Route path={`/twitter-sentiment`}>
              <TwitterSentiment />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
