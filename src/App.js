import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicComponent from "./components/BasicComponent";
import Home from "./containers/Home";
import DetailPage from "./components/DetailPage";

const data = [{ name: "alcohol" }, { name: "whatever" }];

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/basic" component={BasicComponent} />
            {data.map((el, i) => (
              <Route
                key={i}
                exact
                path={`/without/${i}`}
                render={props => <DetailPage {...props} name={el.name} />}
              />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
