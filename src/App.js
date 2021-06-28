import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import Me from "./Components/Me/Me";
import Home from "./Components/Dashboard/Home/Home";
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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
